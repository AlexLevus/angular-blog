import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  post: Post
  uSub: Subscription
  submitted = false

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id)
      })
      ).subscribe((post: Post) => {
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required)
        })
      this.post = post
    })
  }

  submit() {
    if(this.form.invalid) {
      return
    }

    this.submitted = true

    const post = {
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text,
    }

    this.uSub = this.postsService.update(post).subscribe(()=>{
      this.submitted = false
      this.alertService.success('Пост был обновлен')
    })
  }

  ngOnDestroy() {
    if(this.uSub){
      this.uSub.unsubscribe()
    }
  }
}

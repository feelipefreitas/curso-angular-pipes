import { Pipe, PipeTransform } from "@angular/core";

import { PostsSevice } from "../services/posts.service";

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Pipe({
    name: 'postTitle'
})
export class PostTitlePipe implements PipeTransform {
    constructor(private _postsService: PostsSevice) { }

    transform(postId: number): Observable<string> {
        return this._postsService.getPostById(postId).pipe(
            map(post => post.title)
        );
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { IPost } from "../interfaces/post.interface";

@Injectable({
    providedIn: 'root'
})
export class PostsSevice {
    constructor(private _httpClient: HttpClient) { }

    getPostById(postId: number): Observable<IPost> {
        return this._httpClient.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
}
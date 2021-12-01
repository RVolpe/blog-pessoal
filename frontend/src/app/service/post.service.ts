import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from './../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<any>('http://localhost:3000/posts');
  }

  postMensagem(post: Post){
    return this.http.post<any>('http://localhost:3000/posts', post);
  }
}

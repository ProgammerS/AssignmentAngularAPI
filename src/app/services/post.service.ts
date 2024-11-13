import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IDogImage {
  message: string; // URL of the image
  status: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = "https://dog.ceo/api/breeds/image/random";

  constructor(private http: HttpClient) {}

  getDogImage(): Observable<IDogImage> {
    return this.http.get<IDogImage>(this.url);
  }
}
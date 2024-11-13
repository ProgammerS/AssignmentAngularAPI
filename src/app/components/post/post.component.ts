import { Component } from '@angular/core';
import { PostService, IDogImage } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  dogImageUrl: string = '';  // Store the URL of the dog image

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadNewImage(); // Load image when component is initialized
  }

  // Method to reload or load a new dog image
  loadNewImage(): void {
    this.postService.getDogImage().subscribe((data: IDogImage) => {
      this.dogImageUrl = data.message; // Assign the image URL from the service
    });
  }

  // Method to handle reload button click
  reloadImage(): void {
    this.loadNewImage(); // Reload a new dog image on button click
  }
}

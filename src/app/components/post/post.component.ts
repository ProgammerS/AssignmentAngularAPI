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
  dogImageUrls: string[] = [];  // Store an array of dog image URLs

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadDogImages(); // Load images when component is initialized
  }

  // Method to fetch and append multiple dog images
  loadDogImages(): void {
    const numberOfImages = 12;  // Number of images to fetch

    // Fetch multiple dog images
    for (let i = 0; i < numberOfImages; i++) {
      this.postService.getDogImage().subscribe((data: IDogImage) => {
        this.dogImageUrls.push(data.message); // Append each new image URL to the array
      });
    }
  }

  // Method to handle reload button click (append new set of dog images)
  reloadImages(): void {
    this.loadDogImages(); // Append more dog images without replacing the existing ones
  }
}

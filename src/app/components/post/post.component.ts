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
  dogImageUrls: string[] = [];
  selectedImage: string | null = null; // For modal

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadDogImages();
  }

  loadDogImages(): void {
    const numberOfImages = 12;

    for (let i = 0; i < numberOfImages; i++) {
      this.postService.getDogImage().subscribe((data: IDogImage) => {
        this.dogImageUrls.push(data.message);
      });
    }
  }

  reloadImages(): void {
    this.loadDogImages();
  }

  // Open modal with selected image
  viewImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  // Close modal
  closeModal(): void {
    this.selectedImage = null;
  }
}

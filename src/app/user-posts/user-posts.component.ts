import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'; // Import your data service

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  userId: number = -1; // Initialize with a default value
  userPosts: any[] = []; // Holds user's posts

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.userId = +idParam; // Convert string to number
    } else {
      // Handle the case when 'id' is not present, e.g., show an error or redirect
    }

    if (!isNaN(this.userId)) {
      this.dataService.getUserPosts(this.userId).subscribe((posts: any[]) => {
        this.userPosts = posts;
      });
    }
  }
}

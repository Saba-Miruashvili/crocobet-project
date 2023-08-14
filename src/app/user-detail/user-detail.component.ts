import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: number = 0;
  user: any;
  posts: any[] = []; // Declare the posts property here

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.dataService.getUserById(this.userId).subscribe(user => {
        this.user = user;
      });

      // Fetch user's posts
      this.dataService.getUserPosts(this.userId).subscribe(posts => {
        this.posts = posts;
      });
    });
  }
}

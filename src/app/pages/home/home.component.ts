import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  userName: string;
  error = null;
  constructor(
    private ref: ChangeDetectorRef,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {}

  handleFind() {
    this.githubService.getUsetDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = 'User not Found';
        this.ref.detectChanges();
      }
    );
  }
}

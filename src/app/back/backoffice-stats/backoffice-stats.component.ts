import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service-articles/article.service';
import { UsersServiceService } from '../users/users-service/users-service.service';

@Component({
  selector: 'app-backoffice-stats',
  templateUrl: './backoffice-stats.component.html',
  styleUrls: ['./backoffice-stats.component.css']
})
export class BackofficeStatsComponent implements OnInit {

  articles;
  users;
  constructor(
    private articleService: ArticleService,
    private userService: UsersServiceService
    ) { }

  ngOnInit(): void {
    this.articleService.getItems()
      .subscribe( (response: Response) => {
        this.articles = response;
      });
    this.userService.getItems()
      .subscribe(res => {
        this.users = res;
      });
  }

}

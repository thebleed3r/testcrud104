import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service-articles/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles;
  constructor(private service: ArticleService) { }
  ngOnInit(): void {

    this.service.getItems()
      .subscribe( (response: Response) => {
        this.articles = response;
        console.log(this.articles);
      });

  }

}

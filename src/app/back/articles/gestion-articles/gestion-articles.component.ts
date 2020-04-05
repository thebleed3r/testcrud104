import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service-articles/article.service';

@Component({
  selector: 'app-gestion-articles',
  templateUrl: './gestion-articles.component.html',
  styleUrls: ['./gestion-articles.component.css']
})
export class GestionArticlesComponent implements OnInit {

  articles;
  estPublie: 'true';
  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.service.getItems()
      .subscribe( (response: Response) => {
        this.articles = response;
      });
  }

 deleteArticle(article , index) {
   if (window.confirm('Are you sure you want to delete this article ?')) {
     this.service.deleteItem(article._id)
    .subscribe((data) => {
      this.articles.splice(index , 1);
    });
   }
 }

}

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../service-articles/article.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {

  currentArticle;
  submitted = false;

  constructor(
    private articleService: ArticleService ,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.articleService.getItemById(id)
        .subscribe(response => {
          this.currentArticle = response;
          console.log(this.currentArticle);
        });
    });
  }

updateArticle() {

}

newArticle() {

}


}

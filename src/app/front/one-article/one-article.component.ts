import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service-articles/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {
  article;
  constructor(
    private router: ActivatedRoute,
    private service: ArticleService
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( (params) => {
      const id = params.get('id');
      console.log(id);
      this.service.getItemById(id)
        .subscribe( (response: Response) => {
          this.article = response;
          console.log(this.article);
        });
    });
  }


}


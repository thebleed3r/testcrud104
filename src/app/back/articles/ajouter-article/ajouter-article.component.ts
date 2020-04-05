import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../service-articles/article.service';


@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {


article = {
  titre: '',
  contenu: '',
  prix : '',
  img: '',
  auteur: 'larisa02'
};
submitted = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  addArticle() {
    const data = {
      titre: this.article.titre,
      contenu: this.article.contenu,
      prix: this.article.prix,
      img: this.article.img,
      auteur: this.article.auteur
    };
    this.articleService.addItem(data)
      .subscribe( response => {
        // console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newArticle() {
    this.submitted = false;
    this.article = {
      titre: '',
      contenu: '',
      prix : '',
      img: '',
      auteur: 'larisa02'
    };
  }


}

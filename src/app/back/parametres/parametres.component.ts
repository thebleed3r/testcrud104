import { Component, OnInit } from '@angular/core';
import { ParametresService } from './parametres.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {


  parametres;
  params = {
    nbMaxArticles : '10',
    seoMeta : 'ecommerce, buy, flannel, shirt',
    textIntroduction : 'FLANNEL SHIRTS',
    titreHomepage : 'Our shirts are 100% bio cotton'
  };
  constructor(private parService: ParametresService) { }

  ngOnInit(): void {
    this.parService.getSettings()
      .subscribe(res => {
        this.parametres = res;
        console.log(res);
      });

      }


}

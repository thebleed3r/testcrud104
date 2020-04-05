import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { FooterComponent } from './commun/footer/footer.component';
import { ArticlesComponent } from './front/articles/articles.component';
import { AboutUsComponent } from './front/about-us/about-us.component';
import { ContactComponent } from './front/contact/contact.component';
import { LoginComponent } from './front/login/login.component';
import { OneArticleComponent } from './front/one-article/one-article.component';

import { ArticleService } from './service-articles/article.service';
import { MenuBackComponent } from './commun/menu-back/menu-back.component';
import { BackofficeComponent } from './back/backoffice/backoffice.component';
import { GestionArticlesComponent } from './back/articles/gestion-articles/gestion-articles.component';
import { ModifierArticleComponent } from './back/articles/modifier-article/modifier-article.component';
import { AjouterArticleComponent } from './back/articles/ajouter-article/ajouter-article.component';
import { TopBarComponent } from './commun/top-bar/top-bar.component';
import { BackofficeStatsComponent } from './back/backoffice-stats/backoffice-stats.component';
import { GestionUsersComponent } from './back/users/gestion-users/gestion-users.component';
import { AjouterUserComponent } from './back/users/ajouter-user/ajouter-user.component';
import { ModifierUserComponent } from './back/users/modifier-user/modifier-user.component';
import { ParametresComponent } from './back/parametres/parametres.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ArticlesComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    OneArticleComponent,
    MenuBackComponent,
    BackofficeComponent,
    GestionArticlesComponent,
    ModifierArticleComponent,
    AjouterArticleComponent,
    TopBarComponent,
    BackofficeStatsComponent,
    GestionUsersComponent,
    AjouterUserComponent,
    ModifierUserComponent,
    ParametresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path : '' , component : ArticlesComponent},
        {path : 'article/:id' , component : OneArticleComponent},
        {path : 'about' , component : AboutUsComponent},
        {path : 'contact' , component : ContactComponent},
        {path : 'login' , component : LoginComponent},
        {path : 'backoffice' , component : BackofficeComponent},
        {path : 'backoffice/gestion-articles' , component : GestionArticlesComponent},
        {path : 'backoffice/gestion-articles/modifier-article/:id' , component : ModifierArticleComponent},
        {path : 'backoffice/gestion-articles/ajouter-article' , component : AjouterArticleComponent},
        {path : 'backoffice/gestion-users' , component : GestionUsersComponent},
        {path : 'backoffice/gestion-users/modifier-user/:id' , component : ModifierUserComponent},
        {path : 'backoffice/gestion-users/ajouter-user' , component : AjouterUserComponent},
        {path : 'backoffice/parametres' , component : ParametresComponent}
      ]
    )
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

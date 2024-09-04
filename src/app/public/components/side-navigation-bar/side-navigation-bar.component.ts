import {Component, inject, OnInit} from '@angular/core';
import {Source} from "../../../news/model/source.entity";
import {Article} from "../../../news/model/article.entity";
import {NewsApiService} from "../../../news/services/news-api.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {SourceListComponent} from "../../../news/components/source-list/source-list.component";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {ArticleListComponent} from "../../../news/components/article-list/article-list.component";
import {FooterContentComponent} from "../footer-content/footer-content.component";

/**
 * SideNavigationBar Component
 * @class SideNavigationBarComponent
 * @description
 * This component is responsible for displaying the side navigation bar.
 * It displays the list of sources and articles.
 * It also allows the user to switch between languages.
 * @implements OnInit
 * @property {Array<Source>} sources - The list of sources
 * @property {Array<Article>} articles - The list of articles
 * @property {NewsApiService} newsApi - The news api service
 * @property {LogoApiService} logoApi - The logo api service
 * @method searchArticlesForSource - Search articles for a given source
 * @method onSourceSelected - Handle source selection
 * @method ngOnInit - Lifecycle hook that is called after Angular has initialized
 *                    all data-bound properties of a directive
 *
 */
@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatToolbar,
    SourceListComponent,
    MatIconButton,
    MatIcon,
    LanguageSwitcherComponent,
    ArticleListComponent,
    FooterContentComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent implements OnInit {

  protected sources: Array<Source>    = [];
  protected articles: Array<Article>  = [];
  private newsApi: NewsApiService   = inject(NewsApiService);
  private logoApi: LogoApiService   = inject(LogoApiService);

  /**
   * Search articles for a given source
   * @description
   * This method searches for articles for a given source.
   * It uses the news api service to get articles for the source.
   * @param source - The source to search articles for
   */
  searchArticlesForSource(source: any) {
    console.log(`selected source is: ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe((data: any) => {
        this.articles = data['articles'];
        this.articles.forEach((article : { source: { urlToLogo: any; url: any; }; }) => {
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
        console.log(this.articles);
      });
  }

  /**
   * Handle source selection
   * @description
   * This method is called when a source is selected.
   * It searches for articles for the selected source.
   * @param source - The selected source
   */
  onSourceSelected(source: Source) {
    console.log(source.name);
    this.searchArticlesForSource(source);
  }

  /**
   * Lifecycle hook called after Angular has initialized
   * @description
   * This method initializes the component.
   * It uses the news api service to get the list of sources.
   * It then searches for articles for the first source in the list.
   */
  ngOnInit(): void {
    this.newsApi.getSources()
      .subscribe((data: any) => {
        this.sources = data['sources'];
        this.sources.forEach((source: { urlToLogo: string;}) =>
          source.urlToLogo = this.logoApi.getUrlToLogo(source));
        console.log(this.sources);
        this.searchArticlesForSource(this.sources[0]);
      });
  }


}

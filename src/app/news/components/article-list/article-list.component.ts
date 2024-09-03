import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.entity";
import {ArticleItemComponent} from "../article-item/article-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleItemComponent,
    NgForOf
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  title = 'CatchUp';

  @Input() articles!: Array<Article>;

}

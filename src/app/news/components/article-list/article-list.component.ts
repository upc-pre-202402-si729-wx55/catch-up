import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.entity";
import {ArticleItemComponent} from "../article-item/article-item.component";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ ArticleItemComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  title = 'CatchUp';
  @Input() articles!: Array<Article>;

}

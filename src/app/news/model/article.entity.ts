import {Source} from "./source.entity";

/**
 * Article entity class.
 * @class Article
 * @description
 * This class represents an article entity.
 * It contains the following properties:
 * @property title: string - The article title.
 * @property description: string - The article description.
 * @property url: string - The article URL.
 * @property urlToImage: string - The article image URL.
 * @property publishedAt: string - The article publication date.
 * @property source: Source - The article source.
 */
export class Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: Source;

  constructor() {
    this.title = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.publishedAt = '';
    this.source = new Source();
  }
}

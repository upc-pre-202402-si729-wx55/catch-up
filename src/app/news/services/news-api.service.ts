import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

/**
 * News API Service
 * @class NewsApiService
 * @description
 * This class provides a service for the news API.
 * It contains the following properties:
 * @property apiKey: string - The API key.
 * @property baseUrl: string - The base URL of the news API.
 * @property http: HttpClient - The HTTP client.
 * @method getSources() - Returns the sources.
 * @method getArticlesBySourceId(sourceId: string) - Returns the articles by source ID.
 * @method initArticles() - Initializes the articles.
 */
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiKey: string    = `${environment.newsApiKey}` ;
  private baseUrl: string   = 'https://newsapi.org/v2';
  private http: HttpClient  = inject(HttpClient);

  /**
   * Returns the sources.
   * @method getSources
   * @returns Observable - The sources
   */
  getSources() {
    return this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  /**
   * Returns the articles by source ID.
   * @method getArticlesBySourceId
   * @param sourceId - The source ID
   * @returns Observable - The articles
   */
  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  /**
   * Initializes the articles.
   * @method initArticles
   * @returns Observable - The articles
   */
  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = 'https://logo.clearbit.com/';

  constructor() { }

  getUrlToLogo(source: any) {
    return `${this.baseUrl}${ new URL(source.url).hostname}`;
  }
}

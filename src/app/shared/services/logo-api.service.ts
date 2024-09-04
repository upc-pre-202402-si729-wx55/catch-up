import { Injectable } from '@angular/core';

/**
 * Logo API Service
 * @class LogoApiService
 * @description
 * This class provides a service for the logo API.
 * It contains the following properties:
 * @property baseUrl: string - The base URL of the logo API.
 * @method getUrlToLogo(source: any): string - Returns the URL to the logo.
 */
@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  private baseUrl = 'https://logo.clearbit.com/';

  constructor() { }

  /**
   * Returns the URL to the logo.
   * @method getUrlToLogo
   * @param source - The source
   * @returns string - The URL to the logo
   */
  getUrlToLogo(source: any) {
    return `${this.baseUrl}${ new URL(source.url).hostname}`;
  }
}

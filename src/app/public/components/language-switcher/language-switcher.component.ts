import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

/**
 * LanguageSwitcher Component
 * @class LanguageSwitcherComponent
 * @description
 * This component is responsible for displaying the language switcher.
 * It allows the user to switch between languages.
 * @property {string} currentLang - The current language
 * @property {Array<string>} languages - The list of languages
 * @method useLanguage - Use a given language
 *
 */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  currentLang = 'en';
  languages = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  /**
   * Use a given language
   * @method useLanguage
   * @description
   * This method is responsible for using a given language.
   * It is called when the user selects a language.
   * @param language
   */
  useLanguage(language: string) {
    this.translate.use(language);
  }

}

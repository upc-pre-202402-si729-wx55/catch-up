import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [
    TranslateModule,
    MatIcon
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {

}

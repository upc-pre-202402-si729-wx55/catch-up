import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Source} from "../../model/source.entity";
import {MatListItem, MatListItemAvatar, MatListItemLine} from "@angular/material/list";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-source-item',
  standalone: true,
  imports: [
    MatListItem,
    NgOptimizedImage,
    MatListItemAvatar,
    MatListItemLine
  ],
  templateUrl: './source-item.component.html',
  styleUrl: './source-item.component.css'
})
export class SourceItemComponent {
  @Input() source!: Source;
  @Output() sourceSelected = new EventEmitter<Source>();

  onClick() {
    this.sourceSelected.emit(this.source);
  }

}

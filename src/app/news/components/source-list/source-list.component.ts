import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Source} from "../../model/source.entity";
import {MatNavList} from "@angular/material/list";
import {SourceItemComponent} from "../source-item/source-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-source-list',
  standalone: true,
  imports: [
    MatNavList,
    SourceItemComponent,
    NgForOf
  ],
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent {
  @Input() sources!: Array<Source>;
  @Output() sourceSelected = new EventEmitter<Source>();

  onSourceSelected(source: Source) {
    this.sourceSelected.emit(source);
  }

}

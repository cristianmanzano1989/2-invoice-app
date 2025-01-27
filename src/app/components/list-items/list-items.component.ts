import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list-items',
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css',
})
export class ListItemsComponent {
  @Input() items: Item[] = [];

  @Output() removeEventEmmiter = new EventEmitter<number>();

  onRemove(id: number) {
    this.removeEventEmmiter.emit(id);
  }
}

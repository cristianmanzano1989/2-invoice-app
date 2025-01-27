import { Item } from '../../models/item';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css',
})
export class RowItemComponent {
  @Input() item!: Item;

  @Output() removeEventEmmiter = new EventEmitter<number>();
  onRemove(id: number) {
    this.removeEventEmmiter.emit(id);
  }
}

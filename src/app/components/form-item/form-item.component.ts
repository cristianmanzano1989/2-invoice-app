import { Item } from '../../models/item';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'form-item',
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css',
})
export class FormItemComponent {
  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  };

  /**
   * Handles the form submission event.
   * If the form is valid, creates a new item with an ID and emits it through the addItemEventEmitter.
   * After emission, increments the counter ID and resets both the item object and form.
   *
   * @param {NgForm} itemForm - The Angular form object containing the item details
   * @returns {void} Nothing if form is invalid, otherwise emits the new item and resets the form
   * @emits {Object} addItemEventEmitter - Emits an object containing id and item properties
   */
  onSubmit(itemForm: NgForm) {
    if (itemForm.invalid) {
      return;
    }
    this.addItemEventEmitter.emit({
      id: this.counterId,
      ...this.item,
    });
    this.counterId++;
    this.item = {
      product: '',
      price: '',
      quantity: '',
    };
    itemForm.reset();
    itemForm.resetForm();
  }
}

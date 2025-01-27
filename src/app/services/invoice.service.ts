import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/invoice';
import { Item } from '../models/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  /**
   * Private readonly property representing an invoice object.
   * Creates a new invoice by spreading the provided invoice data and
   * transforming the items array to include a total() method for each item.
   *
   * @property {Invoice} invoice - The immutable invoice object
   * @property {Object[]} invoice.items - Array of invoice items with calculated totals
   * @property {Function} invoice.items[].total - Method that calculates item total (price * quantity)
   * @private
   * @readonly
   */
  private readonly invoice: Invoice = {
    ...invoiceData,
    items: invoiceData.items.map((item) => ({
      ...item,
      total(): number {
        return this.price * this.quantity;
      },
    })),
  };
  constructor() {}
  /**
   * Retrieves a copy of the current invoice with the calculated total.
   * @returns {Invoice} A new Invoice object containing all properties of the current invoice and the calculated total.
   */
  getInvoice(): Invoice {
    return { ...this.invoice, total: this.calculateTotal() };
  }

  /**
   *
   * @returns
   */
  /**
   * Calculates the total sum of all items in the invoice.
   * Uses reduce to iterate through invoice items and sum their total values.
   * @returns {number} The total sum of all invoice items
   */
  calculateTotal(): number {
    return this.invoice.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter((item) => item.id !== id);
    return this.getInvoice();
  }

  save(item: Item): Invoice {
    this.invoice.items = [...this.invoice.items, item];
    return this.getInvoice();
  }
}

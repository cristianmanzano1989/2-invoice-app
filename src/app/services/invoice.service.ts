import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/invoice';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private readonly invoice: Invoice = invoiceData;
  constructor() {}

  getInvoice(): Invoice {
    return this.invoice;
  }
}

import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  invoice: Invoice;
  constructor(private readonly invoiceService: InvoiceService) {
    this.invoice = this.invoiceService.getInvoice();
  }
}

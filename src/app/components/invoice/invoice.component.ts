import { Invoice } from '../../models/invoice';
import { Item } from '../../models/item';
import { InvoiceService } from '../../services/invoice.service';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  imports: [
    CommonModule,
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent,
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private readonly invoiceService: InvoiceService) {}
  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }

  /**
   * Removes an invoice item by its identifier.
   *
   * @param id - The unique identifier of the item to be removed
   * @returns void
   */
  removeItem(id: number) {
    this.invoice = this.invoiceService.remove(id);
  }

  addItem(item: Item) {
    this.invoice = this.invoiceService.save(item);
  }
}

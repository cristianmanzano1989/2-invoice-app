import { Company } from '../../models/company';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css',
})
export class CompanyViewComponent {
  @Input() company: Company = new Company();
}

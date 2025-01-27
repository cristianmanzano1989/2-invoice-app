import { Client } from '../../models/client';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'client-view',
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css',
})
export class ClientViewComponent {
  @Input() client: Client = new Client();
}

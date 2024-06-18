import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
 // templateUrl: './app.component.html',
  template: `
    <h1>Financial Transfer Scheduler</h1>
    <app-transfer-form-component.component></app-transfer-form-component.component>
    <app-transfer-list></app-transfer-list>
  `,
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'transfer-app';
}

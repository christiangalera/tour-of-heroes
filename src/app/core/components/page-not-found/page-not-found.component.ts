import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div [style]="{width: '600px', margin: 'auto'}">
      <p-card header="404: Page Not Found" >
        <div class="d-card">We couldn't find that page! Not even with x-ray vision.</div>
      </p-card>
      <p-button [style]="{marginTop: '20px'}" [raised]="true" label="Go Home" icon="pi pi-home" routerLink="/"></p-button>
    </div>


  `,
  styles: [
    `
      :host {
        text-align: center;
      }

    `
  ]
})
export class PageNotFoundComponent {

}

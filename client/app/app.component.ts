import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <appheader></appheader>
        <main class="page-content" aria-label="Content">
          <div class="wrapper">
            {{ content }}
          </div>
        </main>
        <appfooter></appfooter>
    `
})
export class AppComponent {
    content = 'Welcome to Krakenjs Angular2 example application!';
}

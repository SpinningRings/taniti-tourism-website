import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TanitiHeaderAndNavComponent } from "./taniti-header-and-nav/taniti-header-and-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TanitiHeaderAndNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taniti-tourism-website';
}

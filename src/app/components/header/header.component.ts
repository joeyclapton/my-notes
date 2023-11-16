import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      {{ title }}
    </h1>
  `,
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  title = 'My Notes'
}

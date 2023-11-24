import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.sass',
})
export class NoteComponent {
  @Input() id: string | number = '';
  @Input() title: string = '';
  @Input() description: string = '';
}

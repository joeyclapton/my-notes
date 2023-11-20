import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.sass',
})
export class NoteComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}

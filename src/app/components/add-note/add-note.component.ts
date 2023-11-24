import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.sass',
})
export class AddNoteComponent {
  router = inject(Router);

  addNote() {
    this.router.navigateByUrl('');
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note/note.service';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.sass',
})
export class AddNoteComponent {
  router = inject(Router);
  noteService = inject(NoteService);

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  addNote() {
    if (this.form.valid) {
      this.noteService.create({
        title: this.form.value.title as string,
        description: this.form.value.description as string,
      });
      this.router.navigateByUrl('');
    }
  }
}

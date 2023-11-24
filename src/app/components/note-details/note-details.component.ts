import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.sass',
})
export class NoteDetailsComponent {}

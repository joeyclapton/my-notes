import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

export const routes: Routes = [
  {
    path: '',
    title: 'My Notes',
    component: NotesListComponent,
  },
  { path: 'new', title: 'New Note', component: AddNoteComponent },
];

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componente per il form di aggiunta nuova todo
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  // Variabili per i campi del form
  newTodoTitle: string = '';
  newTodoAssignedTo: string = '';
  newTodoDueDate: string = '';

  // Event emitter per inviare la nuova todo al componente padre
  @Output() todoAdded = new EventEmitter<{title: string, assignedTo: string, dueDate: Date | null}>();

  constructor() {}

  // Aggiunge una nuova todo
  addTodo(): void {
    // Verifica che il titolo non sia vuoto
    if (this.newTodoTitle.trim()) {
      const dueDate = this.newTodoDueDate ? new Date(this.newTodoDueDate) : null;

      // Emette l'evento con i dati della nuova todo
      this.todoAdded.emit({
        title: this.newTodoTitle,
        assignedTo: this.newTodoAssignedTo,
        dueDate: dueDate
      });

      // Resetta i campi del form
      this.newTodoTitle = '';
      this.newTodoAssignedTo = '';
      this.newTodoDueDate = '';
    }
  }
}

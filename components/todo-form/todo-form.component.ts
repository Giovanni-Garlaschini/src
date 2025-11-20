import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Componente per il form di aggiunta nuova todo //
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  // Variabili per i campi del form //
  newTodoTitle: string = '';
  newTodoAssignedTo: string = '';
  newTodoDueDate: string = '';

  // Variabile per tracciare se è stato tentato di aggiungere un task invalido //
  showValidationError: boolean = false;

  // Event emitter per inviare la nuova todo al componente padre //
  @Output() todoAdded = new EventEmitter<{title: string, assignedTo: string, dueDate: Date | null}>();

  constructor() {}

  // Verifica se il form è valido (tutti i campi sono compilati) //
  isFormValid(): boolean {
    return this.newTodoTitle.trim() !== '' &&
           this.newTodoAssignedTo.trim() !== '' &&
           this.newTodoDueDate !== '';
  }

  // Verifica se un campo specifico è invalido e deve mostrare l'asterisco //
  isFieldInvalid(field: 'title' | 'assignedTo' | 'dueDate'): boolean {
    if (!this.showValidationError) return false;

    switch(field) {
      case 'title':
        return this.newTodoTitle.trim() === '';
      case 'assignedTo':
        return this.newTodoAssignedTo.trim() === '';
      case 'dueDate':
        return this.newTodoDueDate === '';
      default:
        return false;
    }
  }

  // Aggiunge una nuova todo //
  addTodo(): void {
    // Verifica che tutti i campi siano compilati //
    if (this.isFormValid()) {
      const dueDate = this.newTodoDueDate ? new Date(this.newTodoDueDate) : null;

      // Emette l'evento con i dati della nuova todo //
      this.todoAdded.emit({
        title: this.newTodoTitle,
        assignedTo: this.newTodoAssignedTo,
        dueDate: dueDate
      });

      // Resetta i campi del form e l'errore di validazione //
      this.newTodoTitle = '';
      this.newTodoAssignedTo = '';
      this.newTodoDueDate = '';
      this.showValidationError = false;
    } else {
      // Mostra l'errore di validazione //
      this.showValidationError = true;
    }
  }
}

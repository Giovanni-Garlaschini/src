import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo.model';

// Componente per visualizzare una singola todo //
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule], // FormsModule aggiunto per supportare ngModel
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  // Input: riceve la todo dal componente padre //
  @Input() todo!: Todo;

  // Output: emette eventi al componente padre //
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() deleteTodo = new EventEmitter<number>();
  // Output: emette l'evento di modifica con la todo aggiornata //
  @Output() updateTodo = new EventEmitter<Todo>();

  // Variabile per tracciare se siamo in modalità modifica //
  isEditing: boolean = false;

  // Variabili temporanee per memorizzare i valori durante la modifica //
  editedTitle: string = '';
  editedAssignedTo: string = '';
  editedDueDate: string = '';

  constructor() {}

  // Gestisce il cambio di stato della checkbox //
  onToggleComplete(): void {
    this.toggleCompleted.emit(this.todo.id);
  }

  // Gestisce la cancellazione della todo //
  onDelete(): void {
    this.deleteTodo.emit(this.todo.id);
  }

  // Attiva la modalità modifica e inizializza i campi con i valori correnti //
  startEdit(): void {
    this.isEditing = true;
    // Copia i valori correnti della todo nei campi di modifica //
    this.editedTitle = this.todo.title;
    this.editedAssignedTo = this.todo.assignedTo;
    // Converte la data in formato stringa per l'input date (yyyy-MM-dd) //
    this.editedDueDate = this.todo.dueDate
      ? new Date(this.todo.dueDate).toISOString().split('T')[0]
      : '';
  }

  // Salva le modifiche e emette l'evento di aggiornamento //
  saveEdit(): void {
    // Verifica che il titolo non sia vuoto //
    if (this.editedTitle.trim()) {
      // Crea un oggetto todo aggiornato con i nuovi valori //
      const updatedTodo: Todo = {
        ...this.todo, // Mantiene id e completed //
        title: this.editedTitle.trim(),
        assignedTo: this.editedAssignedTo.trim(),
        // Converte la stringa data in oggetto Date, o null se vuota //
        dueDate: this.editedDueDate ? new Date(this.editedDueDate) : null
      };

      // Emette l'evento con la todo aggiornata //
      this.updateTodo.emit(updatedTodo);

      // Esce dalla modalità modifica //
      this.isEditing = false;
    }
  }

  // Annulla le modifiche e torna alla modalità visualizzazione //
  cancelEdit(): void {
    this.isEditing = false;
    // Resetta i campi di modifica //
    this.editedTitle = '';
    this.editedAssignedTo = '';
    this.editedDueDate = '';
  }

  // Formatta la data in formato leggibile //
  formatDate(date: Date | null): string {
    if (!date) return 'No due date';
    const d = new Date(date);
    return d.toLocaleDateString();
  }
}
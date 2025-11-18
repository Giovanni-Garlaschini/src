import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';

// Componente per visualizzare una singola todo
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  // Input: riceve la todo dal componente padre
  @Input() todo!: Todo;

  // Output: emette eventi al componente padre
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() deleteTodo = new EventEmitter<number>();

  constructor() {}

  // Gestisce il cambio di stato della checkbox
  onToggleComplete(): void {
    this.toggleCompleted.emit(this.todo.id);
  }

  // Gestisce la cancellazione della todo
  onDelete(): void {
    this.deleteTodo.emit(this.todo.id);
  }

  // Formatta la data in formato leggibile
  formatDate(date: Date | null): string {
    if (!date) return 'No due date';
    const d = new Date(date);
    return d.toLocaleDateString();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFilterPipe } from '../../pipes/todo-filter.pipe';

// Componente per visualizzare la lista di todo
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoFilterPipe],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Input: riceve la lista di todo e il filtro corrente dal componente padre
  @Input() todos: Todo[] = [];
  @Input() currentFilter: string = 'all';

  // Output: emette eventi al componente padre
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() deleteTodo = new EventEmitter<number>();

  constructor() {}

  // Gestisce il toggle della todo
  onToggleComplete(id: number): void {
    this.toggleCompleted.emit(id);
  }

  // Gestisce la cancellazione della todo
  onDeleteTodo(id: number): void {
    this.deleteTodo.emit(id);
  }
}

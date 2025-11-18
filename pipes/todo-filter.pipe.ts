import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

// Pipe per filtrare le todo in base allo stato
@Pipe({
  name: 'todoFilter',
  standalone: true
})
export class TodoFilterPipe implements PipeTransform {
  // Filtra le todo: 'all' = tutte, 'active' = non completate, 'completed' = completate
  transform(todos: Todo[], filter: string): Todo[] {
    if (!todos || filter === 'all') {
      return todos;
    }

    if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    }

    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }

    return todos;
  }
}

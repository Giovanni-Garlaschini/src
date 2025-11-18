import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

// Service per gestire le operazioni sulle todo //
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = []; // Array che contiene tutte le todo //
  private nextId: number = 1; // ID progressivo per le nuove todo //

  constructor() {}

  // Ottiene tutte le todo
  getTodos(): Todo[] {
    return this.todos;
  }

  // Aggiunge una nuova todo //
  addTodo(title: string, assignedTo: string, dueDate: Date | null): void {
    const newTodo: Todo = {
      id: this.nextId++,
      title: title,
      completed: false,
      assignedTo: assignedTo,
      dueDate: dueDate
    };
    this.todos.push(newTodo);
  }

  // Segna una todo come completata o non completata //
  toggleComplete(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  // Elimina una todo solo se è completata //
  deleteTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo && todo.completed) {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }
}

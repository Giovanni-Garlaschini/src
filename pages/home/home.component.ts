import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

// Componente della pagina Home con la To-Do List //
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todos: Todo[] = []; // Lista delle todo //
  currentFilter: string = 'all'; // Filtro corrente: all, active, completed //

  // Inietta il service nel costruttore //
  constructor(private todoService: TodoService) {
    // Carica le todo all'avvio //
    this.loadTodos();
  }

  // Carica tutte le todo dal service //
  loadTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  // Gestisce l'aggiunta di una nuova todo //
  onTodoAdded(data: {title: string, assignedTo: string, dueDate: Date | null}): void {
    this.todoService.addTodo(data.title, data.assignedTo, data.dueDate);
    this.loadTodos();
  }

  // Gestisce il toggle dello stato di completamento //
  onToggleComplete(id: number): void {
    this.todoService.toggleComplete(id);
    this.loadTodos();
  }

  // Gestisce la cancellazione di una todo //
  onDeleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.loadTodos();
  }

  // Gestisce l'aggiornamento di una todo esistente //
  onUpdateTodo(updatedTodo: Todo): void {
    this.todoService.updateTodo(updatedTodo);
    this.loadTodos();
  }

  // Cambia il filtro corrente //
  setFilter(filter: string): void {
    this.currentFilter = filter;
  }
}
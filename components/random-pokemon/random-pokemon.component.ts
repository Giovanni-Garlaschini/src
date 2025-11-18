import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { TodoService } from '../../services/todo.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-random-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-pokemon.component.html',
  styleUrls: ['./random-pokemon.component.css']
})
export class RandomPokemonComponent {
  currentPokemon: Pokemon | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private pokemonService: PokemonService,
    private todoService: TodoService
  ) {}

  // Genera un Pokemon casuale al click del bottone //
  generateRandomPokemon(): void {
    this.isLoading = true;
    this.error = null;

    this.pokemonService.getRandomPokemon().subscribe({
      next: (pokemon: Pokemon) => {
        this.currentPokemon = pokemon;
        this.isLoading = false;

        // Aggiungi il Pokemon come todo //
        this.addPokemonAsTodo(pokemon);
      },
      error: (err) => {
        this.error = 'Errore nel caricamento del Pokemon';
        this.isLoading = false;
        console.error('Errore API Pokemon:', err);
      }
    });
  }

  // Aggiunge i dati del Pokemon come una todo //
  private addPokemonAsTodo(pokemon: Pokemon): void {
    const abilities = pokemon.abilities
      .map(a => a.ability.name)
      .join(', ');

    const todoTitle = `Pokemon: ${pokemon.name} | Specie: ${pokemon.species.name} | Abilità: ${abilities}`;

    this.todoService.addTodo(
      todoTitle,
      'Pokemon API',
      new Date()
    );
  }
}

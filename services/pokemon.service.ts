import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Ottiene un Pokemon specifico tramite ID //
  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }

  // Ottiene un Pokemon casuale (da 1 a 80) //
  getRandomPokemon(): Observable<Pokemon> {
    const randomId = Math.floor(Math.random() * 80) + 1;
    return this.getPokemonById(randomId);
  }
}
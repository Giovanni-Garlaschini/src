import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPokemonComponent } from '../../components/random-pokemon/random-pokemon.component';

// Componente della pagina Generator con il generatore Pokemon casuale //
@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [CommonModule, RandomPokemonComponent],
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
}
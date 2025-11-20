// Modello per rappresentare un Pokemon dall'API PokeAPI //
export interface Pokemon {
  id: number; // ID del Pokemon //
  name: string; // Nome del Pokemon //
  species: {
    name: string; // Nome della specie //
    url: string;
  };
  abilities: Array<{
    ability: {
      name: string; // Nome dell'abilità //
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  sprites: {
    front_default: string; // Immagine del Pokemon //
  };
}
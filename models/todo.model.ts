// Modello per rappresentare una singola attività da fare //
export interface Todo {
  id: number; // Identificatore unico della todo //
  title: string; // Titolo dell'attività //
  completed: boolean; // Stato di completamento //
  assignedTo: string; // Persona assegnata //
  dueDate: Date | null; // Data di scadenza //
}
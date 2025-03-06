export type Difficulty = "Iniciante" | "Intermediário" | "Avançado";

export interface Flow {
  id: string;
  title: string;
  difficulty?: Difficulty;
  duration?: number;
  exercises?: number;
  days: number;
  type: "today" | "my-flow" | "saved";
}

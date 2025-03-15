import { Flow } from "@/types/flow";

export const todayFlow: Flow = {
  id: "1",
  title: "Peito e Ombro",
  exercises: 6,
  duration: 45,
  days: 1,
  type: "today",
};

export const userFlows: Flow[] = [
  {
    id: "2",
    title: "Foco em Peito",
    difficulty: "Intermediário",
    days: 7,
    type: "my-flow",
  },
  {
    id: "3",
    title: "Foco em Braço",
    difficulty: "Iniciante",
    days: 14,
    type: "my-flow",
  },
];

export const savedFlows: Flow[] = [
  {
    id: "4",
    title: "Projeto Aesthetic",
    difficulty: "Intermediário",
    days: 90,
    type: "saved",
  },
  {
    id: "5",
    title: "Gorilla Back",
    difficulty: "Avançado",
    days: 30,
    type: "saved",
  },
];

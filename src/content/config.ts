// src/content/config.ts
import { z, defineCollection } from "astro:content";

const carrerasCollection = defineCollection({
  type: "content",
  schema: z.object({
    nombre: z.string(), // Nombre del semestre
    carrera: z.string().optional(), // Nombre de la carrera
    materias: z.array(
      z.object({
        nombre: z.string(),
        horario: z.string(),
        aula: z.string(),
      })
    ),
  }),
});

export const collections = {
  carreras: carrerasCollection,
};

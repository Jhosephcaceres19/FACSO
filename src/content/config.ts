// src/content/config.ts
import { z, defineCollection } from "astro:content";

const carrerasCollection = defineCollection({
  type: "content",
  schema: z.object({
    nombre: z.string(), // Nombre del semestre
    carrera: z.string().optional(), // Nombre de la carrera
    materias: z.array(
      z.object({
        nombre: z.string(), // Nombre de la materia
        docentes: z.array(
          z.object({
            nombre: z.string(), // Nombre del docente
            horario: z.string(), // Horario del docente
            aula: z.string(), // Aula asignada al docente
          })
        ),
      })
    ),
  }),
});

export const collections = {
  carreras: carrerasCollection,
};
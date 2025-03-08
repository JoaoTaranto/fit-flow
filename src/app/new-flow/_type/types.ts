import { z, ZodType } from "zod";

export type newFlowData = {
  title: string;
  level: "select" | "beginner" | "intermediary" | "advanced";
  coverImage: File;
};
export const FlowSchema: ZodType<newFlowData> = z.object({
  title: z.string().min(1, { message: "Este campo é obrigatório!" }),
  level: z
    .enum(["select", "beginner", "intermediary", "advanced"])
    .refine((val) => val !== "select", {
      message: "Selecione uma opção válida!",
    }),
  coverImage: z.instanceof(File, { message: "Este campo é obrigatório!" }),
});

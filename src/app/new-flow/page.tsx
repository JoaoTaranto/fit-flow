"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import Header from "../_components/header";

export type newFLowData = z.infer<typeof FlowSchema>;

// TYPING DATAS

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

type newFlowData = {
  title: string;
  difficulty: "select" | "beginner" | "intermediary" | "advanced";
  coverImage?: File;
};
const FlowSchema: ZodType<newFlowData> = z.object({
  title: z.string().min(1, { message: "Este campo é obrigatório!" }),
  difficulty: z
    .enum(["select", "beginner", "intermediary", "advanced"])
    .refine((val) => val !== "select", {
      message: "Selecione uma opção válida!",
    }),
  coverImage: z
    .any()
    .refine((files) => files && files.length > 0, "Selecione uma imagem!")
    .transform((files) => files[0])
    .refine(
      (file) => ACCEPTED_IMAGE_MIME_TYPES.includes(file.type),
      "Formato de imagem não suportado!",
    ),
});

// COMPONENT

const NewFlow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newFlowData>({
    resolver: zodResolver(FlowSchema),
  });

  const {
    ref: coverImageRef,
    onChange: coverImageOnChange,
    name: coverImageName,
  } = register("coverImage");

  const onSubmit = async (data: newFlowData) => {
    console.log(data);
  };

  return (
    <>
      <div className="h-screen bg-[#f4f4f4]">
        <Header />
        <div className="flex flex-col items-center justify-center gap-5 px-[30px] pb-5">
          <h1 className="pt-[30px] font-bold">Novo Flow</h1>
          <form
            className="flex max-h-[230px] max-w-[330px] flex-col gap-3.5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold" htmlFor="title">
                Título:
              </label>
              <input
                className="w-[330px] rounded-[6px] border-[#E4E4E4] bg-white p-2.5 placeholder-black outline-1"
                {...register("title")}
                type="text"
                placeholder="Título"
                id="title"
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-semibold" htmlFor="difficulty">
                Nível:
              </label>
              <select
                defaultValue={"select"}
                {...register("difficulty")}
                className="w-[330px] rounded-[6px] bg-white p-3 outline-1"
                id="difficulty"
              >
                <option value="select" disabled>
                  Selecione um nível:
                </option>
                <option value="beginner">Iniciante</option>
                <option value="intermediary">Intermediário</option>
                <option value="advanced">Avançado</option>
              </select>
              {errors.difficulty && (
                <p className="text-red-500">{errors.difficulty.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-semibold">Capa:</label>

              <label
                className="w-[330px] rounded-[6px] bg-white p-2.5 outline-1"
                htmlFor="imageInput"
              >
                Selecione uma imagem:
              </label>

              <input
                name={coverImageName}
                ref={coverImageRef}
                placeholder="Capa"
                accept="image/*"
                type="file"
                id="imageInput"
                className="hidden"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  // Chama o onChange do react-hook-form
                  coverImageOnChange(e);
                }}
              />

              {errors.coverImage && (
                <p className="text-red-500">{errors.coverImage.message}</p>
              )}
            </div>
            <button
              onSubmit={handleSubmit(onSubmit)}
              type="submit"
              className="mt-1.5 w-[330px] rounded-[6px] bg-black p-2.5 text-white outline-1"
            >
              Criar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewFlow;

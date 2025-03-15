"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Header from "../_components/header";
import { FlowSchema, newFlowData } from "./_type/types";

const NewFlow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newFlowData>({
    resolver: zodResolver(FlowSchema),
  });

  const onSubmit = (data: newFlowData) => {
    alert(`Form submitted: ${data}`);
  };

  return (
    <div className="h-screen bg-[#f4f4f4]">
      <Header />
      <div className="flex flex-col items-center justify-center gap-5 px-[30px] pb-5">
        <h1 className="pt-[30px] font-bold">Novo Flow</h1>
        <form className="flex max-h-[230px] max-w-[330px] flex-col gap-3.5">
          <input
            className="w-[330px] rounded-[6px] border-[#E4E4E4] bg-white p-2.5 placeholder-black outline-1"
            {...register("title")}
            type="text"
            placeholder="Título"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}

          <select
            defaultValue={"select"}
            {...register("level")}
            className="w-[330px] rounded-[6px] bg-white p-3 outline-1"
          >
            <option value="select" disabled>
              Selecione um nível:
            </option>
            <option value="beginner">Iniciante</option>
            <option value="intermediary">Intermediário</option>
            <option value="advanced">Avançado</option>
          </select>
          {errors.level && (
            <p className="text-red-500">{errors.level.message}</p>
          )}

          <label
            className="w-[330px] rounded-[6px] bg-white p-2.5 outline-1"
            htmlFor="imageInput"
          >
            Selecione uma imagem:
          </label>
          <input
            placeholder="Capa"
            accept="image/*"
            type="file"
            id="imageInput"
            className="hidden"
          />
          {errors.coverImage && (
            <p className="text-red-500">{errors.coverImage.message}</p>
          )}

          <button
            onSubmit={handleSubmit(onSubmit)}
            type="submit"
            className="w-[330px] rounded-[6px] bg-black p-2.5 text-white outline-1"
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewFlow;

"use client";

import { useForm } from "react-hook-form";

import Header from "../_components/header";

const NewFlow = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="h-screen bg-[#f4f4f4]">
      <Header />
      <div className="flex flex-col items-center justify-center gap-5 px-[30px] pb-5">
        <h1 className="pt-[30px] font-bold">Novo Flow</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="flex max-h-[230px] max-w-[330px] flex-col gap-3.5"
        >
          <input
            className="w-[330px] rounded-[6px] border-[#E4E4E4] bg-white p-2.5 placeholder-black outline-1"
            {...register("title")}
            type="text"
            placeholder="Título"
          />
          <select
            {...register("level")}
            className="w-[330px] rounded-[6px] bg-white p-3 outline-1"
          >
            <option disabled>Selecione um nível:</option>
            <option value="beginner">Iniciante</option>
            <option value="intermediary">Intermediário</option>
            <option value="advanced">Avançado</option>
          </select>

          <input
            placeholder="Capa"
            accept="image/*"
            type="file"
            className="w-[330px] rounded-[6px] bg-white p-2.5 outline-1"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewFlow;

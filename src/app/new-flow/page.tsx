import Header from "../_components/header";

const NewFlow = () => {
  return (
    <div className="h-screen bg-[#f4f4f4]">
      <Header />
      <section className="flex flex-col items-center justify-center gap-5 px-[30px] pb-5">
        <h1 className="pt-[30px] font-bold">Novo Flow</h1>
        <div className="flex max-h-[230px] max-w-[330px] flex-col gap-3.5">
          <div>
            <h3>Título</h3>
            <input
              className="w-[330px] rounded-[6px] border-[#E4E4E4] bg-white p-2.5 outline-1"
              type="text"
              placeholder="Digite um título:"
              required
            />
          </div>
          <div>
            <label>Nível</label>
            <select className="w-[330px] rounded-[6px] bg-white p-3 outline-1">
              <option disabled>Selecione um nível:</option>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>
          <div>
            <h3>Capa</h3>
            <input
              className="w-[330px] rounded-[6px] bg-white p-2.5 outline-1"
              type="file"
              id="coverFile"
              required
            />
          </div>
        </div>
        <button
          className="mt-2.5 h-[40px] w-[330px] rounded-md bg-black px-4 py-2 text-white"
          type="submit"
        >
          Criar
        </button>
      </section>
    </div>
  );
};

export default NewFlow;

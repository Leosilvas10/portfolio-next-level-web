export default function Projects() {
  const projetos = [
    { nome: "1RM Sports", imagem: "1rm-sports.png" },
    { nome: "Clínica Já", imagem: "clinicaja.png" },
    { nome: "Gerente Azul", imagem: "gerenteazul.png" },
    { nome: "Aliar Sistemas", imagem: "aliarsistemas.png" },
    { nome: "Nosso Gestor", imagem: "nossogestor.png" },
    { nome: "Desler", imagem: "desler.png" },
  ];

  return (
    <section id="projetos" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white text-center sm:text-left">
          Projetos Recentes
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded shadow p-4 hover:ring-2 hover:ring-orange-400 transition"
            >
              <img
                src={`/images/projetos/${projeto.imagem}`}
                alt={projeto.nome}
                className="h-32 w-full object-cover rounded mb-4"
              />
              <h4 className="text-lg font-semibold mb-1">{projeto.nome}</h4>
              <p className="text-sm text-gray-400">
                Projeto desenvolvido com foco em design moderno e performance.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

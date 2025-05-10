export default function Hero() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center justify-center text-center py-20 bg-gray-900 px-6"
    >
      <img
        src="https://i.pravatar.cc/150?img=56"
        alt="Avatar"
        className="w-40 h-40 rounded-full border-4 border-orange-500 mb-6"
      />
      <h2 className="text-4xl font-bold mb-2">Léo Silva</h2>
      <p className="text-lg text-gray-300 mb-4">
        Especialista em Criação de Sites, UX, UI, SEO e Automações Web
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a
          href="#contato"
          className="px-6 py-3 border border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:text-black transition"
        >
          Entrar em Contato
        </a>
        <a
          href="#projetos"
          className="px-6 py-3 border border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:text-black transition"
        >
          Ver Projetos
        </a>
      </div>
    </section>
  );
}

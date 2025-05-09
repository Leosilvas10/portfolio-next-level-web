export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white scroll-smooth">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white p-8 text-center">
        <h1 className="text-5xl font-bold mb-4">João Silva</h1>
        <p className="text-xl text-gray-700 mb-6">Desenvolvedor Front-End & Especialista em Automação</p>
        <a href="#projetos" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Ver Projetos</a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-gray-700 text-lg">
            Desenvolvedor apaixonado por transformar ideias em soluções digitais. Trabalho com React, Tailwind e automações para entregar resultados modernos, performáticos e com excelente usabilidade.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projetos</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white shadow rounded-lg overflow-hidden border">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Projeto {i + 1}</h3>
                  <p className="text-gray-600 text-sm mb-2">Descrição breve do projeto com foco nas tecnologias aplicadas.</p>
                  <span className="text-xs text-blue-600">#React #Tailwind #API</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Serviços</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Criação de Sites",
              "Automação de Processos",
              "Integrações com APIs",
              "Consultoria Técnica",
              "Design UI/UX",
              "Otimização de SEO"
            ].map((servico, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">{servico}</h3>
                <p className="text-sm text-gray-600">Serviço executado com foco em performance e experiência do usuário.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contato</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Seu nome" className="w-full border p-3 rounded" />
            <input type="email" placeholder="Seu e-mail" className="w-full border p-3 rounded" />
            <textarea placeholder="Sua mensagem" className="w-full border p-3 rounded h-32" />
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Enviar</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center text-sm">
        © {new Date().getFullYear()} João Silva. Todos os direitos reservados.
      </footer>
    </div>
  );
}

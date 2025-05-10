import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Section = ({ id, title, children, bg = "" }) => (
  <section id={id} className={`py-20 px-6 ${bg}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-white text-center sm:text-left">{title}</h2>
      {children}
    </div>
  </section>
);

function FormContato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleEnviar = (e) => {
    e.preventDefault();
    const numeroLimpo = telefone.replace(/\D/g, "");
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const url = `https://wa.me/${numeroLimpo}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <form className="max-w-xl mx-auto space-y-4" onSubmit={handleEnviar}>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
        required
      />
      <PhoneInput
        country={"br"}
        onlyCountries={["br"]}
        disableDropdown={true}
        placeholder="Seu WhatsApp com DDD"
        value={telefone}
        onChange={setTelefone}
        inputStyle={{
          width: "100%",
          backgroundColor: "#1f2937",
          color: "#fff",
          border: "1px solid #374151",
          borderRadius: "0.5rem",
          padding: "1rem",
          paddingLeft: "58px",
          fontSize: "1rem"
        }}
        buttonStyle={{
          backgroundColor: "#1f2937",
          borderRight: "1px solid #374151",
          paddingLeft: "0.75rem"
        }}
        containerStyle={{
          width: "100%"
        }}
        inputProps={{
          name: "phone",
          required: true
        }}
      />
      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-32"
        required
      />
      <button type="submit" className="px-6 py-3 border border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:text-black transition">
        Enviar via WhatsApp
      </button>
    </form>
  );
}

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="font-sans text-white bg-gray-900 scroll-smooth relative">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-950 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo + Marca */}
          <a href="#sobre">
            <img
              src="/images/projetos/logo-next-level-web.png"
              alt="Logo Next Level Web"
              className="h-[116px] w-auto"
            />
          </a>


          {/* Botão Hamburger (mobile) */}
          <div className="sm:hidden">
            <button onClick={() => setMenuAberto(!menuAberto)} className="text-white text-2xl">
              {menuAberto ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden sm:flex space-x-6 text-sm items-center">
            <a href="#sobre" className="hover:text-orange-400">Sobre</a>
            <a href="#skills" className="hover:text-orange-400">Skills</a>
            <a href="#servicos" className="hover:text-orange-400">Serviços</a>
            <a href="#projetos" className="hover:text-orange-400">Projetos</a>
            <a
              href="#contato"
              className="border border-orange-500 px-4 py-1.5 rounded-full text-white font-semibold hover:bg-orange-500 hover:text-black transition"
            >
              Contato
            </a>
          </nav>
        </div>

        {/* Navegação Mobile */}
        {menuAberto && (
          <div className="sm:hidden bg-gray-950 text-white px-6 py-8 flex flex-col items-center space-y-4 text-lg">
            <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">Sobre</a>
            <a href="#skills" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">Skills</a>
            <a href="#servicos" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">Serviços</a>
            <a href="#projetos" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">Projetos</a>
            <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">Contato</a>
          </div>
        )}
      </header>



      <main className="pt-32 sm:pt-24">
        {/* Hero */}
        <section id="sobre" className="flex flex-col items-center justify-center text-center py-20 bg-gray-900 px-6">
          <img src="https://i.pravatar.cc/150?img=56" alt="Avatar" className="w-40 h-40 rounded-full border-4 border-orange-500 mb-6" />
          <h2 className="text-4xl font-bold mb-2">Léo Silva</h2>
          <p className="text-lg text-gray-300 mb-4">Especialista em Criação de Sites, UX, UI, SEO e Automações Web</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#contato" className="px-6 py-3 border border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:text-black transition">Entrar em Contato</a>
            <a href="#projetos" className="px-6 py-3 border border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:text-black transition">Ver Projetos</a>
          </div>
        </section>
        {/* Skills */}
        <Section id="skills" title="Minhas Skills" bg="bg-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {["React", "Tailwind", "Node.js", "APIs", "UX Design", "Automação", "SEO", "Figma"].map((skill, i) => (
              <div key={i} className="bg-gray-900 p-4 rounded shadow hover:scale-105 transition">
                <p className="text-orange-400 font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Serviços */}
        <Section id="servicos" title="Serviços" bg="bg-gray-900">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Criação de Sites",
                desc: "Desenvolvimento de sites modernos, rápidos e responsivos, com foco em usabilidade, identidade visual e performance em todos os dispositivos.",
              },
              {
                title: "UX/UI Design",
                desc: "Experiências intuitivas e interfaces envolventes para aumentar a conversão e encantamento dos usuários.",
              },
              {
                title: "Integrações API",
                desc: "Conecte sistemas e plataformas com segurança e escalabilidade via APIs sob medida para seu negócio.",
              },
              {
                title: "Landing Pages",
                desc: "Landing pages de alta conversão para campanhas de tráfego pago, lançamentos e capturas de leads.",
              },
              {
                title: "Dashboards",
                desc: "Painéis com dados em tempo real, organizados para decisões estratégicas baseadas em indicadores reais.",
              },
              {
                title: "Otimização SEO",
                desc: "SEO técnico e estratégico para melhorar o ranqueamento orgânico e trazer tráfego qualificado ao seu site.",
              },
            ].map((servico, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-orange-400">{servico.title}</h3>
                <p className="text-sm text-gray-300">{servico.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Projetos */}
        <Section id="projetos" title="Projetos Recentes" bg="bg-gray-800">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { nome: "1RM Sports", imagem: "1rm-sports.png" },
              { nome: "Clínica Já", imagem: "clinicaja.png" },
              { nome: "Gerente Azul", imagem: "gerenteazul.png" },
              { nome: "Aliar Sistemas", imagem: "aliarsistemas.png" },
              { nome: "Nosso Gestor", imagem: "nossogestor.png" },
              { nome: "Desler", imagem: "desler.png" },

            ].map((projeto, i) => (
              <div key={i} className="bg-gray-900 rounded shadow p-4 hover:ring-2 hover:ring-orange-400 transition">
                <img
                  src={`/images/projetos/${projeto.imagem}`}
                  alt={projeto.nome}
                  className="h-32 w-full object-cover rounded mb-4"
                />
                <h4 className="text-lg font-semibold mb-1">{projeto.nome}</h4>
                <p className="text-sm text-gray-400">Projeto desenvolvido com foco em design moderno e performance.</p>
              </div>
            ))}
          </div>
        </Section>


        {/* Contato */}
        <Section id="contato" title="Fale Comigo" bg="bg-gray-900">
          <FormContato />
        </Section>
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5531991998938"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Fale via WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-sm py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white text-lg font-bold mb-4 uppercase">Next Level Web</h2>
            <p>Desenvolvimento de sites, automações e soluções digitais sob medida.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-orange-400">Sobre</a></li>
              <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
              <li><a href="#servicos" className="hover:text-orange-400">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-orange-400">Projetos</a></li>
              <li><a href="#contato" className="hover:text-orange-400">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Redes e Contato</h3>
            <p className="flex items-center gap-2 mb-2"><FaWhatsapp /> (31) 99199-8938</p>
            <p className="flex items-center gap-2 mb-2"><FaEnvelope /> contato.nextlevelweb@gmail.com</p>
            <p className="flex items-center gap-2 mb-2"><FaMapMarkerAlt /> Belo Horizonte</p>
            <div className="flex space-x-4 mt-4 text-white text-xl">
              <a
                href="mailto:contato.nextlevelweb@gmail.com"
                className="hover:text-orange-400"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a href="#" className="hover:text-orange-400" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-400" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="hover:text-orange-400" aria-label="Google Meu Negócio"><FaGoogle /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-gray-950 text-center py-4 border-t border-gray-800 text-xs text-gray-500">
        © {new Date().getFullYear()} Next Level Web — Todos os direitos reservados.
      </div>
    </div>
  );
}

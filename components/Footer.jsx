import { FaInstagram, FaLinkedin, FaGoogle, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
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
          <p className="flex items-center gap-2 mb-2">📞 (31) 99199-8938</p>
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-white" /> contato.nextlevelweb@gmail.com
          </p>
          <p className="flex items-center gap-2 mb-2">📍 Belo Horizonte</p>
          <div className="flex space-x-4 mt-4 text-white text-xl">
            <a href="mailto:contato.nextlevelweb@gmail.com" className="hover:text-orange-400" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-orange-400" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-orange-400" aria-label="Google Meu Negócio">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-800 text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Next Level Web — Todos os direitos reservados.
      </div>
    </footer>
  );
}

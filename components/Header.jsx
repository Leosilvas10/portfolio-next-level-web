"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-950 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#sobre">
          <img
            src="/images/projetos/logo-next-level-web.png"
            alt="Logo Next Level Web"
            className="h-[116px] w-auto"
          />
        </a>

        {/* Botão Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="text-white text-2xl"
          >
            {menuAberto ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden sm:flex space-x-6 text-sm items-center">
          <a href="#sobre" className="hover:text-orange-400">
            Sobre
          </a>
          <a href="#skills" className="hover:text-orange-400">
            Habilidades
          </a>
          <a href="#servicos" className="hover:text-orange-400">
            Serviços
          </a>
          <a href="#projetos" className="hover:text-orange-400">
            Projetos
          </a>
          <a
            href="#contato"
            className="border border-orange-500 px-4 py-1.5 rounded-full text-white font-semibold hover:bg-orange-500 hover:text-black transition"
          >
            Contato
          </a>
        </nav>
      </div>

      {/* Menu Mobile Aberto */}
      {menuAberto && (
        <div className="sm:hidden bg-gray-950 text-white px-6 py-8 flex flex-col items-center space-y-4 text-lg">
          <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">
            Sobre
          </a>
          <a href="#skills" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">
            Habilidades
          </a>
          <a href="#servicos" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">
            Serviços
          </a>
          <a href="#projetos" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">
            Projetos
          </a>
          <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-orange-400">
            Contato
          </a>
        </div>
      )}
    </header>
  );
}

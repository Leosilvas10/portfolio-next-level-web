"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Contact() {
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
    <section id="contato" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white text-center sm:text-left">
          Fale Comigo
        </h2>
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
          <button
            type="submit"
            className="px-6 py-3 border border-orange-500 text-white rounded-full font-semibold hover:bg-orange-500 hover:text-black transition"
          >
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

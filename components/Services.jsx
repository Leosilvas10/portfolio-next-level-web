export default function Services() {
  const servicos = [
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
  ];

  return (
    <section id="servicos" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white text-center sm:text-left">
          Serviços
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-orange-400">
                {servico.title}
              </h3>
              <p className="text-sm text-gray-300">{servico.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

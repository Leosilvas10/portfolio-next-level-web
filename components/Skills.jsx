export default function Skills() {
  const habilidades = [
    "React",
    "Tailwind",
    "Node.js",
    "APIs",
    "UX Design",
    "Automação",
    "SEO",
    "Figma",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white text-center sm:text-left">
          Minhas Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {habilidades.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 rounded shadow hover:scale-105 transition"
            >
              <p className="text-orange-400 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

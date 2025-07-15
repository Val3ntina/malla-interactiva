const data = [
  {
    "nombre": "Introducci\u00f3n a la Educaci\u00f3n Parvularia",
    "sigla": "EPA1124",
    "semestre": 1,
    "tipo": "disciplinar",
    "creditos": 3,
    "prerequisitos": []
  },
  {
    "nombre": "Desarrollo Infantil y Neurociencias",
    "sigla": "EPA1120",
    "semestre": 1,
    "tipo": "disciplinar",
    "creditos": 3,
    "prerequisitos": []
  },
  {
    "nombre": "Creatividad y Sensibilidad Est\u00e9tica del Educador de P\u00e1rvulos",
    "sigla": "EPA1125",
    "semestre": 1,
    "tipo": "disciplinar",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Juego en Educaci\u00f3n Parvularia",
    "sigla": "EPA1127",
    "semestre": 1,
    "tipo": "disciplinar",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Taller de Integraci\u00f3n Curricular 1",
    "sigla": "EPA1129",
    "semestre": 1,
    "tipo": "linea-practica",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Estrategias Discursivas para Acceder al Conocimiento Disciplinar",
    "sigla": "LCL122",
    "semestre": 1,
    "tipo": "fundamental",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Antropolog\u00eda Cristiana",
    "sigla": "ICR010",
    "semestre": 1,
    "tipo": "religion",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Perspectivas Cr\u00edticas sobre Infancia",
    "sigla": "EPA1131",
    "semestre": 2,
    "tipo": "disciplinar",
    "creditos": 3,
    "prerequisitos": []
  },
  {
    "nombre": "Ambientes Saludables en Educaci\u00f3n Parvularia",
    "sigla": "EPA1132",
    "semestre": 2,
    "tipo": "disciplinar",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Fundamentos de la Psicolog\u00eda del Aprendizaje y Desarrollo",
    "sigla": "PSI300",
    "semestre": 2,
    "tipo": "disciplinar",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Bases y Desarrollo de la Formaci\u00f3n Social y Personal",
    "sigla": "EPA1130",
    "semestre": 2,
    "tipo": "disciplinar",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Curriculum en Educaci\u00f3n Parvularia",
    "sigla": "EPA1149",
    "semestre": 2,
    "tipo": "disciplinar",
    "creditos": 3,
    "prerequisitos": []
  },
  {
    "nombre": "Taller de Integraci\u00f3n Curricular 2",
    "sigla": "EPA1151",
    "semestre": 2,
    "tipo": "linea-practica",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Ingl\u00e9s 1",
    "sigla": "ING9001",
    "semestre": 2,
    "tipo": "ingles",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "Formaci\u00f3n Fundamental 1",
    "sigla": "FF1",
    "semestre": 2,
    "tipo": "fundamental",
    "creditos": 2,
    "prerequisitos": []
  },
  {
    "nombre": "[]",
    "sigla": "[]",
    "semestre": [],
    "tipo": "[]",
    "creditos": [],
    "prerequisitos": []
];

const aprobados = new Set();

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  const semestres = [...new Set(data.map(r => r.semestre))].sort((a, b) => a - b);

  semestres.forEach(sem => {
    const bloque = document.createElement("div");
    bloque.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    bloque.appendChild(titulo);
    data.filter(r => r.semestre === sem).forEach(ramo => {
      const card = document.createElement("div");
      card.className = `ramo ${ramo.tipo}`;
      const nombre = document.createElement("div");
      nombre.innerHTML = `<strong>${ramo.nombre}</strong><br>(${ramo.sigla})<br>CrÃ©ditos: ${ramo.creditos}`;
      const btn = document.createElement("button");
      btn.textContent = "Aprobar ramo";
      btn.addEventListener("click", () => aprobarRamo(ramo.sigla));
      card.appendChild(nombre);
      card.appendChild(btn);
      if (!ramo.prerequisitos.every(pr => aprobados.has(pr))) {
        card.classList.add("locked");
      }
      if (aprobados.has(ramo.sigla)) {
        card.classList.add("aprobado");
        btn.textContent = "Aprobado âœ…";
      }
      bloque.appendChild(card);
    });
    contenedor.appendChild(bloque);
  });
}

function aprobarRamo(sigla) {
  aprobados.add(sigla);
  renderMalla();
}

renderMalla();

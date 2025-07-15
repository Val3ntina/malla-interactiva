const data = [
  {
    nombre: "Introducción a la Educación Parvularia",
    sigla: "EPA1124",
    semestre: 1,
    tipo: "disciplinar",
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Desarrollo Infantil y Neurociencias",
    sigla: "EPA1120",
    semestre: 1,
    tipo: "disciplinar",
    creditos: 3,
    prerequisitos: []
  },
  {
    nombre: "Creatividad y Sensibilidad Estética del Educador de Párvulos",
    sigla: "EPA1125",
    semestre: 1,
    tipo: "disciplinar",
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Juego en Educación Parvularia",
    sigla: "EPA1127",
    semestre: 1,
    tipo: "disciplinar",
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Taller de Integración Curricular 1: Saber Profesional de la Educadora de Párvulos",
    sigla: "EPA1129",
    semestre: 1,
    tipo: "linea-practica",
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Estrategias Discursivas para Acceder al Conocimiento Disciplinar",
    sigla: "LCL122",
    semestre: 1,
    tipo: "fundamental",
    creditos: 2,
    prerequisitos: []
  },
  {
    nombre: "Antropología Cristiana",
    sigla: "ICR010",
    semestre: 1,
    tipo: "religion",
    creditos: 2,
    prerequisitos: []
  },

  // Agrega aquí el resto de los ramos siguiendo el mismo formato...
  // IMPORTANTE: respeta los campos `nombre`, `sigla`, `semestre`, `tipo`, `creditos`, `prerequisitos`
  // Si necesitas que te copie TODOS los ramos, puedo generarte el array `data` completo también.

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
      nombre.innerHTML = `<strong>${ramo.nombre}</strong><br>(${ramo.sigla})<br>Créditos: ${ramo.creditos}`;

      const btn = document.createElement("button");
      btn.textContent = "Aprobar ramo";
      btn.addEventListener("click", () => aprobarRamo(ramo.sigla));

      card.appendChild(nombre);
      card.appendChild(btn);

      // Bloquear si no se cumplen los requisitos
      if (!ramo.prerequisitos.every(pr => aprobados.has(pr))) {
        card.classList.add("locked");
      }

      if (aprobados.has(ramo.sigla)) {
        card.classList.add("aprobado");
        btn.textContent = "Aprobado ✅";
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

// script.js

const data = [
  // --- 1° Semestre ---
  { nombre: "Introducción a la Educación Parvularia", sigla: "EPA1124", semestre: 1, tipo: "disciplinar", creditos: 3, prerequisitos: [] },
  { nombre: "Desarrollo Infantil y Neurociencias", sigla: "EPA1120", semestre: 1, tipo: "disciplinar", creditos: 3, prerequisitos: [] },
  { nombre: "Creatividad y Sensibilidad Estética del Educador de Párvulos", sigla: "EPA1125", semestre: 1, tipo: "disciplinar", creditos: 2, prerequisitos: [] },
  { nombre: "Juego en Educación Parvularia", sigla: "EPA1127", semestre: 1, tipo: "disciplinar", creditos: 2, prerequisitos: [] },
  { nombre: "Taller de Integración Curricular 1", sigla: "EPA1129", semestre: 1, tipo: "linea-practica", creditos: 2, prerequisitos: [] },
  { nombre: "Estrategias Discursivas para Acceder al Conocimiento Disciplinar", sigla: "LCL122", semestre: 1, tipo: "fundamental", creditos: 2, prerequisitos: [] },
  { nombre: "Antropología Cristiana", sigla: "ICR010", semestre: 1, tipo: "religion", creditos: 2, prerequisitos: [] },

  // --- 2° Semestre ---
  { nombre: "Perspectivas Críticas sobre Infancia", sigla: "EPA1131", semestre: 2, tipo: "disciplinar", creditos: 3, prerequisitos: [] },
  { nombre: "Ambientes Saludables en Educación Parvularia", sigla: "EPA1132", semestre: 2, tipo: "disciplinar", creditos: 2, prerequisitos: [] },
  { nombre: "Fundamentos de la Psicología del Aprendizaje y Desarrollo", sigla: "PSI300", semestre: 2, tipo: "disciplinar", creditos: 2, prerequisitos: [] },
  { nombre: "Bases y Desarrollo de la Formación Social y Personal", sigla: "EPA1130", semestre: 2, tipo: "disciplinar", creditos: 2, prerequisitos: [] },
  { nombre: "Curriculum en Educación Parvularia", sigla: "EPA1149", semestre: 2, tipo: "disciplinar", creditos: 3, prerequisitos: [] },
  { nombre: "Taller de Integración Curricular 2", sigla: "EPA1151", semestre: 2, tipo: "linea-practica", creditos: 2, prerequisitos: [] },
  { nombre: "Inglés 1", sigla: "ING9001", semestre: 2, tipo: "ingles", creditos: 2, prerequisitos: [] },
  { nombre: "Formación Fundamental 1", sigla: "FF1", semestre: 2, tipo: "fundamental", creditos: 2, prerequisitos: [] },

  // --- 3° Semestre ---
  { nombre: "Taller de la Psicología del Desarrollo y Aprendizaje en Niñez de 0 a 3 años", sigla: "PSI299", semestre: 3, tipo: "disciplinar", creditos: 2, prerequisitos: ["PSI300"] },
  { nombre: "Bases y Desarrollo de la Corporalidad y la Motricidad en el Párvulo", sigla: "EFI1153", semestre: 3, tipo: "disciplinar", creditos: 2, prerequisitos: [] },
  { nombre: "Bases y Desarrollo de los Lenguajes Artísticos en Educación Parvularia", sigla: "EPA1153", semestre: 3, tipo: "disciplinar", creditos: 2, prerequisitos: [] },
  { nombre: "Educación Parvularia y Familia", sigla: "EPA351", semestre: 3, tipo: "disciplinar", creditos: 3, prerequisitos: [] },
  { nombre: "Didáctica del Desarrollo Personal y Social en Educación Parvularia", sigla: "EPA1155", semestre: 3, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1130"] },
  { nombre: "Taller de Integración Curricular 3: Ambientes para el Aprendizaje", sigla: "EPA1157", semestre: 3, tipo: "linea-practica", creditos: 2, prerequisitos: ["EPA1149", "EPA1151"] },
  { nombre: "Ética Cristiana", sigla: "ETICA", semestre: 3, tipo: "religion", creditos: 2, prerequisitos: [] },

  // --- 4° Semestre ---
  { nombre: "Taller de la Psicología del Desarrollo y Aprendizaje en Niñez de 3 a 6 años", sigla: "PSI303", semestre: 4, tipo: "disciplinar", creditos: 2, prerequisitos: ["PSI300"] },
  { nombre: "Educar en y para la Diversidad", sigla: "EPE1320", semestre: 4, tipo: "fundamental", creditos: 2, prerequisitos: [] },
  { nombre: "Simbolización en el Párvulo", sigla: "EPA1150", semestre: 4, tipo: "disciplinar", creditos: 2, prerequisitos: ["PSI300"] },
  { nombre: "Didáctica de Lenguajes Artísticos Integrados", sigla: "EPA1165", semestre: 4, tipo: "disciplinar", creditos: 2, prerequisitos: ["EPA1153"] },
  { nombre: "Educación de la Motricidad en el Párvulo", sigla: "EFI1154", semestre: 4, tipo: "disciplinar", creditos: 2, prerequisitos: ["EFI1153"] },
  { nombre: "Práctica Docente Inicial", sigla: "PRA101-56", semestre: 4, tipo: "linea-practica", creditos: 2, prerequisitos: [] },
  { nombre: "Inglés 2", sigla: "ING9002", semestre: 4, tipo: "ingles", creditos: 2, prerequisitos: ["ING9001"] },

  // --- 5° Semestre ---
  { nombre: "Fundamentos Filosóficos y Sociales de la Educación", sigla: "EPE1118", semestre: 5, tipo: "fundamental", creditos: 3, prerequisitos: ["PRA101-56"] },
  { nombre: "Adquisición y Desarrollo de la Lengua", sigla: "EPA1161", semestre: 5, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1150"] },
  { nombre: "Construcción de Comunidades en Educación Parvularia", sigla: "EPA1245", semestre: 5, tipo: "disciplinar", creditos: 3, prerequisitos: [] },
  { nombre: "Psicología Social Aplicada a la Escuela y la Comunidad", sigla: "PSI275", semestre: 5, tipo: "disciplinar", creditos: 3, prerequisitos: [] },
  { nombre: "Taller de Integración Curricular 4: Curriculum Cultural", sigla: "EPA1160", semestre: 5, tipo: "linea-practica", creditos: 2, prerequisitos: ["EPA1151"] },
  { nombre: "Estrategias Discursivas para Comunicar y Enseñar el Conocimiento Disciplinar", sigla: "LCL465", semestre: 5, tipo: "fundamental", creditos: 2, prerequisitos: [] },
  { nombre: "Formación Fundamental 2", sigla: "FF2", semestre: 5, tipo: "fundamental", creditos: 2, prerequisitos: [] },
  { nombre: "Optativo: Diseño y Evaluación de Recursos Didácticos", sigla: "EPE3468", semestre: 5, tipo: "optativo", creditos: 3, prerequisitos: [] },

  // --- 6° Semestre ---
  { nombre: "Desarrollo del Pensamiento Matemático", sigla: "EPA1166", semestre: 6, tipo: "disciplinar", creditos: 2, prerequisitos: ["EPA1150"] },
  { nombre: "Teoría y Planificación Curricular", sigla: "EPE1303", semestre: 6, tipo: "fundamental", creditos: 3, prerequisitos: [] },
  { nombre: "Didáctica en Educación Parvularia de 0 a 3 años", sigla: "EPA1159", semestre: 6, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1149"] },
  { nombre: "Didáctica del Lenguaje Verbal", sigla: "EPA1167", semestre: 6, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1161"] },
  { nombre: "Tecnologías Digitales para el Aprendizaje y Desarrollo Profesional Docente", sigla: "EPE1132", semestre: 6, tipo: "fundamental", creditos: 2, prerequisitos: [] },
  { nombre: "Taller de Integración Curricular 5: Desarrollo, Enseñanza y Aprendizaje", sigla: "EPA1168", semestre: 6, tipo: "linea-practica", creditos: 2, prerequisitos: ["EPA1157"] },
  { nombre: "Inglés 3", sigla: "ING9003", semestre: 6, tipo: "ingles", creditos: 2, prerequisitos: ["ING9002"] },
  { nombre: "Formación Fundamental 3", sigla: "FF3", semestre: 6, tipo: "fundamental", creditos: 2, prerequisitos: [] },

  // --- 7° Semestre ---
  { nombre: "Construcción del Conocimiento de las Ciencias Naturales en Educación Parvularia", sigla: "EPA1169", semestre: 7, tipo: "disciplinar", creditos: 2, prerequisitos: ["EPA1150"] },
  { nombre: "Construcción del Conocimiento de las Ciencias Sociales en Educación Parvularia", sigla: "EPA1170", semestre: 7, tipo: "disciplinar", creditos: 2, prerequisitos: ["EPA1150"] },
  { nombre: "Evaluación del y para el Aprendizaje", sigla: "EPE1302", semestre: 7, tipo: "fundamental", creditos: 3, prerequisitos: ["EPE1303"] },
  { nombre: "Didáctica en Educación Parvularia de 3 a 6 años", sigla: "EPA1171", semestre: 7, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1149"] },
  { nombre: "Didáctica Iniciación Matemática", sigla: "EPA1344", semestre: 7, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1166"] },
  { nombre: "Práctica Docente Intermedia", sigla: "PRA301-56", semestre: 7, tipo: "linea-practica", creditos: 6, prerequisitos: ["PRA101-56", "EPE1303"] },

  // --- 8° Semestre ---
  { nombre: "Identidad Profesional Docente", sigla: "EPE1130", semestre: 8, tipo: "fundamental", creditos: 3, prerequisitos: ["PRA301-56"] },
  { nombre: "Investigación Educativa y Pedagógica", sigla: "EPE1342", semestre: 8, tipo: "fundamental", creditos: 3, prerequisitos: ["PRA301-56"] },
  { nombre: "Didáctica de Iniciación a las Ciencias de la Naturaleza", sigla: "EPA1255", semestre: 8, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1169"] },
  { nombre: "Didáctica de Iniciación a las Ciencias Sociales", sigla: "EPA1250", semestre: 8, tipo: "disciplinar", creditos: 3, prerequisitos: ["EPA1170"] },
  { nombre: "Contextos Lúdicos en Educación Parvularia", sigla: "EPA1172", semestre: 8, tipo: "disciplinar", creditos: 2, prerequisitos: ["EPA1127"] },
  { nombre: "Políticas Públicas Educativas y Gestión Escolar", sigla: "EPE1400", semestre: 8, tipo: "fundamental", creditos: 2, prerequisitos: [] },
  { nombre: "Taller de Integración Curricular 6: Transiciones Educativas desde la Lúdica", sigla: "EPA1173", semestre: 8, tipo: "linea-practica", creditos: 2, prerequisitos: ["EPA1168"] },
  { nombre: "Inglés 4", sigla: "ING9004", semestre: 8, tipo: "ingles", creditos: 2, prerequisitos: ["ING9003"] },

  // --- 9° Semestre ---
  { nombre: "Trabajo de Titulación", sigla: "EPA1401", semestre: 9, tipo: "titulación", creditos: 6, prerequisitos: [
    "ING9004","EPA1173","EPE1400","EPA1172","EPA1250","EPA1255","EPE1342",
    "EPE1130","EPA1344","EPA1171","EPE1302","EPA1170","EPA1169","EPE1132",
    "EPA1167","EPA1159","LCL465","EPA1160","PSI275","EPA1245","EPE1118",
    "EFI1154","EPA1165","EPE1320","PSI303","EPA1155","EPA351","PSI299",
    "EPA1132","EPA1131","LCL122","EPA1129","EPA1120","EPA1124","EPA1125"
  ]},
  { nombre: "Práctica Docente Final 1", sigla: "PRA601-56", semestre: 9, tipo: "linea-practica", creditos: 14, prerequisitos: [
    "PRA301-56","EPE1302","EPE1320","EPE1342","EPE1132","EPA1173","LCL465",
    "EPA1250","EPA1255","EPA1172","EPA1171","EPA1344","EPA1167","EPA1159",
    "EPA1245","EFI1154","EPA1165","EPA1155","EPA351","EPA1124","EPA1131",
    "EPA1132","EPA1120","EPA1125"
  ]},

  // --- 10° Semestre ---
  { nombre: "Práctica Docente Final 2", sigla: "PRA701-56", semestre: 10, tipo: "linea-practica", creditos: 16, prerequisitos: ["PRA601-56"] }
];

// Carga aprobados desde localStorage o inicia vacío
const aprobados = new Set(JSON.parse(localStorage.getItem('aprobados')) || []);

function aprobarRamo(sigla) {
  aprobados.add(sigla);
  localStorage.setItem('aprobados', JSON.stringify([...aprobados]));
  renderMalla();
}

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

    data
      .filter(r => r.semestre === sem)
      .forEach(ramo => {
        const card = document.createElement("div");
        card.className = `ramo ${ramo.tipo}`;

        const nombre = document.createElement("div");
        nombre.innerHTML = `<strong>${ramo.nombre}</strong><br>(${ramo.sigla})<br>Créditos: ${ramo.creditos}`;

        const btn = document.createElement("button");
        btn.textContent = "Aprobar ramo";

        // El botón se habilita solo si se aprobaron todos los prerequisitos
        btn.disabled = !ramo.prerequisitos.every(sig => aprobados.has(sig));

        if (aprobados.has(ramo.sigla)) {
          card.classList.add("aprobado");
          btn.textContent = "Aprobado ✅";
          btn.disabled = true;
        }

        btn.addEventListener("click", () => aprobarRamo(ramo.sigla));

        card.appendChild(nombre);
        card.appendChild(btn);

        bloque.appendChild(card);
      });

    contenedor.appendChild(bloque);
  });
}

renderMalla();


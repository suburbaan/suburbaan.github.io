const cursos = [
    {
        nombre: "CERTIFICATION MTA (MICROSOFT TECHNOLOGY ASSOCIATE)",
        descripcion: "SOFTWARE DEVELOPMENT FUNDAMENTALS (C#)",
        categoria: "microsoft",
    },
    {
        nombre: "CERTIFICATION MTA (MICROSOFT TECHNOLOGY ASSOCIATE)",
        descripcion: "DATABASE FUNDAMENTALS (SQL SERVER)",
        categoria: "microsoft",
    },
    {
        nombre: "C#",
        descripcion: "Asp.Net – MVC5 – Entity FrameWork – Razor-Boostrap",
        categoria: "udemy",
    },
    {
        nombre: "ESPECIALISTA DE SOPORTE TECNICO",
        descripcion:"IMPARTIDO POR SENCE ONLINE",
        categoria: "sence",
    },
    {
        nombre: "ADMINISTRADOR DE TI",
        descripcion:"IMPARTIDO POR SENCE ONLINE",
        categoria: "sence"
    },
    {
        nombre: "GESTOR DE PROYECTOS",
        descripcion:"IMPARTIDO POR SENCE ONLINE",
        categoria: "sence"
    },
    {
        nombre: "DESARROLLADOR DE SOFTWARE",
        descripcion:"IMPARTIDO POR SENCE ONLINE",
        categoria: "sence"
    },
    {
        nombre: "Python",
        descripcion:"Curso Maestro de Python: De Cero a Programador Todoterreno",
        categoria: "udemy"
    },
    {
        nombre: "JavaScript",
        descripcion: "JavaScript TOTAL - De Cero a Programador Web",
        categoria: "udemy",
    },
    {
        nombre: "Wordpress",
        descripcion:"Mega Curso de Wordpress de Cero a Maestro",
        categoria: "udemy"
    },
    {
        nombre: "GIT",
        descripcion:"Inicia en la Programacion: Git y Terminal",
        categoria: "udemy"
    },
    {
        nombre: "Drupal9",
        descripcion:"Crea sitios web con Drupal 9 : Desde Cero a Maestro",
        categoria: "udemy"
    }
  ];
  
  
  function mostrarCursos(categoria) {
    const cursosLista = document.getElementById("cursos-lista");
    cursosLista.innerHTML = "";
  
    cursos.forEach(cursos => {
      if (categoria === "todos" || cursos.categoria === categoria) {
        const cursosDiv = document.createElement("div");
        cursosDiv.classList.add("cursos-item");
        cursosDiv.innerHTML = `
          <h3>${cursos.nombre}</h3>
          <p>${cursos.descripcion}</p>
        `;
        cursosLista.appendChild(cursosDiv);
      }
    });
  }
  
  const cursosFiltro = document.getElementById("cursos-filtro");
  cursosFiltro.addEventListener("change", () => {
    mostrarCursos(cursosFiltro.value);
  });
  
  mostrarCursos("todos");
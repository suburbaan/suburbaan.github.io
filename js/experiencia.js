const experienciaLaboral = [
    {
      empresa: "MZZO CHILE",
      categoria: "desarrollo",
      puesto: "Desarrollador web",
      fechas: "febrero 2022 - marzo 2023",
      descripcion: "Desarrollo de aplicaciones PHP, administración de Wordpress, custom fields wp, sitios landing con DIVI, Ghunterberg, WP Bakery, adicional, funciones básicas en javascript junto a tareas adicionales al cargo como QA, digitador de informes que no estaban documentados en la empresa. Donde tenía que mostrar la arquitectura de cada proceso que se estaba realizando  y sus componentes."
    },
    {
        empresa: "FENOMENA ",
        categoria: "desarrollo",
        puesto: "Desarrollador web",
        fechas: "mayo 2021 – diciembre 2021",
        descripcion: "Desarrollador web, desarrollo de aplicaciones en PHP con laravel y angular, Javascript, html, CSS, administración de WordPress, custom fields wp, sitios landing con DIVI, integración webhook zapier, conexiones API, recopilación de datos, Creación de Api rest, desarrollo en front end y Backend con lenguajes como Python con framework Django con booststrap, Estructuración, planificación y análisis de datos. Adicional, realizaba tareas de jefe de proyectos junior."
    },
    {
        empresa: "ENTEL CHILE",
        categoria: "Analista",
        puesto: "Analista TI",
        fechas: "enero 2019 - abril 2021",
        descripcion: "Analizar, encontrar fallas, proponer soluciones en los diferentes sistemas en los que vi, adicional realizar informes, ver pequeños segmentos de código en el cuál debía implementar soluciones."
    },
    {
        empresa: "TOTALPACK LTDA",
        categoria: "Soporte",
        puesto: "Técnico soporte nivel 2",
        fechas: "septiembre 2017– enero 2019",
        descripcion: "Realizábamos visitas a terreno, análisis de bases de datos SQL, revisión de software y hardware de los tótems, adicional a las configuraciones de los mismos."
    },
    {
        empresa: "COORPORACION EDUCACIONAL DE ASIMET, COLEGIO CHILENO – ALEMAN",
        categoria: "desarrollo",
        puesto: "Programador y encargado de departamento TI",
        fechas: "septiembre 2017– enero 2019",
        descripcion: "Dentro de mis labores, desarrollé aplicaciones internas para el personal (resumen de notas, sistema de matrículas, etc.), también tenía la labor de revisar e instalar puntos de red dentro de la infraestructura, reparación de equipos, soporte técnico general."
    },
    {
        empresa: "EZENTIS CHILE",
        categoria: "Practica",
        puesto: "Práctica profesional programador",
        fechas: "junio 2015 – octubre 2015",
        descripcion: "Dentro de mi práctica profesional tuve que desarrollar una aplicación en .net para el departamento de bienestar el cual consistía en tener un control digital sobre los colaboradores de la empresa (estado civil, hijos, cargas, etc.) el cual está conectada a una base de datos SQL, adicional se realizaba apoyo al departamento de soporte TI cuando estaban con muchas solicitudes."
    }
  ];
  
  
  function mostrarExperiencias(categoria) {
    const experienciasLista = document.getElementById("experiencias-lista");
    experienciasLista.innerHTML = "";
  
    experienciaLaboral.forEach(experiencia => {
      if (categoria === "todos" || experiencia.categoria === categoria) {
        const experienciaDiv = document.createElement("div");
        experienciaDiv.classList.add("experiencia-item");
        experienciaDiv.innerHTML = `
          <h3>${experiencia.empresa}</h3>
          <p>${experiencia.puesto} (${experiencia.fechas})</p>
          <p>${experiencia.descripcion}</p>
        `;
        experienciasLista.appendChild(experienciaDiv);
      }
    });
  }
  
  const categoriaFiltro = document.getElementById("categoria-filtro");
  categoriaFiltro.addEventListener("change", () => {
    mostrarExperiencias(categoriaFiltro.value);
  });
  
  mostrarExperiencias("todos");
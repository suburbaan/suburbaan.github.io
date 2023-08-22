const formacionData = [
    {
        establecimiento: "Manuel Magallanes Moure",
        categoria: "basica",
        comuna: "San Bernardo",
        fechas: "2004",
        descipcion: "Enseñanza Básica"
    },
    {
        establecimiento: "CENTRO EDUCACIONAL DENVER COLORADO SCHOOL",
        categoria: "media",
        comuna: "El Bosque",
        fechas: "2009",
        descipcion: "Enseñanza Media"
    },
    {
        establecimiento: "INSTITUTO PROFESIONAL AIEP",
        categoria: "superior",
        comuna: "Santiago",
        fechas: "2015",
        descipcion: "Enseñanza superior completa, obteniendo el título de ingeniero en ejecución informática – mención desarrollo de sistemas."
    },
    {
        establecimiento: "UNIVERSIDAD ANDRES BELLO",
        categoria: "superior",
        comuna: "Santiago",
        fechas: "2020",
        descipcion: "Estudio post-grado completa obteniendo un diplomado en evaluación y gestión de proyectos."
    }
];

function mostrarFormacion(categoria) {
    const formacionLista = document.getElementById("formacion-lista");
    formacionLista.innerHTML = "";

    formacionData.forEach(item => {
        if (categoria === "todos" || item.categoria === categoria) {
            const formacionDiv = document.createElement("div");
            formacionDiv.classList.add("formacion-item");
            formacionDiv.innerHTML = `
                <h3>${item.establecimiento}</h3>
                <p>${item.comuna}</p>
                <p>Año finalización ${item.fechas}</p>
                <p>${item.descipcion}</p>
            `;
            formacionLista.appendChild(formacionDiv);
        }
    });
}

const formacionFiltro = document.getElementById("formacion-filtro");
formacionFiltro.addEventListener("change", () => {
    mostrarFormacion(formacionFiltro.value);
});

mostrarFormacion("todos");

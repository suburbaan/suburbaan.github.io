const pieData = {
  labels: ['HTML5', 'Javascript', 'Wordpress (DIVI, ASTRA themes & más)', 'GESTION DE PROYECTOS OPERACIONALES ', 'Docker-compose', 'SQL-Server - MySql', 'Offimatica', 'Python (Actualmente aprendiendo)'],
  datasets: [{
    label:'Nivel de habilidad',
    data: [80, 50, 80, 100, 50, 60, 70, 30],
    backgroundColor: ['#e34c26', '#f0db4f', '#00749C', '#4CAF50', '#0db7ed', '#FF0000', '#FFFFF', '#FFD43B']
  }]
};

const config = {
  type: 'pie',
  data: pieData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' // Cambiar a 'top', 'left' o 'right' según prefieras
      }
    }
  }
};

// Crear el gráfico
window.onload = function() {
  const ctx = document.getElementById('skillsChart').getContext('2d');
  new Chart(ctx, config);
};





$(document).ready(function(){
  $('.chart-carousel').slick({
      slidesToShow: 1,       // Mostrar solo 1 habilidad a la vez para el efecto de desvanecimiento
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,   // Velocidad de la animación
      fade: false,            // Habilitar el efecto de desvanecimiento
      prevArrow: false,
      nextArrow: false
  });
});

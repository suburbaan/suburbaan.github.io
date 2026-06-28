/* ── PARTÍCULAS EN CANVAS ── */
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let W, H;
const particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function Particle() {
  this.x = Math.random() * W;
  this.y = Math.random() * H;
  this.r = Math.random() * 1.2 + 0.3;
  this.vx = (Math.random() - 0.5) * 0.18;
  this.vy = (Math.random() - 0.5) * 0.18;
  this.alpha = Math.random() * 0.5 + 0.15;
}

for (let i = 0; i < 110; i++) particles.push(new Particle());

function draw() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(148,163,184,${p.alpha})`;
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;
  });
  requestAnimationFrame(draw);
}
draw();

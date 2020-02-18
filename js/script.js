const tanah = document.querySelectorAll('.tanah');
const micky = document.querySelectorAll('.micky');
const papanSkor = document.querySelector('.papanSkor');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanMicky() {
  const tRandom = randomTanah(tanah)
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanMicky();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanMicky();
  setTimeout(() => {
    selesai = true;
  }, 10000)
  
}

function hajar() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = skor;
}

micky.forEach(t => {
  t.addEventListener('click', hajar);
});
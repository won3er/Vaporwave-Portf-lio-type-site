const titulo = document.querySelector('.titulo');
const descricao = document.querySelector('.descricao');
const imagem = document.querySelector('.imagem');
function toggleLight() {
  imagem.classList.toggle('lit');
}

setInterval(toggleLight, 500);

titulo.addEventListener('mouseover', () => {
  titulo.style.color = '#87CEFA';
});

titulo.addEventListener('mouseout', () => {
  titulo.style.color = '#9cfa87';
});

descricao.addEventListener('click', () => {
  descricao.style.color = '#87CEFA';
});

imagem.addEventListener('load', () => {
  imagem.style.width = '75%';
});



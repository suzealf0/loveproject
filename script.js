// Código para o Carrossel de Imagens
document.addEventListener("DOMContentLoaded", function() {
    let carrosselImages = document.querySelector(".carrossel-images");
    let images = document.querySelectorAll(".carrossel-images img");
    let index = 0;
    let totalImages = images.length;

    function changeImage() {
        index = (index + 1) % totalImages;
        carrosselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    // Muda a imagem automaticamente a cada 3 segundos
    setInterval(changeImage, 3000);
});

// Seleciona o botão de fechar e o contêiner da página
const fecharBtn = document.getElementById('fecharBtn');
const pagina = document.querySelector('.pagina');

// Função para fechar o livro
fecharBtn.addEventListener('click', function() {
    pagina.classList.add('fechar'); // Adiciona a classe "fechar" que inicia a animação de desaparecer
});


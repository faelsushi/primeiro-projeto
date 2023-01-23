
const botaoInstagram = document.querySelector(".botao-instagram")
const video = document.getElementById("video");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
console.log(linkDoVideo);

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoInstagram.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});







// MENU MOBILE
const btnMenu = document.getElementById("btn-menu");
const nav = document.querySelector(".nav");

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// FILTRO DE PRODUTOS
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    productCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// BOTÃO TOP
const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ANO AUTOMÁTICO NO RODAPÉ
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Botões de produto -> abrir WhatsApp com mensagem
const whatsButtons = document.querySelectorAll(".btn-whats-card");
whatsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h3").textContent;
    const url = `https://wa.me/5518981760379?text=Olá,%20tenho%20interesse%20no%20produto:%20${encodeURIComponent(
      productName
    )}%20que%20vi%20no%20site%20Horizontech%20Oficial.`;
    window.open(url, "_blank");
  });
});

function enviarOrcamento() {
  const nome = document.getElementById("nomeCliente").value.trim();
  const telefone = document.getElementById("telefoneCliente").value.trim();
  const texto = document.getElementById("mensagemOrcamento").value.trim();

  if (!nome || !telefone || !texto) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  const numero = "5518981760379"; // telefone Horizontech Oficial

  const mensagem = 
    `*Pedido de Orçamento – Horizontech Oficial*\n` +
    `Nome: ${nome}\n` +
    `Telefone: ${telefone}\n` +
    `Serviço desejado: ${texto}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

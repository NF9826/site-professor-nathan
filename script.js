// script.js
// Código JS inicial - pode ser expandido para funcionalidades como filtros, busca, etc.
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site do Professor Nathan Ferreira carregado com sucesso.");

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>Informações de Contato </p> 
        <p> Telefone: (42) 99952-5386 </p>
        <p>E-mail:<a href="mailto:nnferreira98@gmail.com">nnferreira98@gmail.com</a></p>
        <p>R. Helena Setelik, 79 - Bairro Bella Casa - Reserva/PR.</p>
    `;
    footer.style.textAlign = 'center';
    footer.style.padding = '1rem';
    footer.style.backgroundColor = '#1c1c1c';
    footer.style.color = 'white';
    document.body.appendChild(footer);
});

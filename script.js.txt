// script.js
// Código JS inicial - pode ser expandido para funcionalidades como filtros, busca, etc.
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site do Professor Nathan Ferreira carregado com sucesso.");

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>Entre em contato: <a href="mailto:nathan.ferreira@universidade.edu.br">nathan.ferreira@universidade.edu.br</a></p>
    `;
    footer.style.textAlign = 'center';
    footer.style.padding = '1rem';
    footer.style.backgroundColor = '#1c1c1c';
    footer.style.color = 'white';
    document.body.appendChild(footer);
});
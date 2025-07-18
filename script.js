//função chamada ao clicar no botão "Agendar serviço "

function agendarServiço() {
    alert('Obrigada por escolher Valeria! Entre emcontato para agendar seu serviço');
}

//função chamada ao enviar o formulário de contato
function enviarFormulario(event) {
    event.preventDefault(); //impede o envio tradicional
    alert('Mensagem enviada com sucesso! Em breve entraremos em cantato');
} 

function mostrarNome() {
    const nome = document.getElementById('nome').value;
    alert(`Olá, ${nome}! Seja bem-vinda à Valéria Beleza 💕`);
  }

  function abrirWhatsapp() {
  const numero = "81 999650896"; // Substitua pelo número real
  const mensagem = encodeURIComponent("Olá! Gostaria de agendar um serviço.");
  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}

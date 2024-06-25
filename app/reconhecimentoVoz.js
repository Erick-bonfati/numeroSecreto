const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition; // utilizando a API na janela do navegador

const recognition = new SpeechRecognition(); // utilizando a API

recognition.lang = 'pt-BR' // traduzindo o leitor para portugues

recognition.start(); // inicia a leitura de voz

recognition.addEventListener('result', onSpeak) // quando o reconhecimento de voz começar, ele pega tudo que esta no result e
// criamos uma funcao callback para retornar no console.log tudo que foi falado

function onSpeak(e) {
  chute = e.results[0][0].transcript // pega o array em que saiu o resultado do que falamos
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div> Você disse </div>
    <span class="box">${chute}</span>
  `
}

recognition.addEventListener('end', () => recognition.start()); // quando a funcão acabar, ele inicia ela novamente!
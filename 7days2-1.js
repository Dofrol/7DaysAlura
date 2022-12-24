const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');

const msg =`"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msg);

const option = prompt(`Você, está gostando de estudar ${linguagem}? (Sim=1 ou Não=2)`)
if (option==1) {
  alert('Muito bom! Continue estudando e você terá muito sucesso.')

} else if (option==2){
  alert('Ahh que pena... Já tentou aprender outras linguagens?')
}
else {
  alert(`Opção inválida!`)
}

var area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
var linguagem = "";
  while (area != `Front-End` && area != `Back-End`){
    var area = prompt("Você digitou algo errado !! Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
  }
if (area === "Front-End"){
    language = prompt("Você quer aprender React ou Vue?");
        while (language != `React` && language != `Vue`){
          var language = prompt("Você digitou algo errado ou uma opção inválida! Você quer aprender React ou Vue?");
        }
}
else if (area === "Back-End"){
    language = prompt("Você quer aprender C# ou Java?");
        while (language != `C#` && language != `Java`){
          var language = prompt("Você digitou algo errado ou uma opção inválida! Você quer aprender React ou Vue?");
        }
}

var specializedOrFullStack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
  while (specializedOrFullStack != `1` && specializedOrFullStack != `2`){
    var specializedOrFullStack = prompt("Você digitou uma opção inválida. Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
  }

if (specializedOrFullStack == 1){
    alert(`Continue se especializando em ${language} para dominar a área de ${area}!`);
}
else if (specializedOrFullStack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${language} se você quer se tornar Fullstack!`);
}

var msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    var newTech = prompt("Qual?");
    alert(`${newTech} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}

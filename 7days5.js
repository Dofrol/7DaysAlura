alert("Vamos começar nossa lista de compras?");
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let outros = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
    while(adicionarMais != "não"){
          adicionarMais = prompt(`Você deseja adicionar uma comida na lista de compras? Responda 'sim' para adicionar ou 'não' para encerrar. A lista até o momento é:\n Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Outros: ${outros} `);
          while (adicionarMais != "sim" && adicionarMais != "não") {  //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
  	         alert(`Operação não reconhecida!`);
             adicionarMais = prompt(`Você deseja adicionar uma comida na lista de compras? Responda 'sim' para adicionar ou 'não' para encerrar. A lista até o momento é:\n Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Outros: ${outros} `);
          }

          if (adicionarMais === "não"){  //se o texto lido for "não", sair do while
          break;
          }

          comida = prompt("Qual comida você deseja inserir?");
          categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces', 'congelados' ou 'outros'?");
          while (categoria !== "frutas" && categoria !== "laticínios" && categoria !== "doces" && categoria !== "congelados" && categoria !== "outros"){
            categoria = prompt(`Categoria não encontrada, vamos tentar novamente. \n Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces', 'congelados' ou 'outros'?`);
          }
          if(categoria === 'frutas'){
              frutas.push(comida);
          } else if (categoria === 'laticínios'){
              laticinios.push(comida);
          } else if (categoria === 'doces'){
              doces.push(comida);
          } else if (categoria === 'congelados'){
              congelados.push(comida);
          } else if (categoria === 'outros'){
              outros.push(comida);
          }
      }
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Outros: ${outros}`);

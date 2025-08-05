import carregarPessoas from "./function/carregar-pessoas";
import sortearAzarado from "./function/sortear-azarado";
import terminal from "./ui/terminal";


const pessoas = carregarPessoas('src/data/dados.csv');
const azarado = sortearAzarado(pessoas);


terminal.clear();

terminal.bold.white('Iniciando o Sorteio..').white('\n');

terminal.white('\n\nO').brightRed(' AZARADO')
terminal.bold.brightGreen(' MAIS SORTUDO DO DIA').white(' é: \n');
terminal.bold.brightYellow(azarado.toString());
terminal('\n\n 🎉🎉🎉🎉🎉🎉🎉');
console.log('');
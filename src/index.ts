import carregarPessoas from "./function/carregar-pessoas";
import sortearAzarado from "./function/sortear-azarado";
import terminal from "./ui/terminal";


const pessoas = carregarPessoas('src/data/dados.csv');
const azarado = sortearAzarado(pessoas);


terminal.clear();

terminal.white('\n\nO').brightRed(' azarado')
terminal.bold.brightGreen(' mais sortudo do dia').white(' é: \n');
terminal.bold.brightYellow(azarado.toString());
terminal('\n\n 🎉🎉🎉🎉🎉🎉🎉');
console.log('');
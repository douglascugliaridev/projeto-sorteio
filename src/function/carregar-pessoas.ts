import Pessoa from "../model/Pessoa";
import fs from 'fs';

export default function carregarPessoas(arquivo: string): Pessoa[] {
    const dados = fs.readFileSync(arquivo, 'utf-8');
    const linhas = dados.split('\n');
    const pessoas = linhas.filter(linha => linha.trim().length > 0)
        .map(linha => {
            const [nome, email] = linha.split(';');
            return new Pessoa(nome, email);
        });

    return pessoas;
}
/*
    todos os contatos precisam ser armazendados em uma lista 
    que só deve permitir inclusões e nenhum outro tipo de leitura
    Essa restriçao não nos permiti usar um simples array devido a
     quantidade de operações que podemos realizar com ele.

    A classe abaixo encapsula o array de contatos e o acesso ao mesmo 
    só poderá ser feito através dos métodos dessa 
    classe poderão implementar qualquer regra de negócio necessária.
*/
class Tarefas{
    constructor(){
        this._tarefas = [];
    }
    adiciona(tarefa){
        this._tarefas.push(tarefa);
    }
    paraArray(){
        //return this._contatos;
        return [].concat(this._tarefas);
    }
}
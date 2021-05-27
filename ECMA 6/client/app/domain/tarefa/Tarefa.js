class Tarefa{
    //O Constutor é uma função especial que é chamada toda que o operador 
    //new for usado para criar uma instância da classe.
        constructor(tarefa,prioridade){
            //O _ indica que a propriedade não deve ser acessada fora dos métodos da própria classe.
            this._tarefa = tarefa;
            this._prioridade = prioridade;
           
            //faz com que o objeto seja congelado após a criação. impedindo assim que algum atributo seja alterado.
            Object.freeze(this);
        }
        //método é uma função que imprime comportamento a classe.
        get tarefa(){
            return this._tarefa;
        }
        get prioridade(){
            return this._prioridade;
        }
        
}
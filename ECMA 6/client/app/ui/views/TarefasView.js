class TarefasView{
   
    //a partir do construtor que recebe um seletor css buscamos o elemento do DOM guardando-o na propriedade this._elemento
    constructor(seletor){
        this._elemento = document.querySelector(seletor);
    }
   
    //O método update transforma o template ContatosView em elementos do DOM
    //Ao passarmos o modelo em que o método update deve se basear o nosso método se torna dinâmico
    update(model){
        this._elemento.innerHTML = this.template(model);
    }
   
    //O método template retorna uma string com a apresentação HTML que desejamos utilizar
    template(model){
        /*
                Cada objeto da nossa lista de contatos será transformado em uma string que corresponda
                a uma <tr> com suas <td>. 
                E como o modelo recebido pelo template já possui o método paraArray que nos devolve 
                o array encapsulado por ele, utilizamos a função map, que realizará um "de para", de objeto 
                para string. 

                E usamos a função join() para concatenar cada elemento em um única string. 
        
        */
            return `
            <table	class="table	table-hover	table-bordered">
            <thead>
                <tr>
                    <th>TAREFA</th>
                    <th>PRIORIDADE</th>
                   
                </tr>
            </thead>
            <tbody>
            
                ${model.paraArray().map(tarefa =>{
                    return `
                    <tr>
                        <td>${tarefa.tarefa}</td>
                        <td>${tarefa.prioridade}</td>
                     
                    </tr>	
                    `
                }).join('')}
            </tbody>
            <tfoot>
            </tfoot>
            </table>			
            `
    }
}
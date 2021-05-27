class TarefaController{
    /*
        A adoção do construtor e das propriedades this aqui melhoram a 
        performance do nosso código
        visto que a busca pelos elementos do DOM só serão realizadas uma 
        única vez no construtor(), e 
        não mais a cada chamada do método adiciona();
    */
    
    constructor(){
        /*
            O principal objetivo do método bind é
            alterar o contexto this de uma função independente de onde a mesma esteja sendo chamada.

            é necessário usar a função bind pq quando atribuímos o método querySelector à variável ele
            deixa de ser executado fora do seu contexto que nesse caso é o document.

        */
        // a ideia é que $ seja o querySelector
        let $ = document.querySelector.bind(document);
        this._inputTarefa	=	$('#tarefa');	
        this._inputPrioridade	=	$('#prioridade');
     
        //cria uma instância da classe Tarefas
        this._tarefas = new Tarefas();
        //Cria uma instânciade tarefas view, passando para o construtor o seletor CSS de ID
        this._tarefasView = new TarefasView('#tarefas');
        //atualiza a VIEW, recebendo inicialmente a lista vazia que encapsula o modelo
        this._tarefasView.update(this._tarefas);
    
    }
        
    adiciona(event){
        event.preventDefault();
        this._tarefas.adiciona(this._criaTarefas());
        //this._contatos.paraArray().length=0;
        //console.log(this._contatos.paraArray())
        this._tarefasView.update(this._tarefas);
        this._limpaFormulario();

    }

    _limpaFormulario(){
        this._inputTarefa.value	=	'';	
        this._inputTarefa.focus();
    }
    _criaTarefas(){
        //retorna uma instância de Contato
        console.log(this._inputTarefa.value);
        console.log(this._inputPrioridade.value)
        return new Tarefa(
            this._inputTarefa.value,
            this._inputPrioridade.value
         
        );
    }
}
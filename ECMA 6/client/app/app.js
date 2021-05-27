//cria uma instância do controller
let controller = new TarefaController();

/*
    O bind qui foi necessário porque quando passamos controller.adiciona para 
    o método addEventListener,
    seu this deixou de ser o controller e passou a ser o próprio elemento 
    do DOM, no caso, o formulário. 
    Isso acontece porque toda função/método possui um this dinâmico que assume 
    como valor o contexto no qual foi chamado.
*/
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller))


     
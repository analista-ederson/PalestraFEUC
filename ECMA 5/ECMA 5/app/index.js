/*
    Array que armazena uma referência para elemento de entrada do formulário;
    document.querySelector é uma API do DOM que nos permite buscar elementos 
    através de seletores css.
*/
var campos = [
    document.querySelector('#tarefa'),
    document.querySelector('#prioridade')
];


//verifico o conteúdo do array
console.log(campos);


//	precisamos	de	tbody,	pois ele receberá a tr que	vamos construir
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
    //evita que o formulário seja recarregado fazendo com que os dados digitaos não sejam perdidos;
    event.preventDefault();
    //Cria o elemento html "tr"
    var tr = document.createElement('tr');



    campos.forEach(function (campo) {
        //cria uma td vazia 
        var td = document.createElement('td');
        //atribui o valor do campo a td
        td.textContent = campo.value;
        //adiciona a td na tr
        tr.appendChild(td);
       // adiciona a tr na tbody
        tbody.appendChild(tr);
    });

    //adiciona a tr na tbody
    //tbody.appendChild(tr);



    campos[0].value = '';
    campos[0].focus();

});
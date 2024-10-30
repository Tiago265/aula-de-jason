let biblioteca = [];
let inputTitulo = document.getElementById('cadTitulo');
let inputAutor = document.getElementById('cadAutor');
let inputGenero = document.getElementById('cadGenero');
let inputEditora = document.getElementById('cadEditora');
let inputISBN = document.getElementById('cadISBN');
let acervo = document.getElementById('acervo');

function add(){
    let livro = {
        titulo:inputTitulo.value,
        autor:inputAutor.value,
        genero:inputGenero.value,
        editora:inputEditora.value,
        isbs:inputISBN.value
    }
    biblioteca.push(livro);
    inputTitulo.value = null;
    inputAutor.value = null;
    inputGenero.value = null;
    inputEditora.value = null;
    inpitISBN.value = null;
    listagem();
}

function listagem(){
    let livros = "";
    for(let livro of biblioteca){
        livros += "Título: "+livro.titulo+"<br>";
        livros += "Autor: "+livro.autor+"<br>";
        livros += "Gênero: "+livro.genero+"<br>";
        livros += "Editora: "+livro.editora+"<br>";
        livros += "ISBN : "+livro.isbn+"<br>";
        livros += "----------------------------<br>";
    }
    acervo.innerHTML = livros;
}
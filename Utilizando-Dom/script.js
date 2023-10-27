let body = document.querySelector("body");

let main = document.createElement("main");
body.appendChild(main)

let titulo = document.createElement("h1");
titulo.id = titulo;
titulo.innerText = "Produtos"
main.appendChild(titulo)


let listaProdutos = [
    {
        nome: 'Smart TV Samsung 50"',
        categoria: 'Televisao',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
        preco: 2990.90
    },
    {
        nome: 'IPhone 13',
        categoria:'Celular',
        descricao:'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
        preco: 4099.00
    },
    {
        nome: 'Notebook Asus Vivobook 15',
        categoria:'computador',
        descricao:'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
        preco: 2799.00,
    },
    {
        nome: 'PS5',
        categoria:'Videogame',
        descricao:'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
        preco:3999.99
    }
];



for (const elemento of listaProdutos) {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${elemento.nome}</h2>
        <p>Categoria: ${elemento.categoria}</p>
        <p>Descrição do produto: ${elemento.descricao}</p>
        <p>R$: ${elemento.preco.toFixed(2)}</p>`
    main.appendChild(card)
}

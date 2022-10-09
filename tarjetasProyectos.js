/*const personajes=fetch("https://rickandmortyapi.com/api/character");
personajes.then(response => response.json())
console.log(personajes) */
function getCharacters(done){
    const results=fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        })
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article=document.createRange().createContextualFragment(`
        <div class="row mx-5">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${personaje.image}">
                    <div class="card-body">
                        <h1>${personaje.name}</h1>
                        <p>${personaje.status}</p>
                        <a href="infoProject.html" class="btn btn-primary">Info del project</a>
                    </div>
                </div>
    
            </div>
            
        </div>
            `)
        const main=document.querySelector("main")

        main.append(article)
    });
})
console.log(getCharacters(done))
/*
var proyecto=[{
    "id":1,
    "titulo":"Salvando arboles",
    "descripcion":"Se siembran nuevos arboles",
    "direccionWallet":"AJGUG43UG43",
    "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tooltyp.com%2F8-beneficios-de-usar-imagenes-en-nuestros-sitios-web%2F&psig=AOvVaw0in_e_kkkKE8gy03YnfJto&ust=1665372662738000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjzzuKa0voCFQAAAAAdAAAAABAD"
},{
    "id":2,
    "titulo":"Adoptando perritos",
    "descripcion":"Brindandoles un nuevo hogar",
    "direccionWallet":"OURIOEU587859",
    "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dogalize.com%2Fes%2F2017%2F06%2Ffotos-de-perros-cachorros-imagenes%2F&psig=AOvVaw1LznObWGwUQYjjcSOqazIP&ust=1665369876650000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjC-7GQ0voCFQAAAAAdAAAAABAD"
}]

console.log(proyecto)

function dibujarTarjetas(){
    for (let i = 0; i < Object.keys(proyecto).length; i++) {
        const tarjeta=document.createRange().createContextualFragment(`
    <div class="row mx-5">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${proyecto.img}>
                <div class="card-body">
                    <h1>${proyecto.titulo}</h1>
                    <p>${proyecto.descripcion}
                    </p>
                    <a href="infoProject.html" class="btn btn-primary">Info del project</a>
                </div>
            </div>

        </div>
        
    </div>
        `);

        const main=document.querySelector("main");
        main.append(tarjeta)
      }
}
dibujarTarjetas()*/
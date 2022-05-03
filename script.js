const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=150";

const pokemonsInd = document.querySelector('.pokemons');
const pokemons = document.querySelector('.poke-grid');

const inputSearch = document.querySelector('.search');


const dados = {
    pokem: {},
    search: {
        name: '',
    }

}



const pokemon = async function (id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
        if (!res.ok)
            throw new Error(`Pokemons not find ${res.status}`);
        console.log(res)
        const data = await res.json();

        console.log(data);
        const dados = data.results;
        console.log(dados);

        dados.forEach(element => {

            // "https://pokeapi.co/api/v2/pokemon/1/"
            const html = `
            <div class="container">
            <h4><b>${element.name}</b></h4>
    
          </div>
          <img src="${element.img}" alt="Avatar" style="width:80%">`

            pokemonsInd.insertAdjacentHTML('beforeend', html);
        });
    } catch (err) {
        console.error(err)
    }
}
pokemon();


const searching = async function (valor) {

    try {
        state.search.query = query;

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150?search=${valor}`);
        console.log(data);
        dados.search.name = data.data.pokem.map(poke => {
            //retornará um novo array com os novos objetos
            return {
                nome: poke.nome,
                url: poke.url

            };
        })
        console.log(state.search.results);
    } catch (err) {
        throw err;
    }
};

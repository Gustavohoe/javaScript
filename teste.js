async function buscarPokemon() {
   const pokemon = document.getElementById("pokemn").value; 
   if (pokemon== ''){
        let mensagemErro='Quer procurar um pokemon sem digitar o nome dele?'
        document.getElementById('mensagem').textContent= mensagemErro
        document.getElementById('mensagemGif').innerHTML=`
            <img src="pikafail.gif">`
    }else{


       
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
         if (!res.ok) {
        throw new Error("Pokémon não encontrado");
    }
    const data = await res.json();
    
      
        document.getElementById('mensagem').innerHTML = `
            <div class="local">
             <h3>${pokemon}</h3>
             <p><strong>Nome: ${data.name} </strong></p>
             <p><strong>Tipo: ${data.types[0].type.name} </strong></p>
             <p>Sprite:</p> <img src ="${data.sprites.front_default}">
            </div>
                    `;
        
     } catch(erro){
        document.getElementById('mensagem').innerHTML = `
            <h3> ${erro.message}</h3>`
    
    }
    }   
    pokemon.value=''
}   






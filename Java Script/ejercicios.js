

// EJERCICIO 2
var s2 = "Hello World!";
alert(s2. toLowerCase ());

// EJERCICIO 3
mostrar = function(param){
    param();
}
param = () =>{
    console.log("Openbravo!!!")
}
mostrar(param)

// EJERCICIO 4
function diagonal(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        for (var x = 0; x < matriz.length; x++) {
            if (i !== x && matriz[i][x] !== 0) 
                return false;
        }
    }
    return true;
}
console.log(diagonal([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));
console.log(diagonal([[3, 0, 0], [0, 1, 0], [0, 0, 2] ]));

// EJERCICIO 13
const App = () => {
    return (
      <h1>Hello World</h1>
    )
  }
  
  export default App



//   EJERCICIO 16
import React, { useState, useEffect } from 'react';

const App = () => {
   const [pokemon, setPokemon] = useState([]);
   useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon')
         .then((response) => response.json())
         .then((data) => {
            setPokemon(data.results);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <>
      {pokemon.map(poke =>(
          <h1 key={poke.id}>{poke.name}</h1>
      ))}
    </>
  )
};

export default App


// EJERCICIO 18
import React, { useState} from 'react';

const App = () => {
   const [count, setCount] = useState(0);
   
   return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
};

export default App




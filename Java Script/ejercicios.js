

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

// EJERCICIO 9
const Alumnos = () => {
  const alumnos = [
    { firstname: "demo",
      lastname: "demo", 
      dni: 1234 },
    { firstname: "demo2",
      lastname: "demo2", 
      dni: 1235 },
    { firstname: "demo3",
      lastname: "demo3", 
      dni: 1236 },
]

  return (
    <div class="div-alumnos pt-5 container-fluid">
      <h4 class="text-center pt-5">DEMO</h4>
      <div class="row justify-content-end d-flex justify-content-evenly container-fluid">
      <hr></hr>
            <p class="col-2 justify-content-center d-flex categorias border-start fw-bold">#</p>
            <p class="col-2 justify-content-center d-flex categorias border-start fw-bold">NOMBRE</p>
            <p class="col-2 justify-content-center d-flex categorias  border-start fw-bold">EDAD</p>
            <p class="col-3 justify-content-center d-flex categorias  border-start fw-bold">CARRERA</p>
        <hr ></hr>
      </div>
      {
        alumnos.length > 0 ?
          alumnos.map((alumno,i) =>(
            <div key={alumno.nombre} class="row  d-flex justify-content-evenly container-fluid">
              <p class="col-2 justify-content-center d-flex border-start fw-bold">{i+1}</p>
              <p class="col-2 justify-content-center d-flex border-start">{alumno.firstname}</p>
              <p class="col-2 justify-content-center d-flex border-start">{alumno.lastname}</p>
              <p class="col-3 justify-content-center d-flex border-start">{alumno.dni}</p>
              <hr></hr>
            </div>
          ))
        : <p>No hay demo</p>
      }
    </div>
  )
}
export default Alumnos



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




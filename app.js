// toma el valor de ID contenedor
let contenedor = document.querySelector('#contenedor');
// crea un elemento h3 y le coloca el texto Arbol de Nodos
let subitulo = document.createElement('h3');
subitulo.innerText = 'Arbol de Nodo';

//crea un elemento imagen y le agrega direccion, tamaño y texto alternativo
let imagen = document.createElement('img');
imagen.src = 'https://4.bp.blogspot.com/-ARyU_kEsEIM/WNQaNVGoM8I/AAAAAAAAC2I/0TyRtDLR5Yw7CvAmN6AhK9wZlDPJSEe4ACLcB/s1600/DWEC06_CONT_R04_arbol.png'
imagen.width = '600';
imagen.alt = 'Arbol de Nodos';

// contenedor.appendChild(subtitulo);
// contenedor.appendChild(imagen);

contenedor.append(subitulo, imagen)


/* Uso de Template Strim*/

let autor = {
  nombre: "Pablo Moreno",
  usuario: "pmoreno",
  correo: "pmoreno@gmail.com",
  descripcion: "fanatico de la programacion y comercial de altonivel",
  img: "https://th.bing.com/th/id/R.8d0bc56ce5eecb68b129b5b9cc22355a?rik=y3Qf15s1QZWvbQ&pid=ImgRaw&r=0"
}
//tarjeta 

const crearTarjeta = () => {
  document.querySelector('#contenedor__tarjeta').innerHTML = ""

  let columnaTarjeta = document.createElement('div');
  columnaTarjeta.className = 'col';

  let tarjetaAutor = `<div class="card" style="width: 18rem">
  <img
    src="${autor.img}"
    class="card-img-top pt-2"
    alt="${autor.nombre}"
  />
  <div class="card-body">
    <h5 class="card-title">${autor.nombre}</h5>
    <p class="card-text">
      ${autor.descripcion}
    </p>
    <p class="card-text">
      usuario ${autor.usuario}
    </p>
    <p class="text-muted">
      ${autor.correo}
    </p>
    <button class="btn btn-primary" onclick="eventoClick(event)">Ver perfil</button>
  </div>
  </div>`;

  columnaTarjeta.innerHTML = tarjetaAutor;
  document.querySelector('#contenedor__tarjeta').append(columnaTarjeta)

}




// --------------------eventos------------------------
// event¡ submit
const modificarAutor = (event) => {
  console.log(event)
  event.preventDefault();

  autor.nombre = document.querySelector("#nombre").value;
  autor.usuario = document.querySelector("#usuario").value;
  autor.correo = document.querySelector("#email").value;

  crearTarjeta();
  limpiarFormulario();
};

/*evento onclick
const eventoClick = (event) => {
  console.log(event)
};*/
const limpiarFormulario = () => {
  document.getElementById("formulario").reset();
};
// escuchador de eventos
document
  .getElementById("formulario")
  .addEventListener("submit", modificarAutor);

  crearTarjeta()
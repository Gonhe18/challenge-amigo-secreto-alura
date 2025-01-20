// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo = document.getElementById("amigo");

function agregarAmigo() {

   if (amigo.value == '') {
      alert("Por favor, inserte un nombre.");
   } else {
      amigos.push(amigo.value)
      amigo.value = "";

      actualizarLista();
   }

}

function actualizarLista() {
   let listaAmigos = document.getElementById("listaAmigos");
   listaAmigos.innerHTML = "";

   amigos.forEach(a => {
      let item = document.createElement("li");
      item.innerHTML = a;
      listaAmigos.appendChild(item)
   });
}

function sortearAmigo() {
   if (amigos.length > 0) {
      let elegido = Math.floor(Math.random() * amigos.length);
      let resultado = document.getElementById("resultado");
      let item = document.createElement("li");
      item.innerHTML = amigos[elegido];
      resultado.appendChild(item)

      amigos = []
      listaAmigos.innerHTML = "";

   } else {
      alert("Por favor, agregue nombres antes de realizar el sorteo");
   }
}
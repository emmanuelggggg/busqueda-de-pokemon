const button = document.querySelector("#button");
button.addEventListener("click",() =>{
  const input = document.querySelector("#buscador");
  console.log(input.value);

  axios({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/"+ input.value
  }).then(response => {
    const urlIMG = response.data.sprites.front_default;
    const divImagenes =document.querySelector(".imagenesPOKE");
    
    if(divImagenes.childElementCount > 0) {
      divImagenes.innerHTML ="";
    }

    const img = document.createElement("img");
    img.src = urlIMG;
    console.log(img);

    divImagenes.appendChild(img);
  }).catch((error) =>{
    alert(error.message + 
     ", favor de escribir bien el nombre");
   
  })
})

// console.log("Iniciando...");
// const response = axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
// response.then((response) => {
//   console.log(response);
//   console.log("Termino correctamente");     
// }).catch((error) => {
//  console.log(error.response);
//   console.log("Termino con errores");
// }).then(() => {
// console.log("Finalizó");  
// });
// console.log("Seguramente no ha acabado");
// .catch((error) =>{
//   alert(error.message + 
//    ", favor de escribir bien el nombre");
//   console.log("Termino con error");
// })

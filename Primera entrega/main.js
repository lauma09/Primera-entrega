let distancia = parseInt(prompt("Distancia total en kilometros"))
console.log(distancia)

let tiempo = parseInt(prompt("Tiempo total en horas"))
console.log(tiempo)

let peajes

do {
    peajes = parseInt(prompt("¿Cuántos peajes hay en el camino?"))
} while (isNaN(peajes) || peajes < 0)

if (peajes !== 0){
    ttotal = tiempo + peajes*0.05
    velprom = distancia/ttotal
    velprom = Math.round(velprom)
    console.log(velprom)
alert("La velocidad promedio a la que tiene que ir es a " + velprom + " Km/h")
    }
else if (peajes === 0){
    velprom = distancia/tiempo
    velprom = Math.round(velprom)
    console.log(velprom)
alert("La velocidad promedio a la que tiene que ir es a " + velprom + " Km/h")
    }
/**
 * Autor MArio ALfonso Nuñez (DAW)
 * Github:
 */

document.addEventListener('DOMContentLoaded', () => {

    const saldoInicial = 1000
    let saldoActual = saldoInicial

    const mensajeElemento = document.getElementById("mensaje")
    const saldoElemento = document.getElementById("saldo")
    const importeElemento = document.getElementById("importe")
    const retirarBoton = document.getElementById("retirar")
    const depositarBoton = document.getElementById("depositar")

    retirarBoton.addEventListener("click", () => {
        const cantidad = parseFloat(importeElemento.value)
        if (isNaN(cantidad) || cantidad <= 0 || cantidad > saldoActual){
            mensajeElemento.textContent = "Importe no es valido"
        }else{
            saldoActual -= cantidad
            //saldoElemento.textContent = `Saldo: ${saldoActual}€`
            actualizarSaldo()
            mensajeElemento.textContent = `Retirado: ${cantidad}€`
        }
    })

    depositarBoton.addEventListener("click", () => {
        const cantidad = parseFloat(importeElemento.value)
        if (isNaN(cantidad) || cantidad <= 0){
            mensajeElemento.textContent = "Importe no es valido"
        }else{
            saldoActual += cantidad
           //saldoElemento.textContent = `Saldo: ${saldoActual}€`
            actualizarSaldo()
            mensajeElemento.textContent = `Depositado: ${cantidad}€`

        }
    })

    const actualizarSaldo = () => {
        saldoElemento.textContent = `Saldo: ${saldoActual}€`
    }

})
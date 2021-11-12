
//FUNCION FLECHA
let robarPlano = (id,despegarNave) => {
    if(id>0 && id<=10){
        let mensaje="Nos robamos el plano " + id
        console.log(mensaje)
        despegarNave(true)
    }else {
        let mensaje="Nos robamos el plano fake"
        console.log(mensaje)
        despegarNave(false)
    }
}
//Operador ternario
robarPlano(5,bandera => bandera ? console.log("Despegando...") : console.log("No podemos despegar!"))

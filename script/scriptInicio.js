function login(form){
    if (form.usuario.value=="jorge") {
        if (form.contraseña.value=="123") {
            location="Principal.html"
        } else {
            alert("Contraseña incorrecta")
        }
    } else {
        alert("Error de usuario")
    }
}


window.onload = inicializar;
var formAutenticacion;
const auth = firebase.auth();

function inicializar(){
    formAutenticacion = document.getElementById("form-autenticacion");
    formAutenticacion.addEventListener("submit", autentificar, false);

}

function autentificar(event)
{
    event.preventDefault();
    var usuario = event.target.email.value;
    var contrasena = event.target.password.value;

    auth.signInWithEmailAndPassword(usuario, contrasena)
        .then(function(result){
            
            window.location.href = "inicio.html";
        })
        .catch(function(error)
        {
            $("#errorModal").modal();
        });
}
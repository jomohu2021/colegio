let cerrar= document.querySelectorAll(".close")[0];
let abrir= document.querySelectorAll(".abriendoA")[0];
let modal= document.querySelectorAll(".modal")[0];
let modalC= document.querySelectorAll(".modal-container")[0];

function datos (){
    var dato1 = document.getElementById("campo-texto1").value;
    var dato2 = document.getElementById("campo-texto2").value;
    var dato3 = document.getElementById("campo-texto3").value;
    var dato4 = document.getElementById("campo-texto4").value;;
  
    if (dato1 == ""){
        alert("Debe digitar su nombre")
        document.getElementById("campo-texto1").focus()
    }

else { 
    if (dato2 == ""){
    alert("Debe digitar su correo")
    document.getElementById("campo-texto2").focus();
     }
     else { 
        if (dato3 == ""){
        alert("Debe digitar su institucion")
        document.getElementById("campo-texto3").focus();
         }
         else { 
            if (dato4 == ""){
            alert("Debe digitar su nummero")
            document.getElementById("campo-texto4").focus();
             }
             else {
                console.log(dato1+" "+dato2+" "+dato3+" "+dato4);
                document.getElementById("campo-texto1").value= " ";
                document.getElementById("campo-texto2").value= " ";
                document.getElementById("campo-texto3").value= " ";
                document.getElementById("campo-texto4").value= " ";
          }
     }
 }
}
}


abrir.addEventListener("click",function(e) {
    e.preventDefault(); 
modalC.style.opacity ="1";
modalC.style.visibility ="visible";
modal.classList.toggle ("modal-close")
});

cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
    setTimeout(function() {
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        }, 800)    
} )
window.addEventListener("click",function(e){
    
    if(e.target== modalC){
        modal.classList.toggle("modal-close");
        setTimeout(function() {
            modalC.style.opacity="0";
            modalC.style.visibility="hidden";
        }, 800)
    }
}
)

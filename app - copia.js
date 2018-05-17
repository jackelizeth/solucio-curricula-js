var name = prompt("¿Ingresa tu nombre? ");
document.getElementById('user').innerHTML=name;

//preguntemos si desea jugar
var play = prompt("Deseas jugar ");

//vamos jugar
  if (play == "si"){
      alert("juguemos  ");

//respondiendo la 1era pregunta
      var answer1 = prompt("¿De que color es el cielo? ");
         switch(answer1){
         case "azul":
         document.getElementById('resp1true').innerHTML=answer1 ;
         break;
         default:
         document.getElementById('resp1false').innerHTML=answer1;
         }

  //respondiendo la 2da pregunta
       var answer2 = prompt("¿Martin Vizcarra es el presidente de Argentina?");

         switch(answer2){
         case "no":
         document.getElementById('resp2true').innerHTML=answer2  ;
         break;
         default:
         document.getElementById('resp2false').innerHTML=answer2 ;
         }

  //respondiendo la 3ra pregunta
       var answer3 = prompt("¿De que color es el caballo blanco de San Martin? ");
          switch(answer3){
          case "blanco":
          document.getElementById('resp3true').innerHTML=answer3 ;
          break;
          default:
          document.getElementById('resp3false').innerHTML=answer3 ;
         }

    }else{
      document.write("Juega luego :( ");

    }
   

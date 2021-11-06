
function calculateIMC()
{
    let weight= document.getElementById("campoPeso").value;
    let height= document.getElementById("campoAltura").value;
    let result= document.getElementById("result");
    let imc= weight/ (height* height);
    let msg= document.getElementById("msg");

    if(imc>0)
    {
        msg.innerHTML= "Su IMC es:";
        result.innerHTML= imc;

        let tipHeader= document.getElementById("tip");

        if(imc>25)
        {
            tipHeader.innerHTML= "Estas dentro del rango de sobrepeso segun la ONU, te recomiendo empezar una dieta rica en vegetales y frutas";
        }else if ( imc>18.5)
        {
            tipHeader.innerHTML="Estas dentro del rango de peso normal, te recomiendo hacer ejercicio para tener una mejor condicion";
        }
        else{ (imc>18.5)
            tipHeader.innerHTML="Estas en bajo peso, te recomiendo subir de peso mediante una dieta rica en calorias"
            
        }
    }else{
        result.innerHTML= "Coloque valores validos";
    }

}
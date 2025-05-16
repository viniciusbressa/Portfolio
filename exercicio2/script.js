function subtrair() {
 
    let idade = 0;

    idade = Number(window.prompt("digite sua data de nascimento"));

    
   
     
     if(idade > 2008) {
         alert("voce ja pode tirar a habilitacao");
     } else{
         alert("voce ainda nao pode tirar a habilitacao");
         let resul = idade-2007
         alert("voce ainda precisa esperar essa idade:");
         alert(resul)
     } 
        
}
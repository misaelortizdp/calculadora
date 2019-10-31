
function multiplicar() {

  var res= document.getElementById('pantalla').value;

  res +='*';

  document.getElementById('pantalla').value=res;

}

function dividir() {


  var res= document.getElementById('pantalla').value;

  res +='/';       



  document.getElementById('pantalla').value=res;


}


function sumar() {

    var res= document.getElementById('pantalla').value;

  res +='+';

  document.getElementById('pantalla').value=res;

}

function restar() {

    var res= document.getElementById('pantalla').value;

  res +='-';

  document.getElementById('pantalla').value=res;
}


function masmenos() {

   var res= document.getElementById('pantalla').value;

  res = res*-1;

  document.getElementById('pantalla').value=res;
     
}







function punto() {
    var res= document.getElementById('pantalla').value;

  res +='.';

  document.getElementById('pantalla').value=res;
}

function igual(){
     var res= document.getElementById('pantalla').value;
       
     res= eval(res);

      document.getElementById('pantalla').value=res;

}



function backspace(){
   
    var res= document.getElementById('pantalla').value;

    res2= res.slice(0,-1);

     document.getElementById('pantalla').value=res2;
    



}




function agregarNum(num){


	var str1=document.getElementById('pantalla').value; 


    if(str1 == '0'){document.getElementById('pantalla').value=num;
     }else
     { var str2=num; 
     var res = str1.concat(str2);

     document.getElementById('pantalla').value=res;


}

}

function borrartodo(){
    
     document.getElementById('pantalla').value=" ";

}


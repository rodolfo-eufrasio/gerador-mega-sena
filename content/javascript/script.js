function gerar() {
  var valor = 0;
  var numeros = [];

      do{
        var randnumero = Math.round((Math.random()*59)+1); //1
          if (numeros.indexOf(randnumero) == -1){
           numeros[valor] = randnumero; 
           valor = valor + 1;
          }
      }
      while(valor < 6);
      numeros.sort(function(a, b){return a-b}); //2
      document.getElementById('msg').innerHTML = numeros[0]+" | "
                                                +numeros[1]+" | "
                                                +numeros[2]+" | "
                                                +numeros[3]+" | "
                                                +numeros[4]+" | "
                                                +numeros[5];
}
/* MATERIAL DE APOIO 

 1 - https://www.w3schools.com/jsref/jsref_random.asp
 2 - https://www.w3schools.com/jsref/jsref_sort.asp 

*/
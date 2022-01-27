

const Monedas = ["Euros ", "Dolares ", "Pesos Uruguayos ", "Pesos Chilenos ", "Rupias ", "Libras ", "Yenes ", "Reales ", "Francos ", "Coronas "];



const Valores = [120 , 121 , 0.42 , 7.60 , 0.72 , 0.0071 , 1.10 , 0.051 , 0.0089 , 0.064 ];



alert("Bienvenido, en este simulador voy a crear los objetos del Array, y imprimirlos desde el Script a el documento HTML")

for (let i = 0; i < 10; i++) { 
   var elem1 = document.createElement('tr') ;
   elem1.setAttribute = ("class", "nombresYValores")
   elem1.textContent =  Monedas[i] + "=  $" + Valores[i];
   elem1.style.cssText = "color:green";
   document.body.appendChild(elem1);
   
}






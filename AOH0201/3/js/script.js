/*3- Haz un programa que escriba en una lista no ordenada todos los múltiplos de 23 inferiores a 1000 
y por último nos dé la suma de todos ellos.

 Ayuda: document.write("<li>"+numero+"</li>");*/
 document.write("Multiplos de 23 anteriores a mil <br/>");
 document.write("<ul>");
let numero=23;
while(numero<1000){
    document.write("<li>"+numero+"</li>");
    numero=numero+23;
}
document.write("</ul>");
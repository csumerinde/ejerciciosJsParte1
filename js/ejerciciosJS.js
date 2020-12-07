// Resolucion de Ejercicios JavaSript PARTE I

//Ejercicio 1
alert("Ejercicio 1");

//Ejercicio 2
document.write("Ejercicio 2:  Hello World");  

//Ejercicio 3
document.write("<br>Ejercicio 3:  "+ (3 + 5));

//Ejercicio 4
let nom = prompt("Ejercicio 4: Ingrese Nombre:");
document.write("<br>Ejercicio 4:  Nombre ingresado: "+ nom);

//Ejercicio 5
let num1 = parseInt(prompt("Ejercicio 5: Ingrese primer numero:"));
let num2 = parseInt(prompt("Ejercicio 5: Ingrese segundo numero:"));
document.write("<br>Ejercicio 5:  El resultado es: "+ (num1 + num2));

//Ejercicio 6
let num3 = parseInt(prompt("Ejercicio 6: Ingrese primer numero:"));
let num4 = parseInt(prompt("Ejercicio 6: Ingrese segundo numero:"));
if (num3 > num4)
   {document.write("<br>Ejercicio 6:  El numero mayor es: "+ num3);}
else if (num4 > num3)
     {document.write("<br>Ejercicio 6:  El numero mayor es: "+ num4);}
     else
     {document.write("<br>Ejercicio 6:  Son Iguales");}

//Ejercicio 7
let num5 = parseInt(prompt("Ejercicio 7: Ingrese primer numero:"));
let num6 = parseInt(prompt("Ejercicio 7: Ingrese segundo numero:"));
let num7 = parseInt(prompt("Ejercicio 7: Ingrese tercer numero:"));
if (num5 > num6) 
{if (num5 > num7)
    {document.write("<br>Ejercicio 7:  El numero mayor es: "+ num5);}
    else if (num7 > num5) 
    {document.write("<br>Ejercicio 7:  El numero mayor es: "+ num7);}
}
else if (num6 > num7)
{document.write("<br>Ejercicio 7:  El numero mayor es: "+ num6);}
else if (num7 > num5) 
{document.write("<br>Ejercicio 7:  El numero mayor es: "+ num7);}

//Ejercicio 8
let x = 0;
let num8 = parseInt(prompt("Ejercicio 8: Ingrese un numero:"));
if ((num8%2)==0)
    {document.write("<br>Ejercicio 8:  El numero es divisible por 2");}
else
    {document.write("<br>Ejercicio 8:  El numero NO es divisible por 2");}

//Ejercicio 9
let a = "";
let frase = prompt("Ejercicio 9: Ingrese una frase:");
document.write("<br>Ejercicio 9:  Las vocales de la frase ingresada son :  ");
for (let i = 0; i <= frase.length; i++)
{
    a = frase.substr(i,1);
    switch (a)
    {
        case "a": document.write("a ");
                  break;
        case "e": document.write("e ");
                  break;        
        case "i": document.write("i ");
                  break;                
        case "o": document.write("o ");
                  break;        
        case "u": document.write("u ");
                  break;        
        case "A": document.write("A ");
                  break;
        case "E": document.write("E ");
                  break;        
        case "I": document.write("I ");
                  break;                
        case "O": document.write("O ");
                  break;        
        case "U": document.write("U ");
                  break;        
        default : document.write(" ");
    }
}

//Ejercicio 10
let num9 = parseInt(prompt("Ejercicio 10: Ingrese un numero:"));
if ((num9%2)==0)
   {document.write("<br>Ejercicio 10:  El numero es divisible por 2");}
   else if ((num9%3)==0)
   {document.write("<br>Ejercicio 10:  El numero es divisible por 3");}
   else if ((num9%5)==0)
   {document.write("<br>Ejercicio 10:  El numero es divisible por 5");}
   else if ((num9%7)==0)
   {document.write("<br>Ejercicio 10:  El numero es divisible por 7");}
   
//Ejercicio 11
let vector1 = [2, 3, 5, 7];
let vector2 = [0, 0, 0, 0];
let num10 = parseInt(prompt("Ejercicio 11: Ingrese un numero:"));
for (let j = 0; j <= 4; j++)
    {vector2[j]=(num10%vector1[j]);}
document.write("<br>Ejercicio 11:  El numero es divisible por :  ");
for (j = 0; j <= 4; j++)
    {
        if (vector2[j] == 0)
           {document.write(vector1[j]+ " , ");}
    }

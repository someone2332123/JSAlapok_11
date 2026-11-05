/*1. Feladat írd át a `focim` azonosítójú főcím tartalmát „Mátrix rendszer”-re a `getElementById()` metódussal! */

let focimIras =document.getElementById("focim")
focimIras.textContent="Mátrix rendszer"


/*2. Jelöld ki a `statusz-szoveg` osztályú elemeket a `getElementsByClassName()` metódussal, és tárold a kapott elemlistát a `statuszElemek` változóban!*/

let statuszElemek=document.getElementsByClassName("statusz-szoveg") 
console.log(statuszElemek.length)
/*3. Írd ki a konzolra, hogy hány elemet tartalmaz a `statuszElemek` lista! */

/*4. Írd át a lista első elemének szövegét „Rendszer ellenőrzése folyamatban...” szövegre! Az elemet az indexével érd el!*/

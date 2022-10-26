// var car = "BMW"
// var car2 = "Mercedes"
// var car3 =  "Ford"
// var car4 =  "Kia"
// var car5 =  "Range Rover"
// var car6 =  "Chevrolet"

// console.log(car)
// console.log(car2)
// console.log(car3)
// console.log(car4)
// console.log(car5)
// console.log(car6)


// var masinlar=["BMW", "Mercedes", "Ford", "Kia", "Range Rover", "Chevrolet"]

// console.log("Menim masinimin modeli "+masinlar[4]+"-dir.")
// console.log("Menim masinimin modeli "+masinlar[4][1]+"-dir.")



// var seyahet=[
// ["Tebiet",
// 	["Deniz","Hava limani"],"Ismayilli","Almaniya"
// ],
// ["Aytac","Gultac","Sema","Nubar","Azima-Esmira"],
// ["Revan","Sebuhi","Rza","Deyanet"],
// [
// 	"Shah dag",["Yay","Qis"],"Mandarin",
// ],
// [" ","Baki."]
// ];
// M-Mandarin
// e-Deniz
// n-Hava limani
// i-Sebuhi
// m-Almaniya
// Boshluq-Hava limani
// a-Ismayilli
// d-Shah dag
// i-Baki
// m-Hava limani
// Boshluq-""
// A-Azima-Esmira
// y-Yay
// t-Gultac
// a-Yay
// c-Aytac
// - Azima-Esmira
// d-Mandarin
// i-Qis
// r-Azima-Esmira
// .-Baki.

// console.log(seyahet[3][2][0]+seyahet[0][1][0][1]+seyahet[0][1][1][9]+seyahet[2][1][5]+seyahet[0][3][2]+seyahet[0][1][1][4]+seyahet[0][2][3]
// 	+seyahet[3][0][5]+seyahet[4][1][3]+seyahet[0][1][1][7]+seyahet[4][0]+seyahet[1][4][0]+seyahet[3][1][0][2]+seyahet[1][1][3]
// 	+seyahet[3][1][0][1]+seyahet[1][0][4]+seyahet[1][4][5]+seyahet[3][2][3]+seyahet[3][1][1][1]+seyahet[1][4][10]+seyahet[4][1][4])


var olkeler = [
	"Azerbaycan",
	"Almainya",
	"USA",
	"Tailand",
	"Zimbabwe",
	"Turkey",
	"Russia",
	"England",
	"Misir",
	boom()
]


// document.write(olkeler)


// document.write("<ul>")
// document.write("<li>"+olkeler[0]+"</li>")
// document.write("<li>"+olkeler[1]+"</li>")
// document.write("<li>"+olkeler[2]+"</li>")
// document.write("<li>"+olkeler[3]+"</li>")
// document.write("<li>"+olkeler[4]+"</li>")
// document.write("</ul>")


// for(var i=0; i<10; i++){
// 	console.log(i)
// }

// document.write("<ul>")

// for(var i=0; i<6; i++){
// 	document.write("<li>"+olkeler[i]+"</li>")
// }
// document.write("</ul>")



// console.log(olkeler.length)

// document.write("<ul>")

// for(var i=0; i<olkeler.length; i++){
// 	document.write("<li>"+olkeler[i]+"</li>")
// }
// document.write("</ul>")


// olkeler[1] ="Tokio"

var xarici_olke=olkeler[3]
// console.log(xarici_olke)
console.log(typeof xarici_olke)

document.write("<ol>")

for(var i=0; i<olkeler.length; i++){
	document.write("<li>"+olkeler[i]+"</li>")
}
document.write("</ol>")



function boom(){
	alert("Boom chika boom")
}


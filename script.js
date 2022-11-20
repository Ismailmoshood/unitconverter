const inputbtn = document.getElementById("input-btn")
const convertbtn = document.getElementById("convert-btn")
const mass = document.getElementById("mass")
const volume = document.getElementById("volume")
const length = document.getElementById("length")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meter = 0
let feet = 0
let kilogram = 0
let litre = 0
let gallon = 0
let pound = 0

let input = 0


let newmass = ""
let newlength = ""
let newvolume = ""
let newpounds = 0
let newkilo = 0
let newlitre = 0
let newgallon =0
let newmeter = 0
let newfeet = 0


   convertbtn.addEventListener("click", function(){
      convert()
   })
  

function convert(){
   input = inputbtn.value


 newpounds = input * 2.204
 newkilo = input / 2.204
 newlitre = input / 0.264
 newgallon = input *0.264
 newmeter = input / 3.281
 newfeet = input * 3.281

 newmass = `${input}kg = ${newpounds.toFixed(3)}pounds | ${input}pounds = ${newkilo.toFixed(3)}kg`
newlength = `${input}meters = ${newfeet.toFixed(3)}feet | ${input}feet = ${newmeter.toFixed(3)}meter`
newvolume= `${input}litres = ${newgallon.toFixed(3)}gallons | ${input}gallons = ${newlitre.toFixed(3)}litres`

   mass.textContent= newmass
   volume.textContent= newvolume
   length.textContent= newlength
}


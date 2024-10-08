let kdv = 0.20
let vergi = 0.25

let satisBedeli = (Number) (prompt("satiş bedeli"))
let maliyet = (Number) (prompt("maliyet"))
let kdvli = satisBedeli * ( 1 + kdv)
 let net = satisBedeli - maliyet
 let kdvNet = net - ( kdvli * vergi)


let sonuc = Math.floor(kdvNet);
alert("Net Karınız " + sonuc)
console.log(kdvli)
var dias = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo";
var lugares = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti";

dias = dias.split(",");
lugares = lugares.split(".");

var programa = [];
for(let i=0; i<dias.length;i++) {
    programa[i] = dias[i]+" "+lugares[i];
}

console.log(programa);
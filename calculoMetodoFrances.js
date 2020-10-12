// Calcula las cuotas basadas en el método francés
// couta = (capital * i) / (1 - (i + 1) ^ -n)
// i = interés
// n = períodos (en meses)

exports.calcularMetodoFrances = (capital, tasaInteres, plazo) => {
  let cuota = 0;
  
  let interess = 0;
  let capitalDeudaPendiente;
  let tasaInteresDecimal = tasaInteres / 100;
  const cuotas = [];
 
  let capitalAmort = 0;
  // Transformar los años en meses
  plazo = Math.round(plazo * 12);
  // Calcular la cuota
  cuota =((capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo)).toFixed(2);



	for (var mes = 0; mes < plazo; ++mes)
	{ 

		interess = (capital * tasaInteresDecimal).toFixed(2);
    capitalAmort = (cuota - interess ).toFixed(2);
    capital = (capital - capitalAmort).toFixed(2);
   
cuotas.push({
  mes, capitalAmort, interess, cuota,capital})
   
    
	}
	
return cuotas;

  
  

};




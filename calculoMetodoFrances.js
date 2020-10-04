// Calcula las cuotas basadas en el método francés
// couta = (capital * i) / (1 - (i + 1) ^ -n)
// i = interés
// n = períodos (en meses)

exports.calcularMetodoFrances = (capital, tasaInteres, plazo) => {
  let cuota = 0;
  let mes = 0;
  let interess = 0;
  let capitalDeudaPendiente;
  let tasaInteresDecimal = tasaInteres / 100;
  const cuotas = [];
 
  let capitalAmort = 0;
  // Transformar los años en meses
  plazo = Math.round(plazo * 12);
  // Calcular la cuota
  cuota =(capital * tasaInteresDecimal) / (1 - (1 + tasaInteresDecimal) ** -plazo)



	for (var count = 0; count < plazo; ++count)
	{ 

		interess = capital * tasaInteresDecimal;
    capitalAmort = cuota - interess ;
    capital = capital - capitalAmort;
   

    console.log("Mes:"  + (count + 1));
    console.log(`Capital: ${cuotas[capitalAmort]= capitalAmort.toFixed(2)} `);
    console.log(`Interes: ${cuotas[interess] = interess.toFixed(2)}`);
    console.log(`Cuota: ${cuotas[cuota] = cuota.toFixed(2)}`);
    console.log(`Deuda Pendiente: ${cuotas[capital] = capital.toFixed(2)}`);
	}
	


  
  

};




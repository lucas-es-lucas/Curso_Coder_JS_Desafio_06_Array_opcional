// OBJETOS
class Restriccion {
     constructor (edad, leyenda) {
          this.edad = edad,
          this.leyenda = leyenda
     }

     validar_restriccion (edad) {
          return (edad >= this.edad);
     }
}
class Pelicula {
     constructor (titulo, director, restriccion, genero) {
          this.titulo = titulo,
          this.director = director,
          this.restriccion = restriccion,
          this.genero = genero
          }
     getPelicula () {
          return this.titulo + ' ' + this.director + ' ' + this.restriccion.leyenda + ' ' + this.genero;
     }

     // validar_restriccion (edad) {
     //      return (edad >= this.restriccion);
     // }
}
class Ticket {
     constructor (pelicula, cine, dia, horario, sala, cantidad, cuotas, importe, importe_cuota, promocion) {
          this.pelicula = pelicula, 
          this.cine = cine, 
          this.dia = dia, 
          this.horario = horario, 
          this.sala = sala, 
          this.cantidad = cantidad, 
          this.cuotas = cuotas, 
          this.importe = importe, 
          this.importe_cuota = importe_cuota, 
          this.promocion = promocion
     }
     // RESUMEN DE COMPRA
     getTicketInfo () {
          let resumen = `Resumen de compra: \nPelícula: ${this.pelicula.titulo} (${this.pelicula.genero}) en el cine ${this.cine} \nFunción: día ${this.dia} a las ${this.horario} en la sala ${this.sala} \n${this.cantidad} entradas \nTotal: $${this.importe} \n`;
          if (this.cuotas > 1) {
               resumen += `Cuotas: ${this.cuotas} de $${this.importe_cuota} \n`;
          }
          if (this.promocion != '') {
               resumen += `Promoción aplicada: ${this.promocion} \n`;
          }
          return resumen;
     }
}
// VALIDACIONES
// function validar_pelicula (pelicula) {
//      // alert(pelicula.slice(-1));
//      if (pelicula == 'A' || pelicula == 'B' || pelicula == 'C') {
//           return true;
//      } else {
//           return false;
//      }
// }
function validar_cine (cine) {
     if (cine == 'A' || cine == 'B' || cine == 'C') {
          return true;
     } else {
          return false;
     }
}
function validar_dia (dia) {
     if (dia == 'A' || dia == 'B' || dia == 'C') {
          return true;
     } else {
          return false;
     }
}
function validar_horario (horario) {
     if (horario == 'A' || horario == 'B' || horario == 'C') {
          return true;
     } else {
          return false;
     }
}
function validar_sala (sala) {
     if (sala == 'A' || sala == 'B' || sala == 'C') {
          return true;
     } else {
          return false;
     }
}
function validar_valor (valor) {
     if (!isNaN(parseInt(valor))) {
          return true;
     } else {
          return false;
     }
}
function validar_asiento (asiento) {
     if (asiento == 'A' || asiento == 'B' || asiento == 'C') {
          return true;
     } else {
          return false;
     }
}
function validar_forma_de_pago (forma_de_pago) {
     if (forma_de_pago == 'A' || forma_de_pago == 'B' || forma_de_pago == 'C') {
          return true;
     } else {
          return false;
     }
}
function validar_promocion (promocion) {
     if (promocion == 'A' || promocion == 'B' || promocion == 'C') {
          return true;
     } else {
          return false;
     }
}
// INGRESO DE DATOS
function elegir_pelicula (peliculas) { //(pelicula1, pelicula2, pelicula3, pelicula4) { 
     switch (
     prompt(`Qué película querés ver? \n A - ${peliculas[0].titulo} (${peliculas[0].genero}) \n B - ${peliculas[1].titulo} (${peliculas[1].genero}) \n C - ${peliculas[2].titulo} (${peliculas[2].genero}) \n D - ${peliculas[3].titulo} (${peliculas[3].genero})`).toUpperCase()) {
          case 'A':
               return peliculas[0];
               break;
          case 'B':
               return peliculas[1];
               break;
          case 'C':
               return peliculas[2];
               break;
          case 'D':
               return peliculas[3];
               break;
     }
}
function informar_edad () {
     return prompt('Qué edad tenés?');
}
function elegir_cine () { //parámetro a futuro (pelicula) {
     // Revisar en qué cines dan la película y ofrecer esos cines
     return prompt('En qué cine la querés ver? \n A - Cine1 \n B - Cine2 \n C - Cine3').toUpperCase();
}
function elegir_dia () { //parámetros a futuro (pelicula, cine) {
     // Revisar qué días proyectan la película en el cine elegido. Y ofrecer esos días     
     return prompt('Qué día la querés ver? \n A - Día1 \n B - Día2 \n C - Día3').toUpperCase();
}
function elegir_horario () { //parámetros a futuro (pelicula, cine, dia) {
     // Revisar en qué horarios proyectan la película en el cine y día elegidos. Y ofrecer esos horarios     
     return prompt('En qué horario la querés ver? \n A - Horario1 \n B - Horario2 \n C - Horario3').toUpperCase();
}
function elegir_sala () { //parámetros a futuro (pelicula, cine, dia, horario) {
     // Revisar en qué salas proyectan la película en el cine, día y horario elegidos. Y ofrecer esas salas     
     return prompt('En qué sala la querés ver? \n A - Sala1 \n B - Sala2 \n C - Sala3').toUpperCase();
}
function elegir_cantidad () {
     return parseInt(prompt('Cuántas entradas querés?'));
}
function elegir_asiento (pelicula, cine, dia, horario, sala) {
     // Revisar qué ubicaciones están disponibles para la película en el cine, día, horario y sala elegidos. Y ofrecer esas ubicaciones
     let asiento_elegido = prompt('En qué ubicación la querés ver? \n A - Ubicación1 \n B - Ubicación2 \n C - Ubicación3').toUpperCase();

     if (validar_asiento(asiento_elegido)) {
          elegir_forma_de_pago(pelicula, cine, dia, horario, sala, asiento_elegido);
     } else {
          alert(`La ubicación que elegiste (${asiento_elegido}) no está disponible para la película ${pelicula} en el cine ${cine} el día ${dia} a las ${horario} en la sala ${sala}`);
     }
}
function consultar_promocion() {
     return confirm('Tenés alguna promoción?'); 
}
function elegir_promocion () {
     return prompt('Qué promoción tenés? \n A - Promo1 10% descuento \n B - Promo2 25% descuento \n C - Promo3 50% descuento').toUpperCase();
}
function elegir_forma_de_pago () { //parámetros a futuro (pelicula, cine, dia, horario, sala, asiento) {
     // Ofrecer siempre las mismas formas de pago?     
     return prompt('Cómo querés pagar? \n A - En 1 Pago \n B - En Cuotas').toUpperCase();
}
function elegir_cuotas () {
     return parseInt(prompt('En cuántas cuotas querés pagar?'));
}
// CALCULOS
function calcular_importe (valor_entrada, entradas, descuento) {
     return ((valor_entrada * entradas) * descuento);
}
function calcular_cuota (importe, cuotas) {
     return (importe / cuotas);
}
// RESUMEN DE COMPRA
// function emitir_ticket (pelicula, cine, dia, horario, sala, cantidad, cuotas, importe, importe_cuota, promocion) {
//      let resumen = `Resumen de compra: \n ${cantidad} entradas para la película \n '${pelicula.titulo}' \n en el cine ${cine} \n el día ${dia} a las ${horario} horas \n en la sala ${sala} \n Importe Total: ${importe} \n `;
//      if (cuotas > 1) {
//           resumen += `a pagar en ${cuotas} cuotas de ${importe_cuota} \n `;
//      }

//      if (promocion != '') {
//           resumen += `Promoción aplicada: ${promocion}`;
//      }

//      return resumen;
// }
// APP
const valor_entrada = 100;
let seguir;
// ARRAY DE TICKETS
let tickets = new Array();
// RESTRICCIONES
let restriccion1 = new Restriccion(0, 'Apta Todo Público');
let restriccion2 = new Restriccion(13, 'Apta Mayores de 13 años');
let restriccion3 = new Restriccion(16, 'Apta Mayores de 16 años');
let restriccion4 = new Restriccion(18, 'Sólo Para Adultos');
// const restricciones = new Array();
restricciones = [restriccion1, restriccion2, restriccion3, restriccion4];
// PELICULAS
let pelicula1 = new Pelicula('El Silencio de los Inocentes', 'Director1', restricciones[3], 'Thriller');
let pelicula2 = new Pelicula('Duro de Matar', 'Director2', restricciones[1], 'Acción');
let pelicula3 = new Pelicula('La Era de Hielo', 'Director3', restricciones[0], 'Comedia');
let pelicula4 = new Pelicula('El Conjuro', 'Director4', restricciones[2], 'Terror');
const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4];
// console.log(peliculas);
// PELICULAS ORDENADAS POR LA RESTRICCION DE EDADES
peliculas.sort(function (a, b) {
     return a.restriccion.edad - b.restriccion.edad;
});
console.log(peliculas);

let comprar = confirm(`Las películas en cartel son: \n A - ${peliculas[0].titulo} (${peliculas[0].restriccion.leyenda}) \n B - ${peliculas[1].titulo} (${peliculas[1].restriccion.leyenda}) \n C - ${peliculas[2].titulo} (${peliculas[2].restriccion.leyenda}) \n D - ${peliculas[3].titulo} (${peliculas[3].restriccion.leyenda}) \n Querés ver alguna?`);

if (comprar) {
     do {
          let pelicula_elegida = new Pelicula;
          let edad;
          let cine_elegido = '';
          let dia_elegido = '';
          let horario_elegido = '';
          let sala_elegida = '';
          let cantidad_elegida = 1;
          let promocion_elegida = '';
          let descuento = 1;
          let forma_de_pago_elegida = '';
          let cuotas_elegidas = 1;
          let importe = 0;
          let importe_cuota = 0;

          pelicula_elegida = elegir_pelicula(peliculas); //(pelicula1, pelicula2, pelicula3, pelicula4);
          // console.log(pelicula_elegida);

          if (pelicula_elegida !== undefined) { //(validar_pelicula(pelicula_elegida.titulo)) 
               edad = informar_edad();

               if (validar_valor(edad)) {
                    if (pelicula_elegida.restriccion.validar_restriccion(edad)) {
                         cine_elegido = elegir_cine(); //(pelicula_elegida);

                         if (validar_cine(cine_elegido)) {
                              dia_elegido = elegir_dia(); //(pelicula, cine_elegido);

                              if (validar_dia(dia_elegido)) {
                                   horario_elegido = elegir_horario(); //(pelicula, cine, dia_elegido);

                                   if (validar_horario(horario_elegido)) {
                                        sala_elegida = elegir_sala(); //(pelicula, cine, dia, horario_elegido);

                                        if (validar_sala(sala_elegida)) {
                                             cantidad_elegida = elegir_cantidad();

                                             if (validar_valor(cantidad_elegida)) {
                                                  // promociones
                                                  if (consultar_promocion()) {
                                                       promocion_elegida = elegir_promocion();

                                                       if (validar_promocion(promocion_elegida)) {
                                                            switch (promocion_elegida) {
                                                                 case 'A': // 10%
                                                                      descuento = .9;
                                                                      break;
                                                                 case 'B': // 25%
                                                                      descuento = .75;
                                                                      break;
                                                                 case 'C': // 50%
                                                                      descuento = .5;
                                                                      break;
                                                            }
                                                       } else {
                                                            alert(`La promoción ${promocion_elegida} no está disponible`);
                                                            promocion_elegida = '';
                                                       }
                                                  }
                                                  // forma de pago
                                                  forma_de_pago_elegida = elegir_forma_de_pago();

                                                  if (validar_forma_de_pago(forma_de_pago_elegida)) {
                                                       if (forma_de_pago_elegida == 'B') {
                                                            cuotas_elegidas = elegir_cuotas();

                                                            if (!validar_valor(cuotas_elegidas)) {
                                                                 alert('Tenés que elegir un valor numérico para la cantidad de cuotas');
                                                            }
                                                       }
                                                       // calcular importe
                                                       importe = calcular_importe(valor_entrada, cantidad_elegida, descuento);
                                                       // calcular pagos
                                                       importe_cuota = calcular_cuota(importe, cuotas_elegidas);
                                                       // generar ticket
                                                       let ticket_nuevo = new Ticket(pelicula_elegida, cine_elegido, dia_elegido, horario_elegido, sala_elegida, cantidad_elegida, cuotas_elegidas, importe, importe_cuota, promocion_elegida);
                                                       // console.log(ticket_nuevo);
                                                       // guardar ticket
                                                       tickets.push(ticket_nuevo);
                                                       // console.log(ticket_nuevo.getTicketInfo());
                                                  } else {
                                                       alert(`La forma de pago ${forma_de_pago_elegida} no está disponible`);
                                                  }
                                             } else {
                                                  alert('Tenés que elegir un valor numérico para la cantidad de entradas');
                                             }
                                        } else {
                                             alert(`El ${dia_elegido} a las ${horario_elegido} en la sala ${sala_elegida} del cine ${cine_elegido} no proyectan '${pelicula_elegida.titulo}'`);
                                        }
                                   } else {
                                        alert(`El ${dia_elegido} a las ${horario_elegido} no proyectan '${pelicula_elegida.titulo}' en el cine ${cine_elegido}`);
                                   }
                              } else {
                                   alert(`El día ${dia_elegido} no proyectan '${pelicula_elegida.titulo}' en el cine ${cine_elegido}`);
                              }
                         } else {
                              alert(`En el cine ${cine_elegido} no proyectan la película '${pelicula_elegida.titulo}'`);
                         }
                    } else {
                         alert(`La película '${pelicula_elegida.titulo}' no está permitida para tu edad`);
                    }
               } else {
                    alert('Tenés que elegir un valor numérico para la edad');
               }
          } else {
               alert(`La película elegida no está en cartelera`);
          }

          seguir = confirm('Querés comprar otra entrada?');
     } while (seguir);
     // console.log(tickets);
     // EMISION DE TICKETS ORDENADA POR EL DIA MÁS PROXIMO
     tickets.sort(function (a, b) {
          if (a.dia > b.dia) {
               return 1;
          } else if (a.dia < b.dia) {
               return -1;
          }
          return 0;
     })
     // console.log(tickets);
     for (const ticket of tickets) {
          alert(ticket.getTicketInfo());
     }

     alert('Gracias, hasta la próxima!');
} else {
     alert('Gracias, hasta la próxima!');
}


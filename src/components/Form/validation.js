
const regexEmail = /^[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/
const regexPassLength = /^.{6,10}$/




export function validate(input) {
 let errors = {};

 if (!regexEmail.test(input.username)) {
  errors.username = 'Esto no es un email valido';
 } else if (!input.username.length >= 35) {
  errors.username = 'El campo debe tener menos de 35 caracteres';
 } else if (!input.username.length === 0) {
  errors.username = 'Por favor completa este campo';
 }

 if (!regexPassLength.test(input.password)) {
  errors.password = 'El campo debe entre 6 y 10 caracteres';
 }
 // else if (!regexPass.test(input.password)) {
 //  errors.password = 'La contraseña requiere al menos una letra y un numero';
 // }

 return errors;
}

// export function validate(input) {
//  let errors = {}

//  // eslint-disable-next-line default-case
//  switch (true) {
//   case !regexEmail.test(input.username):
//    errors.username = 'Esto no es un email valido';
//    break;
//   case input.username.length >= 35:
//    errors.username = 'El campo debe tener menos de 35 caracteres';
//    break;
//   case input.username.length === 0:
//    errors.username = 'Por favor completa este campo';
//    break;
//   case !regexPassLength.test(input.password):
//    errors.password = 'El campo debe entre 6 y 10 caracteres';
//    break;
//   case !regexPass.test(input.password):
//    errors.password = 'La contraseña requiere al menos una letra y un numero';
//    break;


//  }

//  return errors;
// }
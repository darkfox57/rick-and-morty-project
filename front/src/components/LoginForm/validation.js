
const regexEmail = /^[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexPass = /[a-zA-Z]/ && /[0-9]/
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
 else if (!regexPass.test(input.password)) {
  errors.password = 'La contraseña requiere al menos una letra y un numero';
 }

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

// const regexEmail = /^[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
// const regexPass = /^[A-Za-z]\d[A-Za-z]$/;
// const regexPassLength = /^.{6,10}$/;


// const errormsj = "email";

// const emailValido = "user@hotmail.com";
// const emailFail = "sjhasd";
// const passvalido = "assd";
// const passFail = "";


// const generalMessage = {
//   email: () => (regexEmail.test(emailValido) ? "Es valido " : "No es valido"),
// };

// const default_message = () => "Ingresa los datos";

// const result = generalMessage[errormsj]
//   ? generalMessage[errormsj]()
//   : default_message;

// result;
import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string){
    switch(code){
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
      return 'Este correo ya esta en uso'

      case FirebaseCodeErrorEnum.WeakPassword:
      return 'La contraseña debe ser minimo de 7 caracteres'

      case FirebaseCodeErrorEnum.MissingPassword:
      return 'Debe ingresar una contraseña'

      case FirebaseCodeErrorEnum.InvalidEmail:
      return 'Ingrese un correo electronico valido'

      case FirebaseCodeErrorEnum.WrongPassword:
      return 'La contraseña es incorrecta'

      default:
      return 'Error desconocido'
    }
}}

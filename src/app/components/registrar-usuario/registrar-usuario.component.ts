import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-code-error.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})


export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private FirebaseError: FirebaseCodeErrorService
    ){

    this.registrarUsuario = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmarPassword: ['',Validators.required],

    })
  }

  ngOnInit(): void {

  }
  registrar(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const confirmarPassword = this.registrarUsuario.value.confirmarPassword;

    if(password !== confirmarPassword)
{
  this.toastr.error('Las contraseñas deber ser iguales','Error');
  return;
}

this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(() =>{
      this.loading = false;
      this.toastr.success('El usario fue registrado con exito!', 'Usuario regitrado');
      this.router.navigate(['/login']);
    }).catch((error)=>{
      this.loading = false;
      this.toastr.error(this.FirebaseError.codeError(error.code),'Error');
    })

  }



}

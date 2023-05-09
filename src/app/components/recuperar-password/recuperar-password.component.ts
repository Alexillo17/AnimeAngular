import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private FirebaseError: FirebaseCodeErrorService,)
    {

      this.recuperarUsuario = this.fb.group({
        correo: ['', Validators.required]
      })


    }
  ngOnInit(): void {

  }
  recuperar(){
    const email = this.recuperarUsuario.value.correo;
    this.loading = true;

    this.afAuth.sendPasswordResetEmail(email).then(() =>{
      this.toastr.info('Le enviamos un correo para restablecer su contraseña', 'Recuperar Contraseña')
      this.router.navigate(['/login'])

    }).catch(() => {
      this.loading = false;

    })
  }

}

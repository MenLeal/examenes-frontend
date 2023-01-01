import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  }

  constructor(private userService: UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {

   }

  formSubmit() {
    console.log(this.user)
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open("El nombre de usuario es requerido",'Aceptar',{
        duration: 3000,
        verticalPosition: 'top',
      });      
      return;
    }
    this.userService.addUsuario(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire("Usuario Guardado", "Se ha guardado con éxito en el sistema","success");   
      },
      (error)=>{
        console.log("Error");
        Swal.fire("ERROR", "No se ha podido completar su solicitud","error");   
      }
    )
  }

 


}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { __values } from 'tslib';
import { CriarUsuario } from '../models/salvar-usuarios.model';
import { SalvarUsuarioService } from '../services/salvar-usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  form!: FormGroup
  usuarios!: CriarUsuario[]
  usuarioId!:number
  verificarEditar:boolean = false
  constructor(
    private fb: FormBuilder,
    private salvarUsuarioService: SalvarUsuarioService


  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl('')
    })
    this.lerDadosUsuario()
  }
  lerDadosUsuario(){
     this.salvarUsuarioService.lerUsuarios().subscribe({
      next: (usuario: CriarUsuario[]) => {
        this.usuarios = usuario
        console.log(this.usuarios);
        
      },
      error: () => {
        console.log('erro lerUsuarios');

      }
    });
    
  }

  salvarDadosUsuario() {
  
    const id = (this.usuarios[(this.usuarios.length) - 1].id)+1
    const nome = this.form.controls['nome'].value
    const email = this.form.controls['email'].value
    const telefone = this.form.controls['telefone'].value
  
    const usuario:CriarUsuario = { 
      id:id,
      nome:nome, 
      email:email, 
      telefone:telefone 
    }
    console.log(usuario)



      this.salvarUsuarioService.salvarUsuario(usuario).subscribe({
        next:()=>{
          console.log('salvou');
          this.lerDadosUsuario()
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
            timer: 5000,
            title: 'Você foi Cadastrado'
          })
        },
        error:()=>{
          console.log('erro salvarUsuario');
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            icon: 'error',
            timer: 5000,
            title: 'Erro ao se Cadastrar'
          })
        }
      })

  }
  deleteDadosUsuario(idUsuario:number){
   Swal.fire()
      this.salvarUsuarioService.deleteUsuario(idUsuario).subscribe({
        
        next:()=>{
          console.log('deletou');
           console.log(this.usuarios);
           this.lerDadosUsuario()
           Swal.fire({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              icon: 'success',
              timer: 5000,
              title: 'Excluido com sucesso'
           })
        },
        error:()=>{
          console.log('erro delete');
          
        }
        
      })
   

  }
editarDadosUsuario(){
  const id = (this.usuarios[(this.usuarios.length) - 1].id)+1
    const nome = this.form.controls['nome'].value
    const email = this.form.controls['email'].value
    const telefone = this.form.controls['telefone'].value
  
    const usuario:CriarUsuario = { 
      id:id,
      nome:nome, 
      email:email, 
      telefone:telefone 
    }
    this.salvarUsuarioService.editarUsuario(usuario).subscribe({
      next:()=>{
        console.log('deu certo');
        this.lerDadosUsuario
      },
      error:()=>{
        console.log('erro editar');
        
      }
    })
   }


   EditarCliente1(){
    const id = this.usuarioId
    const nome = this.form.controls["nome"].value;
    const email = this.form.controls["email"].value;
    const telefone = this.form.controls["telefone"].value;

    const usuario: CriarUsuario = {id:id, nome:nome, email:email, telefone:telefone}

    this.salvarUsuarioService.editarUsuario(usuario).subscribe({
      next: () => {
      console.log("editou");
        
        this.lerDadosUsuario()
      },
      error: () => {
        console.log("erro");
        
      }
    })
    this.verificarEditar = false
    this.form.reset()
  }

  EditarCliente2(itemUsuario:CriarUsuario){
    this.usuarioId = itemUsuario.id
    this.form.controls["nome"].setValue(itemUsuario.nome)
    this.form.controls["email"].setValue(itemUsuario.email)
    this.form.controls["telefone"].setValue(itemUsuario.telefone)
    this.verificarEditar = true
         Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'info',
          timer: 6000,
          title: 'Você esta editando'
})
  }

}





//  name = new FormControl('');
// updateName(){
  //   this.name.setValue('Henrique')
  // }
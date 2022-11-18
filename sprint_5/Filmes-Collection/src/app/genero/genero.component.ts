import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarGenero } from '../models/salvar-usuarios.model';
import { SalvarUsuarioService } from '../services/salvar-usuario.service';
import { SalvarGeneroService } from '../services/salvar-genero.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  
  form!: FormGroup
  genero!: CriarGenero[]
  usuarioId!:number
  verificarEditar:boolean = false
  router!:Route
  constructor(
    private fb: FormBuilder,
    private salvarGeneroService: SalvarGeneroService


  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      genero: new FormControl('')
    })
    this.lerDadosGenero()
  }
  lerDadosGenero(){
    this.salvarGeneroService.lerGenero().subscribe({
     next: (genero:CriarGenero[]) => {
       this.genero = genero
       console.log(genero);
       
     },
     error: () => {
       console.log('erro lerUsuarios');

     }
   });
    
  }

  salvarDadosGenero() {
  
    const id = (this.genero[(this.genero.length) - 1].id)+1
    const genero = this.form.controls['genero'].value
    
  
    const generos:CriarGenero = { 
      id:id,
      genero:genero 
    }
    console.log(genero)



      this.salvarGeneroService.salvarGenero(generos).subscribe({
        next:()=>{
          
          console.log('salvou');
          this.lerDadosGenero()
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
   
      this.salvarGeneroService.deleteGenero(idUsuario).subscribe({
        
        next:()=>{
          console.log('deletou');
           console.log(this.genero);
           this.lerDadosGenero()
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

   EditarCliente1(){
    const id = this.usuarioId
    const genero = this.form.controls["genero"].value;

    const usuario: CriarGenero = {id:id,genero:genero}

    this.salvarGeneroService.editarGenero(usuario).subscribe({
      next: () => {
      console.log("editou");
        
        this.lerDadosGenero()
      },
      error: () => {
        console.log("erro");
        
      }
    })
    this.verificarEditar = false
    this.form.reset()
  }

  EditarCliente2(itemGenero:CriarGenero){
    this.lerDadosGenero
    this.usuarioId = itemGenero.id
    this.form.controls["genero"].setValue(itemGenero.genero)
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
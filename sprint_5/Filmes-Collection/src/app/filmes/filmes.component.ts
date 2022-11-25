import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarFilmes, CriarGenero } from '../models/salvar-usuarios.model';
import { SalvarFilmesService } from '../services/salvar-filmes.service';
import Swal from 'sweetalert2';
import { SalvarGeneroService } from '../services/salvar-genero.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  form!: FormGroup
  filmes!: CriarFilmes[]
  filmesId!: number
  verificarEditar: boolean = false
  genero!:CriarGenero[]
  constructor(
    private fb: FormBuilder,
    private salvarFilmesService: SalvarFilmesService,
    private salvarGeneroServer:SalvarGeneroService

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      filme:"",
      generoId:""
     
    })
    this.lerDadosFilmes()
    this.lerDadosGenero()
  }
  lerDadosFilmes() {
    this.salvarFilmesService.lerFilmes().subscribe({
      next: (filme: CriarFilmes[]) => {
        this.filmes = filme
        console.log(this.filmes);

      },
      error: () => {
        console.log('erro lerFilmes');

      }
    });
  }
  lerDadosGenero() {
    this.salvarGeneroServer.lerGenero().subscribe({
      next: (generos: CriarGenero[]) => {
        this.genero = generos
        console.log(this.genero);

      },
      error: () => {
        console.log('erro lerGenero');

      }
    });

  }
  salvarDadosFilmes() {

    const id = (this.filmes[(this.filmes.length) - 1].id) + 1
    const filmes = this.form.controls['filme'].value
    const genero = parseInt((this.form.controls["generoId"].value))


    const filme: CriarFilmes = {
      id: id,
      filme: filmes,
      generoId: genero
    }
    console.log(filmes)



    this.salvarFilmesService.salvarFilmes(filme).subscribe({
      next: () => {
        console.log('salvou');
        this.lerDadosFilmes()
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000,
          title: 'Você foi Cadastrado'
        })
      },
      error: () => {
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
  deleteDadosFilmes(idFilmes: number) {
    Swal.fire()
    this.salvarFilmesService.deleteFilmes(idFilmes).subscribe({

      next: () => {
        console.log('deletou');
        console.log(this.filmes);
        this.lerDadosFilmes()
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timer: 5000,
          title: 'Excluido com sucesso'
        })
      },
      error: () => {
        console.log('erro delete');

      }

    })


  }

  EditarCliente1() {
    const id = this.filmesId
    const filmes = this.form.controls["filme"].value;
    const genero = this.form.controls["generoId"].value;

    const filme: CriarFilmes = { id: id, filme: filmes,generoId:genero }

    this.salvarFilmesService.editarFilmes(filme).subscribe({
      next: () => {
        console.log("editou");

        this.lerDadosFilmes()
      },
      error: () => {
        console.log("erro");

      }
    })
    this.verificarEditar = false
    this.form.reset()
  }

  EditarCliente2(itemUsuario: CriarFilmes) {
    this.filmesId = itemUsuario.id
    this.form.controls["filme"].setValue(itemUsuario.filme)
    this.form.controls["generoId"].setValue(itemUsuario.generoId)
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
  


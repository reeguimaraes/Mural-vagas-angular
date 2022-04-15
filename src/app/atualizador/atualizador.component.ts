import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vaga } from '../models/Vagas.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atualizador',
  templateUrl: './atualizador.component.html',
  styleUrls: ['./atualizador.component.css']
})
export class AtualizadorComponent implements OnInit {

  vaga = {} as Vaga;

  vagas: Vaga[] | undefined;

  title = 'uc12';
 

  constructor(private vagasService: VagasService) {}
  
  ngOnInit() {
    this.getVagas();
  }

  
  saveVaga(form: NgForm) {
    if (this.vaga.id !== undefined) {
      this.vagasService.updateVaga(this.vaga).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.vagasService.saveVaga(this.vaga).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }


  getVagas() {
    this.vagasService.getVagas().subscribe((vagas: Vaga[]) => {
      this.vagas = vagas;
    });
  }


  deleteVaga(vaga: Vaga) {
    this.vagasService.deleteVaga(vaga).subscribe(() => {
      this.getVagas();
    });
  }

 
  editVaga(vaga: Vaga) {
    this.vaga = { ...vaga };
  }


  cleanForm(form: NgForm) {
    this.getVagas();
    form.resetForm();
    this.vaga = {} as Vaga;
  }

}
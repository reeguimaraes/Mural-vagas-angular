import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';
import { AtualizaVagasComponent } from '../atualiza-vagas/atualiza-vagas.component';
import { AtualizadorComponent } from '../atualizador/atualizador.component';

const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'painel', component: PainelVagasComponent},
  {path: 'atualiza-vagas', component: AtualizaVagasComponent},
  {path: 'atualizador', component: AtualizadorComponent}
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ListagemReservasComponent } from './components/listagem-reservas/listagem-reservas.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';

export const routes: Routes = [
  {path: '', component: CadastrosComponent},
  {path: 'listaReservas', component: ListagemReservasComponent}
];

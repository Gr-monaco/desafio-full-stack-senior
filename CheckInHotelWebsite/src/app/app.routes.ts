import { Routes } from '@angular/router';
import { ListagemReservasComponent } from './components/listagem-reservas/listagem-reservas.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { DetalhesReservaComponent } from './components/detalhes-reserva/detalhes-reserva.component';

export const routes: Routes = [
  {path: '', component: CadastrosComponent},
  {path: 'listaReservas', component: ListagemReservasComponent},
  {path: 'detalhesReserva', component: DetalhesReservaComponent}
];

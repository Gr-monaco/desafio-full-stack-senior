import { Pageable } from "./pageable.model";
import { ReservaCompletaModel, ReservaModel } from "./reserva.model";

export interface ReservaResponsePage{
  content: ReservaCompletaModel[];
  page: Pageable;
}
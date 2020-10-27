import { Atividade } from '../types/atividade';

export interface ICirandaCrawler {
  getAtividade(turma: number, mes : string, dia: number,) : any;
}
export enum Status {
  RECEIVED = "Recebido",
  APPROVED = "Aprovado",
  QUALIFIED = "Qualificado",
}

export class Candidato {
  public nome?: string | null = '';
  public codCandidato?: number | null = null;
  public status?: Status = Status.RECEIVED;

  public setNome(nome: string | null) {
    return this.nome = nome;
  }
}

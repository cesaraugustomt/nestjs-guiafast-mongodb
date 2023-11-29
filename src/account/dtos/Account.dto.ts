export class CreateAccountDto {
  readonly email: string;
  readonly password: string;
  readonly full_name?: string;
  readonly gender?: string;
  readonly biography?: string;
  readonly phone: string;
  readonly cpf?: string;
  readonly cnpj?: string;
}

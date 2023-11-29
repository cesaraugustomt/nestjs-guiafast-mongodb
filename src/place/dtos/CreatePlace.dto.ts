export class CreatePlaceDto {
  readonly name: string;
  readonly description: string;
  readonly images?: string[];
  readonly address: string;
  readonly business_status: string;
  readonly location: {
    type: IType;
    coordinates: [number, number];
  };
  readonly subtypes?: string[];
}

type IType =
  | 'Automotivo'
  | 'De negócios'
  | 'Cultura'
  | 'Educação'
  | 'Lazer e recreação'
  | 'Alimentos e bebidas'
  | 'Áreas geográficas'
  | 'Governo'
  | 'Saúde e bem-estar'
  | 'Hospedagem'
  | 'Lugares de adoração'
  | 'Serviços'
  | 'Compras'
  | 'Esportes'
  | 'Transporte'
  | 'tipo b';

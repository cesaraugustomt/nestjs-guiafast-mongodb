export type IType =
  | 'Automotivo'
  | 'De negócios'
  | 'Cultura'
  | 'Educação'
  | 'Finanças'
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

export interface UpdatePlaceDto {
  readonly business_status: string;
  readonly type: IType;
  readonly geometry: {
    readonly location: {
      type: string;
      coordinates: [number, number];
    };
    readonly viewport?: {
      northeast: [number, number];
      southwest: [number, number];
    };
  };
  readonly icon_uri?: string[];
  readonly name: string;
  readonly opening_hours: {
    open_now: boolean;
  };
  readonly description?: string;
  readonly photo?: string[];
  readonly google_id?: string;
  readonly scope?: string;
  readonly address: string;
  readonly subtypes?: string[];
}

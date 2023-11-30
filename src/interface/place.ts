import { Document } from 'mongoose';

export interface IPlace extends Document {
  name: string;
  description?: string;
  images: string[];
  address?: string;
  business_status?: string;
  location: {
    type: IType;
    coordinates: [number, number];
  };
  subtypes: string[];
}

export class CreatePlaceDto {
  readonly business_status: string;
  readonly geometry: {
    readonly location: {
      type: IType;
      coordinates: [number, number];
    };
    readonly viewport: {
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

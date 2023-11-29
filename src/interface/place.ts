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
  //TODO: adicionar createdAt e updatedAt
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

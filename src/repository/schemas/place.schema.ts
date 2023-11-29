import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema({
  timestamps: true,
})
export class Place {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  business_status: string;

  @Prop({ type: [String] })
  images?: string[];

  @Prop({
    type: {
      type: String, // Corrigindo o tipo para String
      enum: {
        values: [
          'Automotivo',
          'De negócios',
          'Cultura',
          'Educação',
          'Lazer e recreação',
          'Alimentos e bebidas',
          'Áreas geográficas',
          'Governo',
          'Saúde e bem-estar',
          'Hospedagem',
          'Lugares de adoração',
          'Serviços',
          'Compras',
          'Esportes',
          'Transporte',
          'tipo b',
        ],
        message: '{VALUE} não é um tipo válido',
      },
    },
    coordinates: {
      type: [Number],
    },
  })
  location: {
    type: string;
    coordinates: number[];
  };

  @Prop({ type: [String] })
  subtypes?: string[];
}

export const PlaceSchema = SchemaFactory.createForClass(Place);

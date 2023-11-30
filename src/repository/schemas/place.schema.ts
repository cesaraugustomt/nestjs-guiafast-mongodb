import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema({
  timestamps: true,
})
export class Place {
  @Prop({ type: String })
  business_status: string;

  @Prop({
    type: {
      type: String,
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

    location: {
      coordinates: {
        type: [Number],
      },
    },
    viewport: {
      northeast: {
        type: [Number],
      },
      southwest: {
        type: [Number],
      },
    },
  })
  geometry: {
    location: {
      type: string;
      coordinates: number[];
    };
    viewport?: {
      northeast: number[];
      southwest: number[];
    };
  };

  @Prop({ type: [String] })
  icon_uri?: string[];

  @Prop({ type: String, required: true })
  name: string;

  @Prop({
    type: {
      open_now: {
        type: Boolean,
      },
    },
  })
  opening_hours: {
    open_now: boolean;
  };

  @Prop({ type: [String] })
  photo?: string[];

  @Prop({ type: String })
  google_id?: string;

  @Prop({ type: String })
  scope?: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: [String] })
  subtypes?: string[];
}

export const PlaceSchema = SchemaFactory.createForClass(Place);

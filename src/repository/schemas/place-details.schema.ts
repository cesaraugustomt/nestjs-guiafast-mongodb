import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaceDetailsDocument = PlaceDetails & Document;

@Schema({
  timestamps: true,
})
export class PlaceDetails {
  @Prop({ type: String })
  business_status: string;

  @Prop({
    type: [
      {
        long_name: String,
        short_name: String,
        types: [String],
      },
    ],
  })
  address_components: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;

  @Prop({
    type: {
      open_now: {
        type: Boolean,
      },
      weekday_text: [String],
    },
  })
  current_opening_hours?: {
    open_now?: boolean;
    weekday_text?: [string];
  };

  @Prop({
    type: {
      location: {
        lat: Number,
        lng: Number,
      },
      viewport: {
        northeast: {
          lat: Number,
          lng: Number,
        },
        southwest: {
          lat: Number,
          lng: Number,
        },
      },
    },
  })
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };

  @Prop({ type: String })
  icon?: string;

  @Prop({ type: String })
  icon_mask_base_uri?: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: [String] })
  photo?: [string];

  @Prop({ type: String })
  google_id: string;

  @Prop({ type: [String] })
  subtypes: [string];

  @Prop({ type: String })
  formatted_address?: string;

  @Prop({ type: String })
  formatted_phone_number?: string;

  @Prop({ type: String })
  website?: string;

  @Prop({ type: Boolean })
  wheelchair_accessible_entrance?: boolean;

  @Prop({ type: Boolean })
  delivery?: boolean;

  @Prop({ type: Boolean })
  dine_in?: boolean;

  @Prop({ type: String })
  international_phone_number?: string;

  @Prop({ type: Boolean })
  serves_breakfast?: boolean;

  @Prop({ type: String })
  existence_time?: string; //quanto tempo existe esse estabelecimento

  @Prop({ type: String })
  instagram?: string;

  @Prop({ type: String })
  vicinity?: string;
}

export const PlaceDetailsSchema = SchemaFactory.createForClass(PlaceDetails);

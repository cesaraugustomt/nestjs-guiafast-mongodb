import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema({
  timestamps: true,
})
export class Account {
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop({ type: String, required: false })
  full_name?: string;
  @Prop({ type: String, required: false })
  gender?: string;
  @Prop({ type: String, required: false })
  biography?: string;
  @Prop({ type: String, required: true })
  phone: string;
  @Prop({ type: String, required: false })
  cpf?: string;
  @Prop({ type: String, required: false })
  cnpj?: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);

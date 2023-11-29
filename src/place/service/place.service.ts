import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Place } from 'src/repository/schemas/place.schema';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name) private placeModel: mongoose.Model<Place>,
  ) {}

  async findAll(): Promise<Place[]> {
    const places = await this.placeModel.find();
    return places;
  }

  async findById(id: string): Promise<Place> {
    const place = await this.placeModel.findById(id);

    if (!place) {
      throw new NotFoundException('Local não encontrado.');
    }

    return place;
  }

  async create(place: Place): Promise<Place> {
    const res = await this.placeModel.create(place);
    return res;
  }

  async updateById(id: string, place: Place): Promise<Place> {
    return await this.placeModel.findByIdAndUpdate(id, place, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Place> {
    return await this.placeModel.findByIdAndDelete(id);
  }
}

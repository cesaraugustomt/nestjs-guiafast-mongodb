import { Injectable, NotFoundException } from '@nestjs/common';
import { PlaceDetails } from 'src/repository/schemas/place-details.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class PlaceDetailsService {
  constructor(
    @InjectModel(PlaceDetails.name)
    private placeDetailsModel: mongoose.Model<PlaceDetails>,
  ) {}

  async findAll(): Promise<PlaceDetails[]> {
    const places = await this.placeDetailsModel.find();

    return places;
  }

  async findById(google_id: string): Promise<PlaceDetails> {
    const place = await this.placeDetailsModel.findById(google_id);

    if (!place) {
      throw new NotFoundException('Local não encontrado.');
    }

    return place;
  }

  async create(placeDetails: PlaceDetails): Promise<PlaceDetails> {
    const res = await this.placeDetailsModel.create(placeDetails);
    return res;
  }

  async updateById(
    id: string,
    placeDetails: PlaceDetails,
  ): Promise<PlaceDetails> {
    return await this.placeDetailsModel.findByIdAndUpdate(id, placeDetails, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<PlaceDetails> {
    return await this.placeDetailsModel.findByIdAndDelete(id);
  }

  async findDetailsByGoogleId(google_id: string): Promise<PlaceDetails | null> {
    return this.placeDetailsModel.findOne({ google_id }).exec();
  }
}

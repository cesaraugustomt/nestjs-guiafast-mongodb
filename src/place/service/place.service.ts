import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Place } from 'src/repository/schemas/place.schema';

import { Query } from 'express-serve-static-core';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name) private placeModel: mongoose.Model<Place>,
  ) {}

  async findAll(query: Query): Promise<Place[]> {
    const resPerPage = 4;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          subtypes: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const places = await this.placeModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
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

  //TODO: Adicionar $geoNear para mostrar distância até o local

  async findNearbyPlaces(
    latitude: number,
    longitude: number,
    query: Query,
  ): Promise<Place[]> {
    const resPerPage = 4;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          subtypes: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const locais = await this.placeModel
      .find({
        ...keyword,
        'geometry.location': {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [latitude, longitude],
            },
            //TODO: Transformar em enum ou em variável de ambiente
            $maxDistance: 10000,
          },
        },
      })
      .limit(resPerPage)
      .skip(skip)
      .exec();

    return locais;
  }
}

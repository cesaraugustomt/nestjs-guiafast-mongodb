import { CreatePlaceDto } from '../../place/dtos/CreatePlace.dto';

export const mockDataPlace: CreatePlaceDto[] = [
  {
    business_status: 'OPERATIONAL',
    geometry: {
      location: {
        type: 'Educação',
        coordinates: [-17.3172424, -53.21084219999999],
      },
      viewport: {
        northeast: [-17.3158998697085, -53.2094870697085],
        southwest: [-17.3185978302915, -53.2121850302915],
      },
    },
    icon_uri: [''],
    name: 'Test486',
    opening_hours: {
      open_now: true,
    },
    photo: [''],
    google_id: 'ChIJqSyoJ66afJMRQxnRGZxSHBE',
    scope: 'GUIAFAST',
    description: '',
    address: 'Avenida Araguaia, Alto Araguaia',
    subtypes: ['test1', 'test2'],
  },
  {
    business_status: 'OPERATIONAL',
    geometry: {
      location: {
        type: 'Cultura',
        coordinates: [-17.3172424, -53.21084219999999],
      },
      viewport: {
        northeast: [-17.3158998697085, -53.2094870697085],
        southwest: [-17.3185978302915, -53.2121850302915],
      },
    },
    icon_uri: [''],
    name: 'teste98754',
    opening_hours: {
      open_now: true,
    },
    photo: [''],
    google_id: 'ChIJqSyoJ66afJMRQxnRGZxSHBE',
    scope: 'GOOGLE',
    description: '',
    address: 'Avenida Araguaia, Alto Araguaia',
    subtypes: ['test1', 'test2'],
  },
];

import { CreatePlaceDto } from '../../../../place/dtos/CreatePlace.dto';

export const mockDataPlaceTipoB: CreatePlaceDto[] = [
  //localidade level 1
  {
    business_status: '',
    type: 'tipo b',
    geometry: {
      location: {
        type: 'Point',
        coordinates: [-17.3149634, -53.2153771],
      },
      viewport: {
        northeast: [-17.30935101849889, -53.21081322941892],
        southwest: [-17.32036564425306, -53.22018759808509],
      },
    },
    icon_uri: [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
    ],
    name: 'Centro',
    opening_hours: {
      open_now: false,
    },
    photo: [],
    google_id: 'ChIJVwblWLKafJMRuFhax-PGlN0',
    scope: 'GOOGLE',
    description: '',
    address: 'Centro',
    subtypes: ['sub_localidade_level_1', 'sub_localidade', 'political'],
  },
  {
    business_status: '',
    type: 'tipo b',
    geometry: {
      location: {
        type: 'Point',
        coordinates: [-17.3117429, -53.2219676],
      },
      viewport: {
        northeast: [-17.30731614589721, -53.21755316103128],
        southwest: [-17.31657474078193, -53.22970996220415],
      },
    },
    icon_uri: [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
    ],
    name: 'Praça do boiadeiro',
    opening_hours: {
      open_now: false,
    },
    photo: [],
    google_id: 'ChIJ53_TAUuFfJMRRCg25uHjm9M',
    scope: 'GOOGLE',
    description: '',
    address: 'Boiadeiro',
    subtypes: [
      'sub_localidade_level_1',
      'sub_localidade',
      'political',
      'praça',
    ],
  },
];

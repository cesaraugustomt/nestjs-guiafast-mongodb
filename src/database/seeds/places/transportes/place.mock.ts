import { CreatePlaceDto } from '../../../../place/dtos/CreatePlace.dto';

export const mockDataPlaceTransportes: CreatePlaceDto[] = [
  //aeroporto

  {
    business_status: 'OPERATIONAL',
    type: 'Transporte',
    geometry: {
      location: {
        type: 'Point',
        coordinates: [-17.321838, -53.192826],
      },
      viewport: {
        northeast: [-17.3208523197085, -53.1915211197085],
        southwest: [-17.3235502802915, -53.1942190802915],
      },
    },
    icon_uri: [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/aeroporto-71.png',
    ],
    name: 'Pista Santa Rita Do Araguaia',
    opening_hours: {
      open_now: false,
    },
    photo: [],
    google_id: 'ChIJlRywRg-bfJMRLgloM9qj_wA',
    scope: 'GOOGLE',
    description: '',
    address: 'Tv. Marino O, 97, Santa Rita do Araguaia',
    subtypes: ['aeroporto', 'point_of_interest', 'establishment'],
  },
  //ponto de taxi

  {
    business_status: 'OPERATIONAL',
    type: 'Transporte',
    geometry: {
      location: {
        type: 'Point',
        coordinates: [-17.3213977, -53.2240984],
      },
      viewport: {
        northeast: [-17.32006496970849, -53.2228159197085],
        southwest: [-17.3227629302915, -53.2255138802915],
      },
    },
    icon_uri: [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
    ],
    name: 'Disk Carro Táxi',
    opening_hours: {
      open_now: true,
    },
    photo: [],
    google_id: 'ChIJrYljLiWFfJMR1C2MH1fzC2U',
    scope: 'GOOGLE',
    description: '',
    address: 'Rua Onildo Taveira, número 22 - Atlântico, Alto Araguaia',
    subtypes: ['ponto_de_taxi', 'point_of_interest', 'establishment'],
  },
  //estação de transito

  {
    business_status: 'OPERATIONAL',
    type: 'Transporte',
    geometry: {
      location: {
        type: 'Point',
        coordinates: [-17.31551, -53.21545],
      },
      viewport: {
        northeast: [-17.3140423697085, -53.2139715697085],
        southwest: [-17.3167403302915, -53.2166695302915],
      },
    },
    icon_uri: [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
    ],
    name: 'Alto Araguaia',
    opening_hours: {
      open_now: false,
    },
    photo: [],
    google_id: 'ChIJ24j0ALOafJMRL73cUGxoRso',
    scope: 'GOOGLE',
    description: '',
    address: 'Brazil',
    subtypes: ['estação_de_transito', 'point_of_interest', 'establishment'],
  },
  {
    business_status: 'OPERATIONAL',
    type: 'Transporte',
    geometry: {
      location: {
        type: 'Point',
        coordinates: [-17.3215, -53.223848],
      },
      viewport: {
        northeast: [-17.3201370697085, -53.2225135697085],
        southwest: [-17.3228350302915, -53.2252115302915],
      },
    },
    icon_uri: [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
    ],
    name: 'Rodoviária de Alto Araguaia',
    opening_hours: {
      open_now: false,
    },
    photo: [],
    google_id: 'ChIJfYcXjFGFfJMR7Q-R1Fxg_5Q',
    scope: 'GOOGLE',
    description: '',
    address: 'Brazil',
    subtypes: ['estação_de_transito', 'point_of_interest', 'establishment'],
  },
  {
    business_status: 'OPERATIONAL',
    type: 'Transporte',
    geometry: {
      location: {
        type: 'Point',
        coordinates: [-17.33011, -53.20097999999999],
      },
      viewport: {
        northeast: [-17.3286752197085, -53.19951076970849],
        southwest: [-17.3313731802915, -53.20220873029149],
      },
    },
    icon_uri: [
      'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
    ],
    name: 'Terminal Rodoviário de Santa Rita do Araguaia',
    opening_hours: {
      open_now: false,
    },
    photo: [],
    google_id: 'ChIJwyQj9guQfJMRNi51HyuFuNA',
    scope: 'GOOGLE',
    description: '',
    address: 'Brazil',
    subtypes: ['estação_de_transito', 'point_of_interest', 'establishment'],
  },
];

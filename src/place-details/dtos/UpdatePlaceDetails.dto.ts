export interface UpdatePlaceDetailsDto {
  readonly businessStatus?: string;
  readonly addressComponents?: {
    longName: string;
    shortName: string;
    types: string[];
  }[];
  readonly currentOpeningHours?: {
    openNow: boolean;
    weekdayText: string[];
  };
  readonly geometry: {
    location: {
      lat: number;
      lng: number;
    };
    readonly viewport: {
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
  readonly name: string;
  readonly google_id: string;
  readonly formattedAddress?: string;
  readonly subtypes: string[];
  readonly icon?: string;
  readonly iconMaskBaseUri?: string;
  readonly photo?: string[];
  readonly formattedPhoneNumber?: string;
  readonly website?: string;
  readonly wheelchairAccessibleEntrance?: boolean;
  readonly delivery?: boolean;
  readonly dineIn?: boolean;
  readonly internationalPhoneNumber?: string;
  readonly servesBreakfast?: boolean;
  readonly existenceTime?: string;
  readonly instagram?: string;
  readonly vicinity?: string;
}

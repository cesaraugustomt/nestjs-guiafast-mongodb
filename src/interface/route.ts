export interface IRoute {
  id: string;
  name: string;
  source: IPlaceLocation;
  destination: IPlaceLocation;

  distance: number;
  duration: number;

  created_at: string;
  updated_at: string;
}

type IPlaceLocation = {
  name: string;
  location: Coord;
};

type Coord = {
  lat: number;
  lng: number;
};

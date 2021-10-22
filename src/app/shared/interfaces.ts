export interface IPeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: IPeople[];
}
export interface IPeople {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface IMoney {
  cc: string;
  exchangedate: string;
  r030: number;
  rate: number;
  txt: string;
}

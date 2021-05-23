export interface AddFootbollerInput {
  firstName: string;
  lastName: string;
  age: number;
  team: string;
  number: string;
  height: number;
  rating: number;
}

export interface Footboller extends AddFootbollerInput {
  id: string;
}

export interface DeleteFootbollerInput {
  id: string;
}

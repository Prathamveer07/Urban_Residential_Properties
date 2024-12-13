export interface Property {
  id?: string;
  name: string;
  location: string;
  price: any;
  photo: File;
}

export interface PropertyResponse {
  id: string;
  name: string;
  location: string;
  price: any;
  photo: string; // URL returned from backend
}

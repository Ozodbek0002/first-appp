export interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface User {
  id: string;
  name: string;
  description: string;
  phone: string;
  address: string;
  dateOfBirth: Date;
  dateOfRegister: Date;
  specialization: string;
  createdAt: Date;
}
export interface UserRequest {
  name: string;
  description: string;
  phone: string;
  address: string;
  dateOfBirth: Date;
  dateOfRegister: Date;
  specialization: string;
}

export interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface User {
  id: number;
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
  dateOfBirth: Date | null;
  dateOfRegister: Date | null;
  specialization: string;
}

export interface UserFormData {
  name: string | null;
  description: string | null;
  phone: string | null;
  address: string | null;
  dateOfBirth: Date | null;
  dateOfRegister: Date | null;
  specialization: string | null;
}

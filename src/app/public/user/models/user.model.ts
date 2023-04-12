export interface UserInterface {
  user_id: string;
  password: string;
  email: string;
  username: string;
  surname1: string;
  surname2?: string;
  birthdate: Date;
  img?: string;
  funds?: number;
}
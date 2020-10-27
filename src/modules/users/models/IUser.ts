import { ObjectID } from 'mongodb';

export default interface IUser {
  id: ObjectID | string;

  name: string;

  email: string;

  password: string;

  avatar: string;

  created_at: Date;

  updated_at: Date;
}

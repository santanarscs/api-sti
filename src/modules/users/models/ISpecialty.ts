import { ObjectID } from 'mongodb';

export default interface ISpecialty {
  id: ObjectID;

  name: string;

  description: string;

  created_at: Date;

  updated_at: Date;
}

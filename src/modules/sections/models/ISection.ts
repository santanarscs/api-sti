import { ObjectID } from 'mongodb';

export default interface ISection {
  id: ObjectID | string;

  name: string;

  description: string;

  created_at: Date;

  updated_at: Date;
}

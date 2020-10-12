import { ObjectID } from 'mongodb';

export default interface IEquipament {
  id: ObjectID;

  description: string;

  bpm: string;

  created_at: Date;

  updated_at: Date;
}

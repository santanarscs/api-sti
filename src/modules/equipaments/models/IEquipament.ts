import { ObjectID } from 'mongodb';

export default interface IEquipament {
  id: ObjectID | string;

  description: string;

  bpm: string;

  service_tag: string;

  created_at: Date;

  updated_at: Date;
}

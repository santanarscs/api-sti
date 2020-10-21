export default interface IOrder {
  id: string;

  description: string;

  user_id: string;

  type: string;

  status: string;

  created_at: Date;

  updated_at: Date;
}

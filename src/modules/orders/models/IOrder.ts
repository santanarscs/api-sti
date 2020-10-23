export default interface IOrder {
  id: string;

  description: string;

  user: string;

  type: string;

  status: string;

  solver_id: string;

  resolution: string;

  resolution_date: Date;

  created_at: Date;

  updated_at: Date;
}

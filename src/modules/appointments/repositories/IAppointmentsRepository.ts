import ICreateAppointment from '../dtos/ICreateAppointment';
import IAppointment from '../models/IAppointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointment): Promise<IAppointment>;
  findByDate(data: { date: Date }): Promise<IAppointment | undefined>;
  findAllInMonthFromProvider(data: {
    month: number;
    year: number;
  }): Promise<IAppointment[]>;
  findAllInDayFromProvider(data: {
    day: number;
    month: number;
    year: number;
  }): Promise<IAppointment[]>;
}

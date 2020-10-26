import { injectable, inject } from 'tsyringe';
import ILdapProvider from '../../../container/providers/LdapProvider/models/ILdapProvider';

@injectable()
export default class ListAdUsersService {
  constructor(
    @inject('LdapProvider')
    private ldapProvider: ILdapProvider,
  ) {}

  public async execute(): Promise<any> {
    const user = await this.ldapProvider.listUsers();
    return user;
  }
}

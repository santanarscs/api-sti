import LDAPJSLdapProvider from '../implementations/LDAPJSLdapProvider';

export default class FakeLdapProvider implements LDAPJSLdapProvider {
  private client: string;

  constructor() {
    this.client = '';
  }

  async listUsers(): Promise<any> {
    return [
      { description: 'Raphael Santana Correia Silva 2S SIN' },
      { description: 'Davidson de Góes Batista Pereira 3S SIN' },
    ];
  }
}

import ldap, { Client, SearchOptions } from 'ldapjs';
import ILdapProvider from '../models/ILdapProvider';

import ldapConfig from '../../../../config/ldap';

export default class LDAPJSLdapProvider implements ILdapProvider {
  private client: Client;

  constructor() {
    const { url } = ldapConfig;
    this.client = ldap.createClient({ url });
  }

  public async listUsers(): Promise<any> {
    const { username, password } = ldapConfig;

    return new Promise((resolve, reject) => {
      const client = ldap.createClient({
        url: process.env.LDAP_URL,
      });
      const items = [];
      client.bind(username, password, function (err) {
        if (err) {
          console.log(`Error in new connnection${err}`);
        } else {
          console.log('Success!');

          const opts: SearchOptions = {
            filter: '(objectClass=person)',
            scope: 'sub',
            attributes: ['description'],
          };

          client.search('cn=Users,dc=direns1,dc=intraer', opts, function (
            err,
            res,
          ) {
            if (err) {
              console.log(`Error in search ${err}`);
            } else {
              res.on('searchEntry', function (entry) {
                items.push(entry.object);
                // console.log(`entry: ${JSON.stringify(entry.object)}`);
              });
              res.on('searchReference', function (referral) {
                console.log(`referral: ${referral.uris.join()}`);
              });
              res.on('error------', function (err) {
                console.error(`error: ${err.message}`);
              });
              res.on('end', function (result) {
                // console.log(`status: ${result.status}`);
                resolve(items);
              });
            }
          });
        }
      });
    });
  }
}

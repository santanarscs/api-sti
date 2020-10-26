import { container } from 'tsyringe';

import ILdapProvider from './models/ILdapProvider';
import LDAPJSLdapProvider from './implementations/LDAPJSLdapProvider';

container.registerSingleton<ILdapProvider>('LdapProvider', LDAPJSLdapProvider);

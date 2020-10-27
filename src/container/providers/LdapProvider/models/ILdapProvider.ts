export default interface ILdapProvider {
  listUsers(): Promise<any>;
}

import {Address} from './address';
import {ContactMedium} from './contactMedium';

export class User {
  id: number;
  name: string;
  address: Address;
  contactList: ContactMedium[];
}

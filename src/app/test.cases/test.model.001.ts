import {User} from '../model/user';
import {Address} from '../model/address';
import {ContactMedium} from '../model/contactMedium';

export class TestModel001 {

  static get testModel(): User {
    const user: User = new User();
    user.id = 1;
    user.name = 'Test Model 001';

    const address: Address = new Address();
    address.streetNumber = 123;
    address.apartmentName = 'Test Apartment 001';
    address.city = 'Test City';

    const contact: ContactMedium = new ContactMedium();
    contact.data = '687512834';
    contact.contactType = 'GSM';

    user.address = address;
    user.contactList = [].concat(contact);
    return user;
  }
}

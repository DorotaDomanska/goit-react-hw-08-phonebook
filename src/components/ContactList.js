import { ContactListItem } from './ContactListItem';
import css from '../Phonebook.module.css';

export const ContactList = () => {
  return (
    <div className={css.contacts}>
      <ContactListItem />
    </div>
  );
};

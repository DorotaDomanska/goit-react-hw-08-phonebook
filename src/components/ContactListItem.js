import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import css from '../Phonebook.module.css';

export const ContactListItem = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = evt => {
    const contactId = evt.target.id;
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactListItem}>
          {name}: {number}
          <button id={id} className={css.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

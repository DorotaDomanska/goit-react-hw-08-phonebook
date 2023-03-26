import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import css from '../Phonebook.module.css';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook}>
      <h1 className={css.header}>Phonebook</h1>
      <div className={css.boxes}>
        <div className={css.contactFormBox}>
          <ContactForm />
        </div>
        <div className={css.contactsBox}>
          {isLoading && !error && <p>Request in progress...</p>}
          {!isLoading && !error && (
            <>
              <Filter />
              <ContactList />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

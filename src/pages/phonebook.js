import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import css from '../components/Phonebook.module.css';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        padding: '0px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.header}>Contacts</h2>
      {isLoading && !error && <p>Request in progress...</p>}
      {!isLoading && !error && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

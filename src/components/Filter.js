import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import css from '../Phonebook.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const text = evt.target.value;

    dispatch(filterContacts(text));
  };

  return (
    <div>
      <label className={css.label}>
        Find contact by name
        <input
          className={css.input}
          type="text"
          name="filter"
          onInput={handleInputChange}
        ></input>
      </label>
    </div>
  );
};

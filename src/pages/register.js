import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import css from '../Phonebook.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.mainPage}>
      <div className={css.boxSignIn}>
        <form
          className={css.formSignIn}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className={css.label}>
            Username
            <input className={css.input} type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <input className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input className={css.input} type="password" name="password" />
          </label>
          <button className={css.buttonForm} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

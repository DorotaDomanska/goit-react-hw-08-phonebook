import { useDispatch } from 'react-redux';
import { signIn } from '../redux/auth/operations';
import css from '../Phonebook.module.css';

export const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      signIn({
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
            Email
            <input className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input className={css.input} type="password" name="password" />
          </label>
          <button className={css.buttonForm} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

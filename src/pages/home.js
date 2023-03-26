import css from '../Phonebook.module.css';

export const Home = () => {
  return (
    <div className={css.mainPage}>
      <div className={css.boxHome}>
        <h1 className={css.header}>Welcome to our app!</h1>
        <p>Please sign in or sign up to make your contact list</p>
      </div>
    </div>
  );
};

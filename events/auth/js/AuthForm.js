'use strict';

function AuthForm(props) {
  const { onAuth } = props;

  let name = '';
  let email = '';
  let password = '';
  const changeName = (event) => {
    name = event.currentTarget.value;
  };
  const changeEmail = (event) => {
    const emailEx = /\w|@|.|-/;

    if (event.currentTarget.value.search(emailEx) !== -1 || event.currentTarget.value === '') {
      email = event.currentTarget.value;
    } else {
      event.currentTarget.value = email;
    }
  };
  const changePassword = (event) => {
    const passwordEx = /\w/;

    if (event.currentTarget.value.search(passwordEx) !== -1 || event.currentTarget.value === '') {
      password = event.currentTarget.value;
    } else {
      event.currentTarget.value = password;
    }
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (onAuth && typeof onAuth === 'function') {
      onAuth({
        name,
        email,
        password
      });
    }
  };

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={submitForm}>
      <div className="Input">
        <input required type="text" placeholder="Имя" onChange={changeName} />
        <label></label>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" onChange={changeEmail} />
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль" onChange={changePassword} />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}

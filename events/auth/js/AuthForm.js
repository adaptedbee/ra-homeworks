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
    const notEmailEx = /[^a-zA-Z0-9|@|.|-|_]/g;

    email = event.currentTarget.value.replace(notEmailEx, '');
    event.currentTarget.value = email;
  };
  const changePassword = (event) => {
    const notPasswordEx = /[^a-zA-Z0-9|_]/g;

    password = event.currentTarget.value.replace(notPasswordEx, '');
    event.currentTarget.value = password;
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

'use strict';

function AuthForm(props) {
  const { onAuth } = props;
  let form;

  const onEmailChange = (event) => {
    const notEmailEx = /[^\w@.-_]/gi;

    let email = event.currentTarget.value.replace(notEmailEx, '');
    event.currentTarget.value = email;
  };
  const onPasswordChange = (event) => {
    const notPasswordEx = /[^\w_]/gi;

    let password = event.currentTarget.value.replace(notPasswordEx, '');
    event.currentTarget.value = password;
  };
  const onFormSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = form;
    if (onAuth && typeof onAuth === 'function') {
      onAuth({
        name: name.value,
        email: email.value,
        password: password.value
      });
    }
  };

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onFormSubmit}
      ref={modalForm => form = modalForm}>
      <div className="Input">
        <input required type="text" name="name" placeholder="Имя" />
        <label></label>
      </div>
      <div className="Input">
        <input type="email" name="email" placeholder="Электронная почта" onChange={onEmailChange} />
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" name="password" placeholder="Пароль" onChange={onPasswordChange} />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}

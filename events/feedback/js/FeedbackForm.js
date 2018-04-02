'use strict';

function FeedbackForm(props) {
  const { data, onSubmit } = props;

  const setDefaultValues = (element) => {
    const salutationField = element.querySelector(`[name="salutation"][value="${data.salutation}"]`);
    salutationField.defaultChecked = true;

    const snackFields = element.querySelectorAll('[name="snacks"]');
    snackFields.forEach((field) => {
      if (data.snacks.indexOf(field.value) !== -1) {
        field.defaultChecked = true;
      }
    })
  }

  const submitForm = (event) => {
    let updatedData = {};

    const salutationField = event.target.querySelector(`[name="salutation"]:checked`);
    updatedData.salutation = salutationField.value;
    const nameField = event.target.querySelector('#name');
    updatedData.name = nameField.value;
    const emailField = event.target.querySelector('#email');
    updatedData.email = emailField.value;
    const subjectField = event.target.querySelector('#subject');
    updatedData.subject = subjectField.value;
    const messageField = event.target.querySelector('#message');
    updatedData.message = messageField.value;
    const snacksFields = event.target.querySelectorAll('[name="snacks"]:checked');
    updatedData.snacks = [];
    snacksFields.forEach((field) => {
      updatedData.snacks.push(field.value);
    });

    event.preventDefault();
    onSubmit(JSON.stringify(updatedData));
  };

  return (
    <form className="content__form contact-form" 
      ref={setDefaultValues} onSubmit={submitForm}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
        <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} />
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} />
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message}></textarea>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  );
}

'use strict';

function FeedbackForm(props) {
  const { data, onSubmit } = props;

  const setDefaultSalutation = (element) => {
    element.defaultChecked = element.value === data.salutation;
  };
  const getSalutation = (event) => {
    data.salutation = event.currentTarget.value;
  };
  const getName = (event) => {
    data.name = event.currentTarget.value;
  };
  const getEmail = (event) => {
    data.email = event.currentTarget.value;
  };
  const getSubject = (event) => {
    data.subject = event.currentTarget.value;
  };
  const getMessage = (event) => {
    data.message = event.currentTarget.value;
  };
  const setDefaultSnacks = (element) => {
    element.defaultChecked = data.snacks.indexOf(element.value) !== -1;
  };
  const getSnacks = (event) => {
    let newSnack = event.currentTarget;
    let newSnackIndex = data.snacks.indexOf(newSnack.value);

    if (newSnack.checked &&  newSnackIndex === -1) {
      data.snacks.push(event.currentTarget.value);
    }
    if (!newSnack.checked && newSnackIndex !== -1) {
      data.snacks.splice(newSnackIndex, 1);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    onSubmit(JSON.stringify(data));
  };

  return (
    <form className="content__form contact-form" onSubmit={submitForm}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
        <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер"
          onChange={getSalutation} 
          ref={setDefaultSalutation}
        />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис"
          onChange={getSalutation} 
          ref={setDefaultSalutation}
        />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис"
          onChange={getSalutation} 
          ref={setDefaultSalutation}
        />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} onChange={getName} />
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} onChange={getEmail} />
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject} onChange={getSubject} >
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message} onChange={getMessage}></textarea>
      </div>
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" 
          onChange={getSnacks} 
          ref={setDefaultSnacks}
        />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" 
          onChange={getSnacks} 
          ref={setDefaultSnacks}
        />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  );
}

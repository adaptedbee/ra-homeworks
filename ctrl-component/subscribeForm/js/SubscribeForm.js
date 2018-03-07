class SubscribeForm extends React.Component {
    constructor() {
        super();

        this.state = {
            isFormValid: true,
            email: ''
        };
    }

    getFormClassName = () => {
        if (this.state.isFormValid) {
            return 'is-valid';
        } else {
            return 'is-error'
        };
    };

    handleEmailChange = (event) => {
        if (event.currentTarget.validity.valid) {
            this.setState({
                isFormValid: true
            });
        } else {
            this.setState({
                isFormValid: false
            });
        }
    };


    render() {
        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${this.getFormClassName()}`}>
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">Email</label>
                        <input type="email" id="input-email" placeholder="Email" className="form-control" onChange={this.handleEmailChange} />
                        <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                        <button type="submit" className="form-next">
                            <i className="material-icons">keyboard_arrow_right</i>
                        </button>
                    </div>
                </form>
            </div>    
        );
    }
};
import React from "react";

import FormInput from "../FormInput/FormInput.component";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.styles.sass";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return(
      <div className="sign-up">
        <h2 className="sign-up__title">У меня еще нет аккаунта</h2>
        <span className="sign-up__subtitle">Зарегистрируйтесь, используя свой email адрес и пароль</span>

        <form className="sign-up__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Ваше имя"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Ваш пароль"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Подтвердите пароль"
            required
          />
          <ButtonPrimary type="submit">ЗАРЕГИСТРИРОВАТСЬЯ</ButtonPrimary>
        </form>
      </div>
    )
  }
}

export default SignUp;
import React from "react";

import FormInput from "../FormInput/FormInput.component";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.sytles.sass";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: "", password: "" })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">У меня уже есть аккаунт</h2>
        <span className="sign-in__subtitle">Войдите, используя свой email адрес и пароль</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput 
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className="sign-in__buttons">
            <ButtonPrimary type="submit">Войти</ButtonPrimary>
            <ButtonPrimary onClick={signInWithGoogle} isGoogleSignIn>Войти через Google</ButtonPrimary>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
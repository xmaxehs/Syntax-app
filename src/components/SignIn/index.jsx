import React, { useState } from "react";
import {
  BackBtn,
  BackIcon,
  ErrorElem,
  InputForm,
  LabelForm,
  LoginBtn,
  LoginForm,
  RegLink,
  SignInBox,
  SignInContainer,
  SignInTitle,
} from "./SignInElements";
import Joi from "joi";

const SignInForm = () => {
  const [state, setState] = useState({
    account: { email: "", password: "" },
    errors: {},
  });

  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
      .label("Email"),
    password: Joi.string().required().min(8).max(16).label("Password"),
  });

  const validate = () => {
    const result = schema.validate(state.account, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (const item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setState({ ...state, errors: errors || {} });
    if (errors) return;
    alert("Submitted");
  };

  const validateProperty = ({ id, value }) => {
    const schemaObj = {};
    for (const item of schema._ids._byKey.entries()) {
      schemaObj[item[1].id] = item[1].schema;
    }
    const obj = { [id]: value };
    const subSchema = Joi.object({ [id]: schemaObj[id] });
    const { error } = subSchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      errors[input.id] = errorMessage;
    } else {
      delete errors[input.id];
    }

    const account = { ...state.account };
    account[input.id] = input.value;
    setState({ ...state, account, errors });
  };

  return (
    <SignInContainer>
      <BackBtn to="/">
        <BackIcon />
      </BackBtn>
      <SignInBox>
        <SignInTitle>Sign in to your account</SignInTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LabelForm>Email</LabelForm>
          <InputForm
            id="email"
            type="text"
            value={state.account.email}
            onChange={handleChange}
          />
          {state.errors.email && <ErrorElem>{state.errors.email}</ErrorElem>}
          <LabelForm>Password</LabelForm>
          <InputForm
            id="password"
            type="password"
            value={state.account.password}
            onChange={handleChange}
          />
          {state.errors.password && (
            <ErrorElem>{state.errors.password}</ErrorElem>
          )}
          <LoginBtn disabled={validate()} type="submit">
            continue
          </LoginBtn>
        </LoginForm>
        <RegLink>Create an account</RegLink>
      </SignInBox>
    </SignInContainer>
  );
};

export default SignInForm;

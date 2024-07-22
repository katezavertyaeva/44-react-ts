import { useFormik } from 'formik';
import * as Yup from 'yup'

import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormValues, LOGIN_FORM_NAME } from './types';

function LoginForm() {

  //Создание объекта валидации с помощью Yup
  const shema = Yup.object().shape({
    [LOGIN_FORM_NAME.EMAIL]: Yup.string()
      .required('Field email required')
      .email('Field type email')
      .min(4, 'Min 4 symbols')
      .max(10, 'Max 10 symbols'),
    [LOGIN_FORM_NAME.PASSWORD]: Yup.number().required('Field password required').typeError('Password must be number')
  })

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAME.EMAIL]: '',
      [LOGIN_FORM_NAME.PASSWORD]: ''
    } as LoginFormValues,
    //Привязка Yup и Formik
    validationSchema: shema,
    onSubmit: (values: LoginFormValues) => {
      console.table(values)
    }
  })

  console.log(formik)

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login Form</LoginFormTitle>
      <InputsContainer>
        <Input
          id="email"
          name={LOGIN_FORM_NAME.EMAIL}
          label="Email*"
          type="email"
          placeholder="Enter your email"
          value={formik.values[LOGIN_FORM_NAME.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAME.EMAIL]} //formik.errors.userEmail
        />
        <Input
          id="password"
          name={LOGIN_FORM_NAME.PASSWORD}
          label="Password*"
          // type="password"
          placeholder="Enter your password"
          value={formik.values[LOGIN_FORM_NAME.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAME.PASSWORD]}//formik.errors.userPassword
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;

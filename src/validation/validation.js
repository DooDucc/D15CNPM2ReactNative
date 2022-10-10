import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(10, 'Mật khẩu quá ngắn!')
    .required('Vui lòng nhập trường này'),
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Vui lòng nhập trường này'),
});

const SignupSchema = Yup.object().shape({
  cfPassword: Yup.string()
    .min(10, 'Mật khẩu quá ngắn!')
    .required('Vui lòng nhập trường này'),
  password: Yup.string()
    .min(10, 'Mật khẩu quá ngắn!')
    .required('Vui lòng nhập trường này'),
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Vui lòng nhập trường này'),
});

export {SignupSchema, SigninSchema};

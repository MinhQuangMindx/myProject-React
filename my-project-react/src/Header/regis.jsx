import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const initialValues = {
    fullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Vui lòng nhập họ tên"),
    dateOfBirth: Yup.date().required("Vui lòng nhập ngày sinh"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ")
      .required("Vui lòng nhập số điện thoại"),
    password: Yup.string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
      .required("Vui lòng nhập lại mật khẩu"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    localStorage.setItem("userInfo", JSON.stringify(values));
    alert("Đăng ký thành công!");
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Tạo tài khoản</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="fullName">Họ và tên:</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" />

            <label htmlFor="dateOfBirth">Ngày sinh:</label>
            <Field type="date" id="dateOfBirth" name="dateOfBirth" />
            <ErrorMessage name="dateOfBirth" />

            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />

            <label htmlFor="phoneNumber">Số điện thoại:</label>
            <Field type="text" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" />

            <label htmlFor="password">Mật khẩu:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />

            <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" />

            <button type="submit" disabled={isSubmitting}>
              Đăng ký
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Tên người dùng phải có ít nhất 2 ký tự")
    .max(50, "Tên người dùng không được quá 50 ký tự")
    .required("Vui lòng nhập tên người dùng"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
    .required("Vui lòng nhập lại mật khẩu"),
});

function SignupForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Tên người dùng</label>
      <input name="username" ref={register} />
      {errors.username && <p>{errors.username.message}</p>}

      <label htmlFor="email">Email</label>
      <input name="email" ref={register} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">Mật khẩu</label>
      <input name="password" type="password" ref={register} />
      {errors.password && <p>{errors.password.message}</p>}

      <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
      <input name="confirmPassword" type="password" ref={register} />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <button type="submit">Đăng ký</button>
    </form>
  );
}

// import React from 'react';

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

      <label htmlFor="phone">Số điện thoại</label>
      <input name="phone" ref={register} />
      {errors.phone && <p>{errors.phone.message}</p>}

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

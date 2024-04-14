import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const HomeScreen = () => {
  const login = useLogin();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    roomId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const logined = await login(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary-dark w-full h-[100vh]">
      <h1 className="text-primary-red font-killbill text-5xl">
        Пожалуйста войдите в аккаунт
      </h1>
      <p className="text-primary-light font-neoregular text-center w-[30%] mt-5">
        Чтобы пользоваться видео-чатом, вы должны еще раз войти в свой аккаунт и
        указать номер комнаты в которую вы заходили{" "}
      </p>
      <form
        className="w-[40%] flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-1/2 h-14 text-primary-red border-2 bg-primary-dark placeholder:text-primary-light font-neoregular border-primary-red p-2 mt-8"
          placeholder="Номер вашей комнаты"
          name="roomId"
          type="text"
          value={formData.roomId}
          onChange={handleInputChange}
          required
        />
        <input
          className="w-1/2 h-14 text-primary-red border-2 bg-primary-dark placeholder:text-primary-light font-neoregular border-primary-red p-2 mt-4"
          placeholder="Введите вашу почту"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          className="w-1/2 h-14 text-primary-red border-2 bg-primary-dark placeholder:text-primary-light font-neoregular border-primary-red p-2 mt-4"
          placeholder="Введите ваш пароль"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button
          className="w-1/2  h-14 bg-primary-red  text-primary-light font-neoregular mt-8"
          type="submit"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/cookie";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data) {
    const { email, password } = data;
    setCookie("email", email, 7);
    setCookie("password", password, 7);
    reset();
    navigate("/home");
  }

  return (
    <form
      className="border-2 m-4 p-4 rounded-xl w-2/4 h-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl text-center mb-2">Login form </h2>
        <div className="mb-2">
          <label className="block" htmlFor="email">
            Email:
          </label>
          <input className="border rounded" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="mb-2">
          <label className="block" htmlFor="password">
            Password:
          </label>
          <input
            className="border rounded"
            type="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button
          className="border rounded bg-blue-900 text-white p-2"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

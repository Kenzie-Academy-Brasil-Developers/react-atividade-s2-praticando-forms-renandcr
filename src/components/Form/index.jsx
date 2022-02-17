import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./styles.css";

const Form = ({ setData, data, Person }) => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .max(18, "Limite máximo de caracteres é igual a 18")
      .required("Campo obrigatório"),
    lastName: yup
      .string()
      .max(18, "Limite máximo de caracteres é igual a 18")
      .required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    city: yup.string().required("Campo Obrigatório"),
    age: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), "Senhas não conferem"])
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (dados) => {
    delete dados.passwordConfirm;
    setData([...data, dados]);
  };

  return (
    <section className="form-section">
      <h3>Cadastre seus dados aqui</h3>
      <form className="form-form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("name")} />
        <p>*{errors.name?.message}</p>
        <input placeholder="Sobrenome" {...register("lastName")} />
        <p>*{errors.lastName?.message}</p>
        <input placeholder="Email" {...register("email")} />
        <p>*{errors.email?.message}</p>
        <input placeholder="Idade" {...register("age")} />
        <p>*{errors.age?.message}</p>
        <input placeholder="Cidade" {...register("city")} />
        <p>*{errors.city?.message}</p>
        <input type="password" placeholder="Senha" {...register("password")} />
        <p>*{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirmar senha"
          {...register("passwordConfirm")}
        />
        <p>*{errors.passwordConfirm?.message}</p>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
export { Form };

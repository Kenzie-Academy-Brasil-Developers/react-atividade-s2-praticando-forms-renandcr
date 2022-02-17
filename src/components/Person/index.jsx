import "./styles.css";

const Person = ({ name, lastname, email, age, city }) => {
  return (
    <>
      <li>Nome: {name}</li>
      <li>Sobrenome: {lastname}</li>
      <li>E-mail: {email}</li>
      <li>Idade: {age}</li>
      <li>Cidade: {city}</li>
    </>
  );
};
export { Person };

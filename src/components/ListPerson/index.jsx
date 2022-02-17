import { Person } from "../Person";

const ListPerson = ({ data, removeEverything }) => {
  return (
    <section className="person-section">
      <button className="person-button" onClick={removeEverything}>
        Voltar
      </button>
      {data.length > 0 &&
        data.map((current, index) => (
          <ul className="person-ul" key={index}>
            <Person
              name={current.name}
              lastname={current.lastName}
              email={current.email}
              age={current.age}
              city={current.city}
            />
          </ul>
        ))}
    </section>
  );
};
export { ListPerson };

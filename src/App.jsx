import Container from "./components/Container";
import InputSearch from "./components/InputSearch";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import usePeople from "./hooks/usePeople";
import { useEffect } from "react";

const App = () => {
  const { fetchPeople, savePeople, people, loading, error } = usePeople();

  const handleSubmit = (query) => fetchPeople(query);
  const handleFollowPerson = (account) => {
    const newPeople = [...people];
    const position = people.findIndex((person) => person.account === account);
    newPeople[position].follow = !newPeople[position].follow;
    savePeople(newPeople);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <Container>
      <Header title="Search People" />
      <InputSearch onSubmit={handleSubmit} disabled={loading} />
      {loading && <Spinner />}
      {!loading && !error && (
        <Cards people={people} setFollow={handleFollowPerson} />
      )}
      {!loading && error && (
        <h2 style={{ color: "#ffffff", width: "100%", textWrap: "wrap" }}>
          Ops! estamos experimentando problemas de conexión, vuelve a intentarlo
          pasados unos minutos...
        </h2>
      )}
    </Container>
  );
};

export default App;

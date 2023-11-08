import PropTypes from "prop-types";
import Card from "./Card";
import "./less/Cards.less";

const Cards = ({ people, setFollow}) => (
  <div className="knowler-people-cards">
    {people.map((person) => (
      <Card
        key={person.id}
        picture={person.picture}
        name={person.name}
        department={person.department}
        employeeNumber={person.employeeNumber}
        jobTitle={person.jobTitle}
        location={person.location}
        email={person.email}
        mobile={person.mobile}
        pageDetailUrl={person.pageDetailUrl}
        account={person.account}
        follow={person.follow}
        setFollow={setFollow}
      />
    ))}
  </div>
);

Cards.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  setFollow: PropTypes.func,
};

export default Cards;

import { BiMapPin } from "react-icons/bi";
import { BsEnvelope, BsChatText, BsPersonAdd } from "react-icons/bs";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import "./less/Card.less";
import usePeople from "../hooks/usePeople";

const Card = ({
  picture,
  name,
  department,
  employeeNumber,
  jobTitle,
  location,
  email,
  mobile,
  pageDetailUrl,
  account,
  follow,
  setFollow,
}) => {
  const { followPerson, loading, error } = usePeople();

  const handleFollowClick = async () => {
    await followPerson(account);
    if (!error) {
      setFollow(account);
    }
  };
  return (
    <div className="knowler-people-card">
      <div className="knowler-people-card__content">
        <div className="knowler-people-card__image">
          <img src={picture} alt="" />
        </div>

        <div className="knowler-people-card__title">
          <div className="knowler-people-card__title_main">{name}</div>
          <div className="knowler-people-card__title_secondary">
            {department}
          </div>
        </div>
        <div className="knowler-people-card__description">
          {jobTitle && <span>{jobTitle}</span>}
          {employeeNumber && <span>Nº Emp: {employeeNumber}</span>}
          {location && (
            <span className="knowler-people-card__description_location">
              <BiMapPin /> {location}
            </span>
          )}
        </div>
      </div>
      <div className="knowler-people-card__footer">
        {email && (
          <div
            className="knowler-people-card__footer_mailto"
            target="_blank"
            rel="noreferrer"
          >
            <a href={`mailto:${email}`}>
              <BsEnvelope />
            </a>
          </div>
        )}
        {mobile && (
          <div className="knowler-people-card__footer_chatto">
            <a
              href={`https://wa.me/${mobile}`}
              target="_blank"
              rel="noreferrer"
            >
              <BsChatText />
            </a>
          </div>
        )}
        <div className="knowler-people-card__footer_followto">
          {(loading && (
            <Spinner className="knowler-people-card__footer_spinner" />
          )) || (
            <BsPersonAdd
              color={follow ? " #9AAE03" : "#6886C1"}
              onClick={handleFollowClick}
            />
          )}
        </div>
        {pageDetailUrl && (
          <div className="knowler-people-card__footer_viewprofile">
            <a href={pageDetailUrl} target="_blank" rel="noreferrer">
              <img src="/knowler_logo.png" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string,
  employeeNumber: PropTypes.string,
  jobTitle: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  mobile: PropTypes.string,
  follow: PropTypes.bool,
  pageDetailUrl: PropTypes.string,
  account: PropTypes.string,
  setFollow: PropTypes.func,
};

export default Card;

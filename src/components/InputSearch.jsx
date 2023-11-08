import { useState } from "react";
import { BsX } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import PropTypes from "prop-types";
import "./less/InputSearch.less";

const InputSearch = ({ onSubmit, disabled }) => {
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);

  const handleInputSearh = ({ target }) => setSearchText(target.value);

  const handleClearSearch = () => {
    searchRef.current.focus();
    setSearchText("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    onSubmit(value);
  };

  return (
    <div className="knowler-people-search__box">
      <div className="knowler-people-search__icon">
        <BiSearch size="16px" color="#b5b5b8" />
      </div>

      <form
        className="knowler-people-search__form"
        onSubmit={handleSubmit}
        disabled={disabled}
      >
        <input
          type="text"
          className="knowler-people-search__input"
          placeholder="Search"
          onInput={handleInputSearh}
          ref={searchRef}
          value={searchText}
          onSubmit={handleSubmit}
        />
      </form>

      {searchText && (
        <button
          type="button"
          className="knowler-people-search__clear-button"
          onClick={handleClearSearch}
          disabled={disabled}
        >
          <BsX size="20px" />
        </button>
      )}
    </div>
  );
};

InputSearch.propTypes = {
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

export default InputSearch;

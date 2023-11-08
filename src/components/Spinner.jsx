import "./less/Spinner.less";
const Spinner = (props) => (
  <svg className="knowler-people-spinner"  viewBox="0 0 50 50" {...props}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="5"
    ></circle>
  </svg>
);

export default Spinner;

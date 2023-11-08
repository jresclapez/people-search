import PropTypes from 'prop-types';
import './less/Header.less';
const Header = ({title}) => ( <h1 className="knowler-people-title">{title}</h1> );

Header.propTypes = {
    title: PropTypes.string,
}
export default Header;

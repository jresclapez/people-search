import PropTypes from 'prop-types';
import "./less/Container.less";

const Container = ({ children }) => (
    <div className="knowler-people-container">
        {children}
    </div>
)

Container.propTypes = {
    children: PropTypes.node,
}

export default Container;
const React = require('react');
const {Link, IndexLink} = require('react-router');

const Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <ul className="menu">
                            <li>
                                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                            </li>
                            <li>
                                <Link to="/" activeClassName="active-link">Countdown</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">Created by <a href="https://github.com/quyencao" target="_blank">Quyen</a></li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;
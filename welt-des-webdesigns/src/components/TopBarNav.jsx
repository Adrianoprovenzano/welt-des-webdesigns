import {Link} from "react-router-dom";

function TopBarNav(){
    return (
        <div className="container-topNav">
            <Link to="/html/start"  className="topbar-button">HTML</Link>
            <Link to="/css/cssIntro"  className="topbar-button">CSS</Link>
            <Link to="/js/jsIntro" className="topbar-button">JavaScript</Link>
            <Link to="/index" className="topbar-button">Index</Link>
            <Link to="/about" className="topbar-button">Über Uns</Link>
            <Link to="/imprint" className="topbar-button">Impressum/
                Datenschutz</Link>
        </div>
    )
}

export default TopBarNav;
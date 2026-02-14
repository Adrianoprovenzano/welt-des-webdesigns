import {Link} from "react-router-dom";
import '../App.css'

function NavBar({navigationPages, topic, titel}) {
    return (

        <div className="nav-container">
            <h3>{titel}</h3>
            <nav>
                {navigationPages.map((item, index) => {

                    // ✅ Falls es eine Gruppe mit Heading ist
                    if (item.heading) {
                        return (
                            <div key={index}>
                                <h4>{item.heading}</h4>

                                {item.pages.map((page) => (
                                    <Link
                                        key={page.id}
                                        to={`/${topic}/${page.id}`}
                                    >
                                        {page.titel}
                                    </Link>
                                ))}
                            </div>
                        );
                    }

                    // ✅ Normale Seite
                    return (
                        <Link
                            key={item.id}
                            to={`/${topic}/${item.id}`}
                        >
                            {item.titel}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export default NavBar;
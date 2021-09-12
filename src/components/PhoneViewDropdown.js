import React from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import '../css/PhoneViewDropdown.css'
function PhoneViewDropdown() {
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    return (
        <div className="phoneviewcategories">
            <h1>categories</h1>
            <ul
            // onClick={handleClick}
            // className={click ? "dropdown-menu clicked" : "dropdown-menu"}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                to={item.path}
                                // onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PhoneViewDropdown

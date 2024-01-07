import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Lodgings from "../../lodging.json"
import "../Card/Card.css"

function Card() {
    const [lodgings] = useState(Lodgings)
    return (
    <div className={"backgroundCards"}>
        {lodgings.map((lodging) => (
            <Link to={`/LogementPage/${lodging.id}`} key={lodging.id}>  
            <div key={lodging.id} className={"card"}>
                <img src={lodging.cover} alt={lodging.title} className={"cover"}/>
                <div className={"titleCard"}>{lodging.title}</div>
            </div>
        </Link>
        ))}
    </div>
    )
}

// Proptypes pour définir le type d'accessoires pour la sécurité des accessoires
Card.propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Card
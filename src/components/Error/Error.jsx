import "../Error/Error.css"
import { Link } from "react-router-dom"

function Error() {

    return (
        <div className={"errorContainer"}>
            <div className={"titleError"}>404</div>
            <div className={"subtitleError"}>Oups! La page que vous demandez n'existe pas.</div> 
            <Link to="/" className={"backlink"}>Retourner sur la page d’accueil</Link> 
        </div>
    )
}

export default Error
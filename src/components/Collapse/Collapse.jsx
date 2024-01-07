import  "../Collapse/Collapse.css"
import { useState } from "react"
import PropTypes from "prop-types"
import iconCollapse from "../Images/icon-collapse.svg"

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <div className={"containerCollapse"}>
            <div className={"titleCollapse"} onClick={() => setIsOpen(false)}>
            {title}
            <img src={iconCollapse} className={"iconOpen"} alt="" />
            </div>
        <div className={"contentCollapse"}>{content}</div>
        </div>
    ) : (
    <div className={"containerCollapse"}>
        <div className={"titleCollapse"} onClick={() => setIsOpen(true)}>
        {title}
        <img src={iconCollapse} className={"icon"} alt=""/>
        </div>
    </div>
    )
}

Collapse.propTypes={
    title:PropTypes.string, 
    content:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}
export default Collapse


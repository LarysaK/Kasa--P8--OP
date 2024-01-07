import React from 'react'
import  "../../components/Lodging/Lodging.css"
import FullStar from "../Images/full-star.png"
import EmptyStar from "../Images/empty-star.png"
import { useParams } from 'react-router-dom'
import { getOneLodging } from '../../Data/lodgingsData'

function LodgingDetails() {
    const params=useParams()
    const details = getOneLodging(params.id)
    const scaleRating = details.rating
//  console.log(scaleRating)

    const ratingStars = []
    for(let i = 1; i <= 5; i++) {
        if(i <= scaleRating) {
        ratingStars[i] = true
        } else {
            ratingStars[i] = false 
        }
    }
    return (
    <div className={"containerLodging"}>
        <div className={"leftDetails"}>
            <div className={"titleLodging"}>
                {details.title}
            </div>
            <div className={"location"}>
                {details.location}
            </div>
            <div className={"tags"}>
                {details.tags.map((tagsNb) => (
                    <div className={"tag"} key={tagsNb+details.id}>{tagsNb}</div>
                ))}
            </div>
        </div>
        <div className={"rightDetails"}>
            <div className={"hostInfo"}>
                <div className={"hostName"}>
                {details.host.name}
                </div>
                <div className={"pictProfile"}>
                    <img src={details.host.picture} alt="" className={"picture"}/>
                </div>
            </div>
            <div className={"starsBox"}>
                {ratingStars.map((nbStar, index) =>
                <img className={"stars"} src={nbStar ? FullStar : EmptyStar} alt={nbStar ? "full star" : "empty star"} key={nbStar+details.id+index} />
                )}
            </div>
        </div>
        
    </div>
    )
}

export default LodgingDetails
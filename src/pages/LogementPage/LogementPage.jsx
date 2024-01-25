import React from "react"
import { Navigate, useParams } from "react-router-dom"

import Slideshow from "../../components/Slides/Slides"
import  "../LogementPage/LogementPage.css"
import LodgingDetails from "../../components/Lodging/Lodging"
import Collapse from "../../components/Collapse/Collapse"
//  import DataLodgings from Data folder
import { DataLodgings } from "../../Data/lodgingsData"

export default function LogementPage() {
  let { id } = useParams()
  const lodging = DataLodgings.getOneLodging(id)

  return (
    <>
      {lodging ? (
        <div>
          <Slideshow key={lodging.pictures} images={lodging.pictures} />
          <LodgingDetails key={lodging.title} details={lodging} />
          <div className={"collapseDetails"}>
            <Collapse
              key={lodging.description}
              title="Description"
              content={lodging.description}
            />
            <Collapse
              key={lodging.equipments}
              title="Equipments"
              content={lodging.equipments.map((infos, index) => (
                <div key={`${lodging.equipments}-${index}`}>{infos}</div>
              ))}
            />
          </div>
        </div>
      ) : (
        <Navigate replace to="/*" />
      )}
    </>
  )
}
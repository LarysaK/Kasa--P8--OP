import React from "react"
import Banner from "../../components/Banner/Banner"
import ImgBannerHome from "../../components/Images/bannerHome.png"
import Card from "../../components/Card/Card" 

export default function Home() {
    return (
        <div>
            <Banner src={ImgBannerHome} title={"Chez vous, partout et ailleurs"} alt="Illustration d'une côte"/>
            <Card/>
        </div>
    )
}
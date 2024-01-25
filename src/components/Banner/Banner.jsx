import "../Banner/Banner.css"

function Banner({src, title, alt}) {
    return (
        <section className={"banner"}>
            <div className={"hero"}>
                <img src={src} alt={alt} className={"img"}/>
                <div className={"titleHome"}>{title}</div>
            </div>
        </section>
    )
}

export default Banner
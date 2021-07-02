import "./Hero.css"

export default function Hero ({ bgImage }) {
    return (
        <div
        className="hero"
        style={{
            backgroundImage: `url(${bgImage})`
        }}
        
        />
    )
}
import { Link } from "react-router-dom"

import style from "./About.module.css"

const About = () => {
    return (
        <div className={style.about}>
            <h2>Sobre o mini <span>Blog</span></h2>

            <p>Esse projeto foi feito com firebase no backend e react no frontend</p>

            <Link to = "/post/create" className="btn">Criar Post</Link>
        </div>
    )
}

export default About
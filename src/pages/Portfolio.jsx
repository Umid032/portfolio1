import React from 'react'
import Logo from "../assets/react.svg"
import PortfolioStyle from "./Pages.module.css";

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: "Test",
      image: Logo,
      body: "Hello world",
      link: "http://www.youtube.com/"
    }
  ];

  const work = projects.map((item) => {
    return (
      <section className={PortfolioStyle['work']} key={item.id}>
        <h3 className={PortfolioStyle['title-3']}>{item.title}</h3>
        <div className={PortfolioStyle["work-img"]}>
          <img src={item.image} alt={item.title} title={item.title} />
        </div>

        <p>{item.body}</p>

        <p>
          <a href={item.link} target='_blank'>смотреть проект</a>
        </p>
      </section>
    )
  })
  return (
    <div>
      <section className={PortfolioStyle['portfolio']}>
        <h2 className={PortfolioStyle['title-2']}>Мои работу</h2>
        <article>
          {work}
        </article>
      </section>
    </div>
  )
}

export default Portfolio
import React from 'react'
import HomeStyle from "./Pages.module.css";

const Home = () => {
  return (
    <div>
      <section className={HomeStyle['home']}>
        <h2 className={HomeStyle['title-2']}>
        Обо мне
        </h2>

        <div className={HomeStyle["home-desk"]}>
          <p>
          Занимаюсь профессиональной версткой сайтов. Люблю когда сайт отображается аккуратно и лаконично, четко соответствует дизайну, откликается на каждое действие пользователя и идеально смотрится на любом мобильном устройстве, будь то телефон или планшет.
          </p>

          <p>
          Верстку и создание сайтов изучал самостоятельно и на курсах от ВебКадеми. За это время сделал несколько проектов по верстке и сайтам под ключ. Найти их вы сможете в моем 
          </p>

          <img src="" alt="image Umid" className={HomeStyle['home-img']} />

          <p>
           <b>Гарантия на верстку.</b> В течение недели после передачи архива с готовой версткой я бесплатно и сразу исправляю свои ошибки которые могли быть пропущены при приеме работы и замечены позже.
          </p>

          <p>
          Вот что сказал клиент после работы со мной
          </p>

          <blockquote className={HomeStyle['home-quote']}>
          Умид пришел к нам на проект когда мы были на грани провала всех сроков. Наш сайт был сломан и не работал. Клиенты уходили к конкурентам. Получив макет Джон оперативно принялся за работу, на следующий день мы уже видели верстку главной страницы, а еще через день у нас была готовая посадочная страница. Джон помог также загрузить все на хостинг, настроить коды для сбора статистики с сайта. Благодаря его работе мы успели запустить проект к назначенной дате и сделали хорошие продажи!
          </blockquote>

          <p>
          Со мной удобно работать и мне важно чтобы клиент остался доволен!
          </p>

        </div>
      </section>
    </div>
  )
}

export default Home
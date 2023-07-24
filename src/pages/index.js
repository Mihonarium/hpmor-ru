import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

/*const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];*/
const features = [];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
	  permalink="/"
      description="Книга Элиезера Юдковского «Гарри Поттер и методы рационального мышления» на русском языке свободно доступна на этом сайте для чтения и скачивания. Петуния вышла замуж не за Дурсля, а за университетского профессора, и Гарри попал в гораздо более благоприятную среду. У него были частные учителя, дискуссии с отцом, а главное — книги, сотни и тысячи научных и фантастических книг. В 11 лет Гарри знаком с квантовой механикой, когнитивной психологией, теорией вероятностей и другими вещами. Но Гарри не просто вундеркинд, у него есть загадочная Тёмная сторона, которая явно накладывает свой отпечаток на его мышление. Официальный сайт, читать в электронном виде, скачать (fb2, epub) или получить на бумаге. ">
	  <Head>
	    <script type="application/ld+json">
		{JSON.stringify({
			"@context":"https://schema.org",
			"@type":"Book",
			"image":"https://xn--c1asakg.xn--p1ai/img/hpmor_cover.jpg",
			"name":"Гарри Поттер и Методы Рационального Мышления",
	  		"alternateName":"Гарри Поттер и методы рационального мышления",
	  		"numberOfPages":1896,
  			"accessMode": ["textual"],
			  "accessModeSufficient": [
			    {
			      "@type": "ItemList",
			      "itemListElement": ["textual"],
			      "description": "Text of the book and the interface"
			    }
			  ],
			  "accessibilityControl": [
			    "fullKeyboardControl",
			    "fullMouseControl"
			  ],
			  "accessibilityHazard": [
			    "noFlashingHazard",
			    "noMotionSimulationHazard",
			    "noSoundHazard"
			  ],
	  		"about":"Книга Элиезера Юдковского. Петуния вышла замуж не за Дурсля, а за университетского профессора, и Гарри попал в гораздо более благоприятную среду. У него были частные учителя, дискуссии с отцом, а главное — книги, сотни и тысячи научных и фантастических книг. В 11 лет Гарри знаком с квантовой механикой, когнитивной психологией, теорией вероятностей и другими вещами. Но Гарри не просто вундеркинд, у него есть загадочная Тёмная сторона, которая явно накладывает свой отпечаток на его мышление",
			"description":"Книга Элиезера Юдковского. Петуния вышла замуж не за Дурсля, а за университетского профессора, и Гарри попал в гораздо более благоприятную среду. У него были частные учителя, дискуссии с отцом, а главное — книги, сотни и тысячи научных и фантастических книг. В 11 лет Гарри знаком с квантовой механикой, когнитивной психологией, теорией вероятностей и другими вещами. Но Гарри не просто вундеркинд, у него есть загадочная Тёмная сторона, которая явно накладывает свой отпечаток на его мышление",
			"genre":"Зарубежное фэнтези, Фанфик",
			"author": {
			    "@type": "Person",
			    "givenName": "Элиезер",
			    "familyName": "Юдковский",
				"sameAs":"https://www.wikidata.org/wiki/Q704195"
			},
			"publisher":{"@type":"Organization","name":"HPMOR (LessWrong)"},
			"translationOfWork":{
				"@type":"Book",
				"name":"Harry Potter and the Methods of Rationality",
				"author": {
				    "@type": "Person",
				    "givenName": "Eliezer",
				    "familyName": "Yudkowsky",
					"sameAs": "https://www.wikidata.org/wiki/Q22162553"
				}
			},
			"aggregateRating":{
				"@type":"AggregateRating",
				"ratingValue":4.9,
				"ratingCount":8511,
				"bestRating":"5",
				"worstRating":"1"
			},
			"sameAs": "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%80%D0%B8_%D0%9F%D0%BE%D1%82%D1%82%D0%B5%D1%80_%D0%B8_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B_%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F"
		})}
	</script>
	  </Head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">Элиезер Юдковский</p>
          <h1 className="hero__title">Гарри Поттер и методы рационального мышления</h1>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/book/')}>
              Читать
            </Link>
          </div>
          <p className="navbar__toggle">
            (ссылки на скачивание — в меню)
          </p>
        </div>
      </header>
      <main>
          <section className={styles.features}>
            <div className="container">
		  <div class="fr ph3"><div class="img_container"><img src="img/cover1_500.webp" alt="Обложка книги. Авторка - Татьяна Anforumeru. Лицензия: Creative Commons Attribution-ShareAlike 4.0 International" /></div></div><p class="no-word-wrap">Петуния вышла замуж не за Дурсля, а за университетского профессора, и Гарри попал в гораздо более благоприятную среду. У него были частные учителя, дискуссии с отцом, а главное — книги, сотни и тысячи научных и фантастических книг. В 11 лет Гарри знаком с квантовой механикой, когнитивной психологией, теорией вероятностей и другими вещами. Но Гарри не просто вундеркинд, у него есть загадочная Тёмная сторона, которая явно накладывает свой отпечаток на его мышление.</p>
		  <p>Книга «Гарри Поттер и методы рационального мышления» на русском языке свободно доступна на этом сайте. Выберите подходящий электронный формат: 
	      <ul class="pl0-ns ml0">
<li class="list f5 w-100 underline-hover nl1">
<a href="https://гпмрм.рф/files/hpmor_ru.epub">.epub</a> (подходит для Android, приложения "Книги" на iOS и большинства читалок)
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="https://гпмрм.рф/files/hpmor_ru.fb2">.fb2</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
Читать онлайн на этом сайте: начните с <a href="/book/">предисловия</a> или <a href="/book/1/1/">первой главы</a>. Сайт сохраняет последнюю позицию чтения; доступен тёмный режим.
</li></ul></p>
<p>На бумаге можно напечатать книги самостоятельно по <a href="/pdf">нашей вёрстке</a>. Библиотеки могут получить бесплатные бумажные экземпляры, заполнив <a href="/libraries">форму для библиотек</a>. Победители некоторых олимпиад могут бесплатно получить бумажные книги, заполнив <a href="/getbooks/?olymp">форму для олимпиадников</a>.</p>
<h3>Оглавление</h3>
<ul class="pl0-ns ml0">
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/" class="link ph2 pv1 db black">
Авторское предисловие к печатному русскому изданию
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/1/" class="link ph2 pv1 db black">
Глава 1. Крайне маловероятный день
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/2/" class="link ph2 pv1 db black">
Глава 2. Всё, во что я верю, — ложь
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/3/" class="link ph2 pv1 db black">
Глава 3. Сравнивая варианты реальности
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/4/" class="link ph2 pv1 db black">
Глава 4. Гипотеза эффективного рынка
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/5/" class="link ph2 pv1 db black">
Глава 5. Фундаментальная ошибка атрибуции
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/6/" class="link ph2 pv1 db black">
Глава 6. Ошибка планирования
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/7/" class="link ph2 pv1 db black">
Глава 7. Взаимный обмен
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/8/" class="link ph2 pv1 db black">
Глава 8. Положительная предвзятость
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/9/" class="link ph2 pv1 db black">
Глава 9. Название скрыто. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/10/" class="link ph2 pv1 db black">
Глава 10. Самосознание. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/11/" class="link ph2 pv1 db black">
Глава 11. Дополнительные материалы № 1, № 2 и № 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/12/" class="link ph2 pv1 db black">
Глава 12. Самоконтроль
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/13/" class="link ph2 pv1 db black">
Глава 13. Неправильные вопросы
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/14/" class="link ph2 pv1 db black">
Глава 14. Непознанное и непознаваемое
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/15/" class="link ph2 pv1 db black">
Глава 15. Добросовестность
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/16/" class="link ph2 pv1 db black">
Глава 16. Нестандартное мышление
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/17/" class="link ph2 pv1 db black">
Глава 17. Выбор гипотезы
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/18/" class="link ph2 pv1 db black">
Глава 18. Иерархии подчинения
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/19/" class="link ph2 pv1 db black">
Глава 19. Отложенное вознаграждение
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/20/" class="link ph2 pv1 db black">
Глава 20. Теорема Байеса
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/21/" class="link ph2 pv1 db black">
Глава 21. Самооправдание
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/22/" class="link ph2 pv1 db black">
Глава 22. Научный метод
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/23/" class="link ph2 pv1 db black">
Глава 23. Убеждённость в убеждениях
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/24/" class="link ph2 pv1 db black">
Глава 24. Гипотеза макиавеллианского интеллекта
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/25/" class="link ph2 pv1 db black">
Глава 25. Не спешите предлагать решения
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/26/" class="link ph2 pv1 db black">
Глава 26. Замечая замешательство
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/27/" class="link ph2 pv1 db black">
Глава 27. Эмпатия
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/28/" class="link ph2 pv1 db black">
Глава 28. Редукционизм
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/29/" class="link ph2 pv1 db black">
Глава 29. Эффект эгоцентричности
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/30/" class="link ph2 pv1 db black">
Глава 30. Работа в группах. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/31/" class="link ph2 pv1 db black">
Глава 31. Работа в группах. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/32/" class="link ph2 pv1 db black">
Глава 32. Интерлюдия: Управление личными финансами
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/33/" class="link ph2 pv1 db black">
Глава 33. Проблемы координации. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/34/" class="link ph2 pv1 db black">
Глава 34. Проблемы координации. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/35/" class="link ph2 pv1 db black">
Глава 35. Проблемы координации. Часть 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/36/" class="link ph2 pv1 db black">
Глава 36. Различия в статусах
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/37/" class="link ph2 pv1 db black">
Глава 37. Интерлюдия: Пересекая границы
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/38/" class="link ph2 pv1 db black">
Глава 38. Смертный грех
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/39/" class="link ph2 pv1 db black">
Глава 39. Притворная мудрость. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/40/" class="link ph2 pv1 db black">
Глава 40. Притворная мудрость. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/41/" class="link ph2 pv1 db black">
Глава 41. Лобовое столкновение
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/42/" class="link ph2 pv1 db black">
Глава 42. Храбрость
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/43/" class="link ph2 pv1 db black">
Глава 43. Человечность. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/44/" class="link ph2 pv1 db black">
Глава 44. Человечность. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/45/" class="link ph2 pv1 db black">
Глава 45. Человечность. Часть 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/46/" class="link ph2 pv1 db black">
Глава 46. Человечность. Часть 4
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/47/" class="link ph2 pv1 db black">
Глава 47. Теория личности
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/48/" class="link ph2 pv1 db black">
Глава 48. Утилитарные приоритеты
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/49/" class="link ph2 pv1 db black">
Глава 49. Априорная информация
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/50/" class="link ph2 pv1 db black">
Глава 50. Эгоизм
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/51/" class="link ph2 pv1 db black">
Глава 51. Название скрыто. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/52/" class="link ph2 pv1 db black">
Глава 52. Стэнфордский тюремный эксперимент. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/53/" class="link ph2 pv1 db black">
Глава 53. Стэнфордский тюремный эксперимент. Часть 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/54/" class="link ph2 pv1 db black">
Глава 54. Стэнфордский тюремный эксперимент. Часть 4
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/55/" class="link ph2 pv1 db black">
Глава 55. Стэнфордский тюремный эксперимент. Часть 5
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/56/" class="link ph2 pv1 db black">
Глава 56. СТЭ. Часть 6. Условная оптимизация
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/57/" class="link ph2 pv1 db black">
Глава 57. СТЭ. Часть 7. Вынужденное познание
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/58/" class="link ph2 pv1 db black">
Глава 58. СТЭ. Часть 8. Вынужденное познание
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/59/" class="link ph2 pv1 db black">
Глава 59. СТЭ. Часть 9. Любопытство
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/60/" class="link ph2 pv1 db black">
Глава 60. Стэнфордский тюремный эксперимент. Часть 10
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/61/" class="link ph2 pv1 db black">
Глава 61. СТЭ. Часть 11. Секретность и открытость
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/62/" class="link ph2 pv1 db black">
Глава 62. Стэнфордский тюремный эксперимент. Финал
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/63/" class="link ph2 pv1 db black">
Глава 63. Стэнфордский тюремный эксперимент. Послесловия
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/64/" class="link ph2 pv1 db black">
Глава 64. Дополнительные материалы №4. Параллельные вселенные
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/65/" class="link ph2 pv1 db black">
Глава 65. Ложь порождает ложь
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/66/" class="link ph2 pv1 db black">
Глава 66. Самоактуализация. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/67/" class="link ph2 pv1 db black">
Глава 67. Самоактуализация. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/68/" class="link ph2 pv1 db black">
Глава 68. Самоактуализация. Часть 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/69/" class="link ph2 pv1 db black">
Глава 69. Самоактуализация. Часть 4
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/70/" class="link ph2 pv1 db black">
Глава 70. Самоактуализация. Часть 5
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/71/" class="link ph2 pv1 db black">
Глава 71. Самоактуализация. Часть 6
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/72/" class="link ph2 pv1 db black">
Глава 72. Самоактуализация. Часть 7. Правдоподобное отрицание
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/73/" class="link ph2 pv1 db black">
Глава 73. Самоактуализация. Часть 8. Священное и мирское
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/74/" class="link ph2 pv1 db black">
Глава 74. Самоактуализация. Часть 9. Эскалация конфликтов
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/75/" class="link ph2 pv1 db black">
Глава 75. Самоактуализация. Финал. Ответственность
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/76/" class="link ph2 pv1 db black">
Глава 76. Интерлюдия с исповедью: Необратимые издержки
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/77/" class="link ph2 pv1 db black">
Глава 77. Самоактуализация. Послесловия: Внешность обманчива
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/78/" class="link ph2 pv1 db black">
Глава 78. Цена бесценного. Прелюдия: Жульничество
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/79/" class="link ph2 pv1 db black">
Глава 79. Цена бесценного. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/80/" class="link ph2 pv1 db black">
Глава 80. Цена бесценного. Часть 2. Эффект дурной славы
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/81/" class="link ph2 pv1 db black">
Глава 81. Цена бесценного. Часть 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/82/" class="link ph2 pv1 db black">
Глава 82. Цена бесценного. Финал
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/83/" class="link ph2 pv1 db black">
Глава 83. Цена бесценного. Послесловие 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/84/" class="link ph2 pv1 db black">
Глава 84. Цена бесценного. Послесловие 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/85/" class="link ph2 pv1 db black">
Глава 85. Цена бесценного. Послесловие 3. На расстоянии
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/86/" class="link ph2 pv1 db black">
Глава 86. Проверка многомерной гипотезы
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/87/" class="link ph2 pv1 db black">
Глава 87. Гедонистическая осведомлённость
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/88/" class="link ph2 pv1 db black">
Глава 88. Давление времени. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/89/" class="link ph2 pv1 db black">
Глава 89. Давление времени. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/90/" class="link ph2 pv1 db black">
Глава 90. Роли. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/91/" class="link ph2 pv1 db black">
Глава 91. Роли. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
 <a href="/book/1/92/" class="link ph2 pv1 db black">
Глава 92. Роли. Часть 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/93/" class="link ph2 pv1 db black">
Глава 93. Роли. Часть 4
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/94/" class="link ph2 pv1 db black">
Глава 94. Роли. Часть 5
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/95/" class="link ph2 pv1 db black">
Глава 95. Роли. Часть 6
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/96/" class="link ph2 pv1 db black">
Глава 96. Роли. Часть 7
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/97/" class="link ph2 pv1 db black">
Глава 97. Роли. Часть 8
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/98/" class="link ph2 pv1 db black">
Глава 98. Роли. Финал
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/99/" class="link ph2 pv1 db black">
Глава 99. Роли. Послесловие
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/100/" class="link ph2 pv1 db black">
Глава 100. Меры предосторожности. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/101/" class="link ph2 pv1 db black">
Глава 101. Меры предосторожности. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/102/" class="link ph2 pv1 db black">
Глава 102. Забота
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/103/" class="link ph2 pv1 db black">
Глава 103. Экзамен
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/104/" class="link ph2 pv1 db black">
Глава 104. Истина. Часть 1. Загадки и ответы
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/105/" class="link ph2 pv1 db black">
Глава 105. Истина. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/106/" class="link ph2 pv1 db black">
Глава 106. Истина. Часть 3
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/107/" class="link ph2 pv1 db black">
Глава 107. Истина. Часть 4
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/108/" class="link ph2 pv1 db black">
Глава 108. Истина. Часть 5. Ответы и загадки
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/109/" class="link ph2 pv1 db black">
Глава 109. Отражения
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/110/" class="link ph2 pv1 db black">
Глава 110. Отражения. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/111/" class="link ph2 pv1 db black">
Глава 111. Провал. Часть 1
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/112/" class="link ph2 pv1 db black">
Глава 112. Провал. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/113/" class="link ph2 pv1 db black">
Глава 113. Последнее испытание
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/114/" class="link ph2 pv1 db black">
Глава 114. Заткнись и сделай невозможное
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/115/" class="link ph2 pv1 db black">
Глава 115. Заткнись и сделай невозможное. Часть 2
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/116/" class="link ph2 pv1 db black">
Глава 116. Послесловие. Мне есть что защищать. Часть 0
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/117/" class="link ph2 pv1 db black">
Глава 117. Мне есть что защищать. Минерва МакГонагалл
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/118/" class="link ph2 pv1 db black">
Глава 118. Мне есть что защищать. Профессор Квиррелл
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/119/" class="link ph2 pv1 db black">
Глава 119. Мне есть что защищать. Альбус Дамблдор
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/120/" class="link ph2 pv1 db black">
Глава 120. Мне есть что защищать. Драко Малфой
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/121/" class="link ph2 pv1 db black">
Глава 121. Мне есть что защищать. Северус Снейп
</a>
</li>
<li class="list f5 w-100 underline-hover nl1">
<a href="/book/1/122/" class="link ph2 pv1 db black">
Глава 122. Мне есть что защищать. Гермиона Грейнджер
</a>
</li>
</ul>
            </div>
          </section>
      </main>
    </Layout>
  );
}

export default Home;

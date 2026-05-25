import Header from "./components/Header";
import Button from "./components/Button/Button";
function WayToTeach() {
  return (
    <li className="list-none border rounded-md p-5 mb-5 bg-[#fafafa]">
      <p>
        <strong className="block mb-1">Разные форматы обучения</strong>
        Видео-уроки, практические задания, конспекты, хакатоны, обсуждения в
        сообществе — все это дает полноценное представление о работе
        разработчиком и ускоряет процесс обучения.
      </p>
    </li>
  );
}

export default function App() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            <WayToTeach />
            <WayToTeach />
            <WayToTeach />
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button onClick={handleClick}>Подход</Button>
          <Button onClick={handleClick}>Доступность</Button>
          <Button onClick={handleClick}>Концентрация</Button>
        </section>
      </main>
    </div>
  );
}

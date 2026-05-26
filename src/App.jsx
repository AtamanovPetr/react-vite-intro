import Header from "./components/Header";
import Button from "./components/Button/Button";
import { useState } from "react";
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
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
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

          <Button
            isActive={contentType === "way"}
            onClick={() => handleClick("way")}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === "easy"}
            onClick={() => handleClick("easy")}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === "programm"}
            onClick={() => handleClick("programm")}
          >
            Концентрация
          </Button>

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{contentType}</p>}
        </section>
      </main>
    </div>
  );
}

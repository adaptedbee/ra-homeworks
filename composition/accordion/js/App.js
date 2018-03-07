'use strict';

const App = (props) => {
  return (
    <main className="main">
      <h2 className="title">React</h2>
      
      <Accordion opened title="Компоненты">
        <div className="article">
          После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.
        </div>
      </Accordion>

      <Accordion title="Выучил раз, используй везде!">
        <div class="article">
          Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
        </div>
      </Accordion>

      <Accordion title="Использование JSX">
        <div className="article">
          JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
        </div>
      </Accordion>
    </main>
  );
};
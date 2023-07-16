Простая реаализация аккордиона с возможностью удобной настройки параметров через переменные в style.css

Установка:
```

npm install simple-accordion-js

```


Разметка:
```

<ul class="accordion price__accordion">
  <p class="accordion__title">Бар</p>
  <li class="accordion__item">
    <div class="accordion__preview">
      <p class="accordion__title accordion__text">Коктейли</p>
      <div class="accordion__ico"></div>
    </div>
    <div class="accordion__content">
      <p class="accordion__content--item accordion__text">Утиная грудка с соусом из клюквы и карамелизированным картофелем</p>
      <p class="accordion__content--item accordion__text">Сочная утиная грудка обжаренная на&nbsp;сливочном масле до&nbsp;золотистой корочки, подаётся с&nbsp;
      соусом из&nbsp;свежезамороженной клюквы, которая придаёт блюду лёгкую кислинку и&nbsp;гармонично сочетается с&nbsp;мягким мясом.</p>
      <p class="accordion__content--item accordion__text">350 / 10 / 200</p>
    </div>
  </li>
  <li class="accordion__item">
    <div class="accordion__preview">
      <p class="accordion__title accordion__text">Крепкий алкоголь</p>
      <div class="accordion__ico"></div>
    </div>
     <div class="accordion__content">
      <p class="accordion__content--item accordion__text">Утиная грудка с соусом из клюквы и карамелизированным картофелем</p>
      <p class="accordion__content--item accordion__text">Сочная утиная грудка обжаренная на&nbsp;сливочном масле до&nbsp;золотистой корочки, подаётся с&nbsp;
      соусом из&nbsp;свежезамороженной клюквы, которая придаёт блюду лёгкую кислинку и&nbsp;гармонично сочетается с&nbsp;мягким мясом.</p>
      <p class="accordion__content--item accordion__text">350 / 10 / 200</p>
    </div>
  </li>
</ul>

```
Минимальная разметка:
```

<ul class="accordion price__accordion">>
  <li class="accordion__item">
    <div class="accordion__preview">
      <p class="accordion__title accordion__text">Коктейли</p>
    </div>
    <div class="accordion__content">
      <p class="accordion__content--item accordion__text">Утиная грудка с соусом из клюквы и карамелизированным картофелем</p>
    </div>
  </li>
  <li class="accordion__item">
    <div class="accordion__preview">
      <p class="accordion__title accordion__text">Коктейли</p>
    </div>
    <div class="accordion__content">
      <p class="accordion__content--item accordion__text">Утиная грудка с соусом из клюквы и карамелизированным картофелем</p>
    </div>
  </li>
</ul>

```
Пример:
https://codepen.io/wanabeunique/pen/jOQzZLy


--accordion-ico - ссылка на маркер открытия аккордиона<br/>
--accordion-ico-rotate - поворот маркера в градусах<br/>
--accordion-rotate-time - время поворота маркеры<br/>
--accordion-ratio - коэффицент длительности открытия контента аккордиона относительно поворота маркера<br/>
--accordion-bg - цвет заднего фона<br/>
--accordion-padding - отступ карточки<br/>
--accordion-item-offset - внутренний отсуп каждого элеменета карточки<br/>
--accordion-content-offset - отсуп абзацев<br/>
--accordion-border - цвет рамки<br/>

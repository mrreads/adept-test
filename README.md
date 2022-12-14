# Тестовое задание

<details>
<summary>Задание для Frontend developer</summary>

>Создайте одностраничное приложение “Список компаний”, используя библиотеку React.js.
Требования: react, redux(redux-toolkit) остальное на ваше усмотрение, НО стоит использовать минимальное кол-во библиотек(например, таблицу нужно точно сделать самостоятельно, без сторонних библиотек)
Дано: Слева имеется таблица со списком компаний. Справа - таблица сотрудников выбранной компании. Данные в таблицах должны храниться в сторе. 
Данные для таблиц "компании" и "сотрудники" - фейковые, создать самостоятельно.
Шапка таблицы "компании": Чекбокс “Выделить всё”
Тело таблицы имеет столбцы: | Чекбокс | Название компании | Кол-во сотрудников | Адрес
При клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение. При клике по чекбоксу “Выделить всё” - выделяются все строки.

>При выделении одной компании - справа, в таблице "сотрудники", видим данные сотрудников этой компании.

>Шапка таблицы "сотрудники": Чекбокс “Выделить всё”
Тело таблицы имеет столбцы: | Чекбокс | Фамилия | Имя | Должность

>В таблице "сотрудники" при клике по чекбоксу в строке, соответствующая строка выделяется цветом на ваше усмотрение.

>Если не выделена ни одна из компаний, то таблица "сотрудники" не видна.

>Все поля таблиц редактируемые кроме счётчика сотрудников в таблице "компании".

>В обеих таблицах реализовать механизм добавления/удаления компаний/сотрудников по соответствующим кнопкам. Удаление может быть множественное(если выделены несколько строк).

>При добавлении/удалении сотрудников у компании, счётчик сотрудников в таблице "компании" обновляется.

>Готовый проект нужно разместить в репозитории на Github или Gitlab.

>Будет плюсом: предусмотреть вариант когда компаний/сотрудников может быть 10 000+(желательно предложить вариант без переключения по страницам, динамическая загрузка при скролле)

</details>

## Использованые библиотеки
- React
- Redux Toolkit
- [react-infinite-scroller](react-infinite-scroller)

Бесконечный скролл реализован путём **добавления** новых 100 компаний в **store**. <br>
Добавляются **только компании**.


Редактирование данных присходит при **нажатии на поле**, при редактировании поле окрашивается в **оранжевый** цвет. <br>
Закончить редактирование можно **кликнув в пустое место**, изменения сохраняться в **store**.
## Конфиг

В `./src/config.js` расположен конфиг, где указаны **количество** компаний/сотрудников для начальной генерации .
```
const config = {
    companyCount: 100,
    workersCount: 200
};
```

## Запуск

В проекте использован стандартный **create-react-app**, запуск происходит с помощью `npm run start`
## Скриншоты

![Не выбраны компании](https://i.ibb.co/N64yS85/1.jpg)
![Выбраны компании](https://i.ibb.co/MNZjv3n/2.jpg)
![Пример редактирования](https://i.ibb.co/68KGD79/3.jpg)
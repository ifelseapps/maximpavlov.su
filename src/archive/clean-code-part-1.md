---
title: Чистый код. Тезисы. Часть 1.
date: 2021-01-02
---
Что такое чистый код? Вот как некоторые из наших известных коллег рассуждают о чистом коде:

{% quote "Роберт Мартин", "консультант и автор в области разработки ПО", "http://cleancoder.com/products" %}
Единственный способ выдержать график и единственный способ работать быстро — заключается в том, чтобы постоянно поддерживать чистоту в коде
{% endquote %}

{% quote "Греди Буг", "автор книги «Object oriented, analysis and design with applications»", "https://twitter.com/grady_booch" %}
Чистый код прост и прямолинеен. Чистый код читается как хорошо написанная книга. Чистый код никогда не затемняет намерения проектировщика; он полон четких абстракций и простых линий передачи управления.
{% endquote %}

{% quote "Майкл Физерс", "автор книги «Working effectively with legacy code»" %}
Чистый код всегда выклядит так, словно его автор над ним тщательно потрудился...
{% endquote %}

При работе с кодовой базой необходимо применять **правило бойскаута**:
{% quote %}
оставь место стоянки чище, чем оно было до твоего прихода
{% endquote %}

## Именование сущностей
* Имена должны передавать намерения программиста. Почему эта переменная/функция/класс и т.д. существует? Что она делает? Как используется?
* Если имя требует дополнительных комментариев, значит оно не передает намерения программиста.
* **Неочевидность кода** — это степень, в которой контекст не следует явно из самого кода.
* Программисты должны избегать ложных ассоциаций, затемняющих смысл кода. Не обозначайте группу учетных записей именем `accountList`,
  если записи хранятся не в `List`, а в другом контейнере. У меня есть свой пример, когда разработчик положил в поле с именем
  `timestamp` объект `Date`, хотя `timestamp` подразумевает число.
* Избегайте малозаметных различий в именах. Например: `ItemComponent` и `ItemsComponent`.
* Современные среды IDE обладают механизмами автодополнений. Удобно, если имена похожих сущностей (объектов, методов и т.д.) сортируются по алфавиту,
  и если различия предельно очевидны (разработчик, выбирая из списка автодополнений, не увидит ни комментариев, ни сигнатуры методов).
* Используйте осмысленные различия.
  ```java
  copyChars(char a1[], char a2[]) // плохо
  copyChars(char source[], char destination[]) // хорошо
  ```
* Используйте удобопроизносимые имена.
* Используйте имена, удобные для поиска. Строку `MAX_CLASSES_PER_STUDENT` найти легко, а вот при поиске числа `7` будет очень много ложных вхождений.
* Избегайте мысленных преобразований. Пример таких преобразований — использование однобуквенных переменных (за исключением счетчиков циклов).
  В сущности, вы создаете временный заменитель, который должен быть преобразован пользователем в реальную концепцию.
  Профессиональный программист понимает: ясность первыше всего. Профессионалы используют свою силу во благо и пишут код, понятный для других людей.
* Имена объектов и классов должны представлять собой существительные.
* Имена методов должны представлять собой глаголы/глагольные словосочетания.
* Имена методов чтения, записи, предикатов образуются из префиксов (`get`, `set`, `is` соответственно) и значения.
* При перегрузке конструкторов используйте статические методы-фабрики с именами, описывающими аргументы. Для принудительного использования таких методов,
  конструкторы объявляются приватными.
  ```java
  Complex fulcrumPoint = Complex.FromRealNumber(23.0); // Хорошо
  Complex fulcrumPoint = new Complex(23.0); // Хуже
  ```
* Выберите одно слово для каждой концепции. Например, существование в разных классах эквивалентных методов с именами `fetch`, `retrieve`, `get`
  создаст путаницу.
  Единый, согласованный лексикон поможет программистам, которые будут пользоваться вашим кодом.
* Старайтесь не использовать одно слово в двух смыслах.
* У одной концепции должны быть семантически эквивалентными списки параметров и возвращаемые значения.
* Не стесняйтесь ипользовать в названиях термины из области информатики, названия алгоритмов и паттернов, т.к. ваш код будут читать программисты
  и такие имена несут полезную смысловую нагрузку.
* Если для сущности, которую вы создаете, не существует подходящего _программизма_ — используйте имя из пространства задачи.
  В коде, главным образом, ориентированного на пространство задачи, следует использовать имена из пространства задачи.
* Добавьте содержательный контекст. Лишь немногие имена содержательны сами по себе. Все остальные имена следует помещать в определенный контекст
  для читателя кода, заключая их в классы, функции и пространства имен с правильно выбранными именами. В крайнем случае, контекст имени
  можно уточнить с помощью префикса.
* Не добавляйте избыточный контекст. Например, добавляя к каждому классу префикс имени приложения, вы каждый раз будете видеть лишние подсказки вашей IDE.

## Функции

* Функции должны быть компактными.
* Функции должны быть еще компактнее.
* Блоки кода в командах `if`, `else`, `while` и т.д. должны состоять из одной строки, в которой обычно содержится вызов функции.
  Это делает вмещающую функцию более компактной. Кроме того, это способствует документированию кода, т.к. вызываемой в блоке функции можно присвоить
  содержательное имя.
* Функции не должны содержать вложенных структур, т.к. это приводит к их увеличению. Максимальнй уровень отступов в функции не должен превышать одного-двух.
* Функция должна выполнять только одну операцию.
* Все команды функции должны находиться на одном уровне абстракции.
* Код должен читаться как рассказ — сверху-вниз. За каждой функцией должна следовать функция следующего уровня абстракции.
  Это позволяет читать код, последовательно спускаясь по уровням абстракции в ходе чтения списка функций. Автор называет такой подход
  _правилом понижения_.
* Команды `switch` допустимы, если они встречаются однократно, используются для создания полиморфных объектов и скрываются за отношениями
  наследования, чтобы оставаться невидимыми для остальных частей системы. Это общее правило, но бывают исключения.
* Не бойтесь давать длинные имена. Длинное содержательное имя лучше короткого невразумительного. Нередко поиски хороших имен приводят к
  полезной реструктуризации кода.
* Используйте в именах функций те же словосочетания, глаголы и существительные, которые используются в ваших модулях.
* В идеальном случае количество аргументов функции равно нулю (нуль-арная функция). Функций с тремя аргументами (тернарная функция) и более
  следует избегать.
* Есть 2 распространенных случая вызова унарных функций: проверка условия (`isFileExists(path)`); обработка аргумента, его преобразование и возврат
  (`fileOpen(path)`). Есть 3я форма — обработчик события (в этом случае читателю должно быть предельно ясно, что перед ним обработчик события).
  Старайтесь избегать унарных функций, не относящимя к этим формам.

  Например, преобразования в которых вместо возвращаемого значения используется выходной аргумент (в js — преобразование аргумента по ссылке),
  сбивают читателя с толку. Если функция преобразует свой аргумент, то результат должен передаваться в возвращаемом значении.
* Аргументы-флаги уродливы. Использование флага говорит, что функция выполняет более одной операции, а также усложняет сигнатуру функции.
* Функцию с двумя аргументами понять сложнее чем унарную функцию. Кроме того, при вызове такой функции, необходимо вспоминать порядок аргументов.
  Необходимо, по возможности, избегать таких функций, хотя, это не всегда возможно.

  Для преобразования бинарной функции в унарную, можно сделать ее членом класса (обернуть ее в отдельный класс, либо воспользоватья полями текущего класса).
* Если функция должна получать более двух или трех аргументов, некоторые из этих аргументов можно упаковать в отдельный класс или объект (в случае js).
* Имена аргументов могут кодироваться в имени функции.
* Избавьтесь от побочных эффектов. Функция не должна делать то, что она не обещает.
* По возможности, необходимо избегать выходных аргументов, т.к. при их использовании пользователю приходится обращаться к сигнатуре функции,
  чтобы понять что она делает.
  ```java
  appendFooter(str); // Плохо
  report.appendFooter(); // Хорошо
  ```
* Функция должна делать что-то, либо отвечать на какой-то вопрос, но не одновременно.
  ```java
  public boolean set(String attr, String val);
  ```
* Используйте исключения вместо возвращения кодов ошибок. Возвращение кодов ошибок функциями-командами является нарушением _принципа
  разделения команд и запросов_. Кроме того, такие функции приводят к созданию структур глубокой вложенности (из-за того, что на ошибку
  необходимо отреагировать немедленно).
* Обработка ошибок — отдельная операция. Значит, функция, обрабатывающая ошибки, ничего другого делать не должна.
  Кроме того, блоки `try-catch` выглядят уродливо, они запутывают структуру кода. Тела блоков `try-catch` необходимо выделять
  в отдельные функции.
* Не повторяйтесь (DRY). Дублирование увеличивает объем кода, а также при изменении алгоритма, изменения придется вносить в нескольких
  местах. Дублирование иногда считается корнем зла во всем программировании.
* Процесс написания функции может выглядеть так:
  * Вы пишете функцию так, чтобы она работала;
  * Покрываете свою неуклюжую функцию тестами;
  * Причесываете код.

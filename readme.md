Rozbudowanie pierwszej aplikacji z cytatami - Projekt_Q. (https://github.com/piotrdabrowskicod/Projekt_Q)


Inspiracją do rozbudowania projektu był dodatek do Chrome - Momentum.

W projekcie jak poprzednio, cytaty są generowane przez API strony Forismatic.com, również jak poprzednio zostawiłem przycisk Twittera, który po zalogowaniu pozwala opublikować na Twitterze wybrany dla nas cytat. 

Poprzedni projekt zawierał przycisk, który po kliknięciu generował losowe jednolite tło. Obecnie w projekcie tło jest również generowane losowo, jednak dzieje się to automatycznie. Obrazami tła są wybrane przeze mnie obrazy z www.pexels.com. Każdorazowo generowane jest jedno z 31 obrazów.

W lewym górnym rogu, wyświetla się nam aktualny czas i data, natomiast w po prawej mamy pogodę. Status pogodowy jest pobierany z API strony Openweathermap.org. Pogoda wyświetlana jest według geolokalizacji, pokazuje nam temperaturę, miejsce lokalizacji oraz ikonę, która jest obrazem aktualnego stanu pogodowego. Ikony są pobrane ze strony openweathermap, zmodyfikowałem je dodając cień w Photoshopie, aby były lepiej widoczne na moim tle. 

Geolokalizację dodatkowo sprawdzałem za pomocą VPN i również pokazywały mi się lokalizacje z innych krajów. Przed pytaniem o udzielenie zgody, pojawia się dodatkowa ikona, niezwiązana z pogodą. W przypadku odmowy zamiast danych pogodowych pojawia się tekst 'Odmowa geolokalizacji'.

W środkowej sekcji strony pojawia się możliwość zapisywania zadań do zrobienia. Zadania podajemy w polu "Nowe zadanie" po kliknięciu w przycisk "Dodaj zadanie", które następnie pojawiają się sekcji "Zadania do zrobienia". Każde zadanie pojawia się jako element listy z ikonką gumki, która umożliwia nam usunięcie jednego wybranego zadania. Po kliknięciu ikony, pojawia się komunikat proszący po potwierdzenie czynności. Wyszukiwarka pozwala znaleźć na naszej liście wybrane zadanie, wystarczy zacząć wpisywać tekst i zostaną tylko zadania z wpisywaną składnią. Zadania są zapisywane magazynie - localStorage - przeglądarki. Pod listą znajduje się przycisk, za pomocą którego możemy usunąć wszystkie elementy listy zadań.

W projekcie korzystałem z:

HTML, CSS, JS, Materializecss, Fontawesome.com, Pexels.com, Openweathermap.org, Forismatic.com.



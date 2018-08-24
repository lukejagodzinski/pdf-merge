Proces uruchomienia jest niestety trudniejszy niż myślałem. Żeby uruchomić skrypt będziesz potrzebował zainstalować sobie Java Development Kit dla Twojego systemu operacyjnego: http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html a także Node.js https://nodejs.org/en/download/. Instalacja nie powinna Ci przyspożyć kłopotów.

Samo uruchomienie skryptu jest bardzo proste. Jak już będziesz miał zainstalowane oba narzędzia to musisz pobrać sobie [TEN KATALOG](https://github.com/lukejagodzinski/pdf-merge/archive/master.zip) na swój komputer i go rozpakować gdziekolwiek. Następnie musisz włączyć terminal/wiersz poleceń i przejść do ścieżki ze skryptem:

```sh
cd /sciezka/do/katalogu/pdf-merge/
```

Następnie trzeba uruchomić sam skrypt gdzie jako argument podajesz katalog z plikami PDF, które chcesz przerobić. Skrypt stworzy nowe pliki, które na końcu nazwy będą miały frazę `_processed.pdf`. To tyle :)

```sh
./start.sh /sciezka/do/katalogu/z/plikami/pdf
```

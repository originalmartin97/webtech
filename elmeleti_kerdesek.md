
**Miert nem kedvelik a webfejlesztok az alert, confirm, prompt JavaScript fuggvenyekkel megjelenitett ablakokat? Melyik mire szolgal?**

* Mert ezek megszakithatják a felhasználói élményt és az általános interfészt. Felugró ablakok.
* Alert - felugró ablak, egyszerű szöveges üzenetre.
* Confirm - felugró ablak, szöveges üzenet elfogadására vagy elutasitására.
* Prompt - felugró ablak, szöveges inputra.


**Hogyan lehet HTML-ben megadni az oldal készitőjének nevét?**

* a meta elem segitsegevel, `<meta name="author" content="szerzoneve">`


**Milyen tipusú felsorolásokat lehet késziteni HTML-ben?**

* Rendezett lista `<ol>`
* Rendezetlen lista `<ul>`
* Definiciós lista `<dl>`


**Jellemezze a flex tárolókat!**

* A flex tárolók lehetővé teszik az elemek elrendezését rugalmas módon egy sorban vagy oszloban.


**Nevezzen meg három lehetséges módot, ahogyan eseménykezelő fügvényeket rendelhet eseményekhez! Mik ezek előnyei és hátrányai?**

* HTML attribútum használata
  * pro: egyszerű, nincs szükség külön js fájlra
  * con: bonyolult és redundáns kód
* DOM elem tulajdonságának beállitása
  * pro: kód és a funkciók elkülönölnek, könnyű karbantarthatóság
  * con: tulajdonságok felülirhatóak más eseménykezelők által
* JS addEventListener különálló függvény használatával
  * pro: több eseménykezelő egy elemhez, könnyű karbantarthatóság
  * con: böngésző támogatás hiánya alkalmanként, nehezebb olvasni


**Mit nevezünk a HTML-ben térképnek, milyen fajtái vannak?**

* A `<map>` elem definiálja, tovább bontható `<area>` elemekre. Segitségével felbonthatjuk a tartalmat több részre és kezelhetjük a részeket különálló egységekként, pl. hiperhivatkozásként.
* Képtérkép
* Szövegtérkép / Textuális térkép


**Nevezzen meg három lényeges különbséget a http 1.x és http 2 protokollok között!**

* *Multiplexing:* a 2-es protokol több kérést és választ enged meg egyidejűleg.
* *Head compression:* a 2-es prtotokol megengedi a fejlécek tömöritését, kevesebb adatforgalmat eredményez.
* *Priorization:* a 2-es protokol esetén a kliens adatait priorizálni tudjuk a szervert igy kisegitve mely kérések kerülnek előbbre.
* *Server push:* a 2-es protokol lehetővé teszi a szerver számára, hogy előre elküldje a böngészőnek azokat azt erőforrásokat, melyeket a kliens kérni fog.


**Mi a kapcsolat az SGML és HTML között, különös tekintettel a HTML 5-re?**

* A html alapjai az sgml-re épülnek. A HTML 5 bevezetésével már modernizálták a html nyelvet és az sgml számos funkcióit elhagyták.


**A CSS képpont mértékegysége valóban mindig fizikai képpontban méri a távolságot? Amennyiben nem, hozzon rá példát!**

* Nem.
* Százalékban, magasságban és egyéb dolgokban is mérhet.
  * `div {` width: 60%  `}`


**Mi az a három módszer, amivel valaminek a színét be lehet állítani CSS-ben? Adjon ezekre egy-egy mintát!**

* név megadásával - color: black
* hexadecimális kóddal - color: #000000
* rgb kóddal - color: rgb(0,0,0)


**Nevezzen meg két okot, amiért érdemes lehet jQuery-t használni egy weboldalon!**

* Egyszerű és rövidebb kód a műveletekhez
* Keresztböngésző támogatás - böngésző specifikus problémák kiküszübülése


**Adja meg a HTML 5 tulajdonságait! (legalább hármat)**

* Semantikus elemek
* audio és videó támogatás
* canvas api
* Offline és helyi tárhely támogatás
* geolocation api
* form elemek fejlesztése
* web workers
* WebSockets
* svg támogatás
* Drag and Drop támogatás

**CSS mértékegységek**

* em
* rem
* percentage
* px
* pt
* cm
* in

**Memex tulajdonságai**

* személyes tudáskezelés
* asszociativ linkek és kapcsolatok
* képek és videók digitalizálása
* intuitiv hatékony keresési funkciók

**Hol és milyen szoftverek szokták a webes tartalmakat gyorsitótárazni? Két példát hozzon!**

* Általában a webböngészők, valamint a tartalomterjesztő hálózatok szokták.
* proxy szerver, http gyorsitótár - Varnish Cache
* webkiszolgáló, proxy szerver - NGINX

**Hogyan, milyen nevű objektum tulajdonságokon keresztül lehet JavaScript kódban a HTML elemek for és class attribútumának értékét lekérdezni?**

* htmlFor
* classList vagy className

Melyik az a három legfontosabb technológia, amire a web épül?

* html
* css
* javaScript

**Írjon egy CSS szelektort, amely azon bekezdéseket választja ki, amelyek 3 képpont szélesen körvonalazva vannak!**

`p[border-width: 3px] {`

`}`

**Írjon le három jelölőnyelvet, melyeket a mobileszközök miatt hoztak létre! (Pl: kisebb adatforgalomgenerálás)**

* AMP (Accelerated Mobile Pages)
* PWA (Progressive Web App)
* WML (Wireless Markup Language)
* MML (Mathematical Markup Language)
* cHTML (Compact HTML)
* HDML (Handheld Device Markup Language)


**Hogyan kell elkészíteni az a CSS szelektort, ami kizárólag a két képpont vastagságú kerettel ellátott bekezdésekre hat?**

`p[border-width: 2px] {`

`}`

**Hogyan valósítaná meg egy JavaScript sorban az alábbi esetet: adott egy ’gomb’ azonosítóval rendelkező elem, amelynek a láthatóságát rejtettre szeretnénk állítani.**

`gombElem.style.visibility = 'hidden';`

vagy

`gombElem.style.display = 'none';`

**Mi a reszponzivitás, reszponzív webdesign?**

* **A reszponzivitás egy olyan megközelítés, amely lehetővé teszi a weboldalnak, hogy alkalmazkodjon a különböző eszközök képernyőméretéhez.** A reszponzív webdesign (RWD) egy olyan weboldal-tervezési megközelítés, amely a reszponzívságot használja. **A reszponzív webdesign révén a tartalom dinamikusan változik, mely lehetővé teszi a felhasználók számára optimális és kényelmes böngészési élményt.**

**NPM**

* **Node Package Manager, mely egy csomagkezelő és modulrendszer a JavaScript nyelvhez. A Node.js-hez kapcsolódik.**

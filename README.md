# js

Mini projekat

Napraviti niz ručno popunjen u samom kodu od 3 objekta koji u sebi čuvaju informacije o 3 filma.
Svaki film ima sledeće podatke
- ID
- Naziv
- Žanr
- Režiser
- GlavnaUloga
- IMDB
- Godina
Na stranici prikazati tabelu sa popunjenim podacima generisanim iz javascripta sa podacima iz niza po
uzoru na primere rađene na času.
Na stranici napraviti formu za dodavanje novog filma u tabelu.

Prilikom slanja forme potrebno je da validirate podatke
ID – mora da bude jedinstven
Naziv – mora da sadrži minimum dva karaktera
Glavna uloga i režiser – moraju da se sastoje od makar 2 reči
Žanr – može uzeti samo vrednosti akcija,drama,triler i komedija ( case insensitive )
IMDB – može da uzima vrednosti u opsegu od 1 do 10
Godina – ne sme biti veća od 2022

Ako bilo koji od podataka nije validan, ispisati odgovarajuću poruku.
Ako su svi unosi validni, pokrenuti tajmer od 10 sekundi, prikazati 2 nasumična broja od 1 do 10 i
nasumičnu matematičku operaciju ( +,*,-,/ rezultat deljenja je rezultat celobrojnog deljenja), a zatim
tražiti od korisnika da u input polju unese vrednost rezultata.
Ako je tačan rezultat na vreme poslat, dodati još jedan red u tabelu sa podacima o unetom filmu.
Ako nije ispisati odgovarajuću grešku da odgovor nije validan. Timer je potrebno grafički predstaviti kao
jedan div
Klikom na bilo koji red u tabeli, pozadina tog celog reda se menja naizmenično iz belog u sivo i obrnuto.

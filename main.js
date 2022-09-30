window.onload = function () {

    var nizFilmova = [
        {
            "id" : 1,
            "naziv" : "Klopka",
            "zanr" : "drama",
            "reziser" : "Srdjan Golubovic",
            "glavnaUloga" : "Nebojsa Glogovac",
            "imdbOcena" : 7.9,
            "godina" : 2007
        },{
            "id" : 2,
            "naziv" : "The Platform",
            "zanr" : "triler",
            "reziser" : "Galder Gaztelu-Urrutia",
            "glavnaUloga" : "Ivan Massague",
            "imdbOcena" : 7.0,
            "godina" : 2019
        },{
            "id" : 3,
            "naziv" : "Parasite",
            "zanr" : "komedija",
            "reziser" : "Bong Joon Ho",
            "glavnaUloga" : "Kang-ho Song",
            "imdbOcena" : 8.6,
            "godina" : 2019
        }
    ];
    
    prikaziFilmove();
    
    function prikaziFilmove() {
        let tableHTML = `<tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Zanr</th>
            <th>Reziser</th>
            <th>Glavna uloga</th>
            <th>IMDB</th>
            <th>Godina</th>
        </tr>`;
    
        
        for (var film of nizFilmova) {
            tableHTML += `<tr class="red red-beli">
                    <td>${film.id}</td>
                    <td>${film.naziv}</td>
                    <td>${film.zanr}</td>
                    <td>${film.reziser}</td>
                    <td>${film.glavnaUloga}</td>
                    <td>${film.imdbOcena}</td>
                    <td>${film.godina}</td>
                </tr>`
        }
        document.querySelector("#table").innerHTML = tableHTML;
    }
    
    document.querySelector("#izraz").style.display = "none";
    
    document.querySelector("#form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        let greska = false;
        let noviFilmObj = {
            "id" : 0,
            "naziv" : "",
            "zanr" : "",
            "reziser" : "",
            "glavnaUloga" : "",
            "imdbOcena" : 0,
            "godina" : 0
        };
    
        // uzimanje podataka i slanje na proveru, ako se negde desi greska, let greska se setuje na true
        let valueID = document.querySelector("#inputID").value;
        proveriID(document.querySelector("#inputID"), valueID, document.querySelector("#spanID"));
    
        let valueNaziv = document.querySelector("#inputNaziv").value;
        proveriNaziv(document.querySelector("#inputNaziv"), valueNaziv, document.querySelector("#spanNaziv"));
    
        let valueZanr = document.querySelector("#inputZanr").value;
        proveriZanr(document.querySelector("#inputZanr"), valueZanr, document.querySelector("#spanZanr"));
    
        let valueReziser = document.querySelector("#inputReziser").value;
        proveriRezisera(document.querySelector("#inputReziser"), valueReziser, document.querySelector("#spanReziser"))
    
        let valueGlavnaUloga = document.querySelector("#inputGlavnaUloga").value;
        proveriGlavnogGlumca(document.querySelector("#inputGlavnaUloga"), valueGlavnaUloga, document.querySelector("#spanGlavnaUloga"))
        
        let valueIMDB = document.querySelector("#inputIMDB").value;
        proveriIMDB(document.querySelector("#inputIMDB"), valueIMDB, document.querySelector("#spanIMDB"));
    
        let valueGodina = document.querySelector("#inputGodina").value;
        proveriGodinu(document.querySelector("#inputGodina"), valueGodina, document.querySelector("#spanGodina"));
    
        // ako ne postoji greska
        if(!greska){
            document.querySelector("#izraz").style.display = "block";
            var interval = setInterval(odbrojavanje, 1000)

            let randomBroj1 = Math.floor(Math.random() * 10) + 1;
            let randomBroj2 = Math.floor(Math.random() * 10) + 1; 
            let nizOperacija = ["+", "-", "*", "/"];
            let randomOperacija = Math.floor(Math.random() * 3) + 1; 
            var resenje

            if (randomOperacija == 0) resenje = randomBroj1 + randomBroj2
            if (randomOperacija == 1) resenje = randomBroj1 - randomBroj2
            if (randomOperacija == 2) resenje = randomBroj1 * randomBroj2
            if (randomOperacija == 3) resenje = Math.floor(randomBroj1 / randomBroj2)

            document.querySelector("#teloIzraza").innerText = `${randomBroj1} ${nizOperacija[randomOperacija]} ${randomBroj2}`
            
            document.querySelector("#divOdbrojavanje").innerHTML = '10';
        
            function odbrojavanje() {
                let value = document.querySelector("#divOdbrojavanje").innerHTML
                if (value != "0") {
                    value = parseInt(value); 
                    value--;
                    document.querySelector("#divOdbrojavanje").innerHTML = value;
                }
                else{
                    clearInterval(interval)
                    alert("Vreme je isteklo")
                    document.querySelector("#divOdbrojavanje").innerText = "Odgovor nije validan, podaci nece biti upisani u tabelu";
                    document.querySelector("#izraz").style.display = "none";
                }
            }
        
            document.querySelector("#dugmeRez").addEventListener("click", function(event) {
                if (parseInt(document.querySelector("#rezultat").value) == resenje) {
                    clearInterval(interval)

                    console.log(parseInt(document.querySelector("#rezultat").value))
                    console.log(resenje)

                    document.querySelector("#divOdbrojavanje").innerText = "Odgovor je tacan! Podaci su upisani u tabelu";
                    nizFilmova.push(noviFilmObj);
                    prikaziFilmove();
                    document.querySelector("#izraz").style.display = "none";
                }
                else{
                    clearInterval(interval)
                    document.querySelector("#divOdbrojavanje").innerText = "Odgovor nije tacan!Podaci nece biti upisani u tabelu";
                    document.querySelector("#izraz").style.display = "none";
                }
            })
        }
        
    
    
        // funkcije za validaciju
        function proveriID(input, value, spanError) {
            if (jeLiPrazan(value)) {
                ispisiGresku(input, spanError, "Polje ne sme biti prazno")
                return 0;
            }
            if (!jeLiBroj(value)) {
                ispisiGresku(input, spanError, "ID mora biti broj")
                return 0;
            }
            for (const film of nizFilmova) {
                
                if (film.id == value) {
                    ispisiGresku(input, spanError, "ID mora biti jedinstven")
                    return 0;
                }
                else {
                    noviFilmObj.id = value
                    spanError.innerHTML = "";
                }
            }
        }
        function proveriNaziv(input, value, spanError) {
            if (jeLiPrazan(value)) {
                ispisiGresku(input, spanError, "Polje ne sme biti prazno")
                return 0;
            }
            if (value.length < 2) {
                ispisiGresku(input, spanError, "Naziv mora da ima bar 2 karaktera")
                return 0;
            }
            noviFilmObj.naziv = value
            spanError.innerHTML = "";
        }
        function proveriZanr(input, value, spanError) {
            if (jeLiPrazan(value)) {
                ispisiGresku(input, spanError, "Polje ne sme biti prazno")
                return 0;
            }
            //ako je uneo velikim slovima i to priznajemo(po tekstu zadatka)
            value = value.toLowerCase();
            if (value != 'akcija' && value != 'drama' && value != 'triler' && value != 'komedija') {
                ispisiGresku(input, spanError, "Zanr mora biti akcija, drama, komedija ili triler")
                return 0;
            }
            noviFilmObj.zanr = value
            spanError.innerHTML = "";
        }
        function proveriRezisera(input, value, spanError){
            if (jeLiPrazan(value)) {
                ispisiGresku(input, spanError, "Polje ne sme biti prazno")
                return 0;
            }
            if (value.length < 5) {
                ispisiGresku(input, spanError, "Ime i prezime rezisera moraju imati bar 2 karaktera")
                return 0;
            }
            
            // string delimo na niz reci po "space" karakteru
            let reci = value.split(' ');
            if (reci.length == 1) {
                ispisiGresku(input, spanError, "Ime i prezime rezisera moraju imati bar po 2 karaktera")
                return 0;
            }
            for (let i = 0; i < reci.length; i++) {
                if (reci[i].length < 2) {
                    ispisiGresku(input, spanError, "Ime i prezime rezisera moraju imati bar po 2 karaktera")
                    return 0;
                }
            }
            noviFilmObj.reziser = value
            spanError.innerHTML = "";
        }
        function proveriGlavnogGlumca(input, value, spanError){
            if (jeLiPrazan(value)) {
                ispisiGresku(input, spanError, "Polje ne sme biti prazno")
                return 0;
            }
            if (value.length < 5) {
                ispisiGresku(input, spanError, "Ime i prezime glumca moraju imati bar 2 karaktera")
                return 0;
            }
            
            // string delimo na niz reci po "space" karakteru
            let reci = value.split(' ');
            if (reci.length == 1) {
                ispisiGresku(input, spanError, "Ime i prezime glumca moraju imati bar po 2 karaktera")
                return 0;
            }
            for (let i = 0; i < reci.length; i++) {
                if (reci[i].length < 2) {
                    ispisiGresku(input, spanError, "Ime i prezime glumca moraju imati bar po 2 karaktera")
                    return 0;
                }
            }
            noviFilmObj.glavnaUloga = value
            spanError.innerHTML = "";
        }
        function proveriIMDB(input, value, spanError) {
            if (jeLiPrazan(value)) {
                ispisiGresku(input, spanError, "Polje ne sme biti prazno")
                return 0;
            }
            if (isNaN(value) || (parseFloat(value) < 1 || parseFloat(value) > 10)) {
                ispisiGresku(input, spanError, "IMDB ocena mora biti broj od 1 do 10")
                return 0;
            }
            noviFilmObj.imdbOcena = value
            spanError.innerHTML = "";
        }
        function proveriGodinu(input, value, spanError) {
            if (jeLiPrazan(value)) {
                ispisiGresku(input, spanError, "Polje ne sme biti prazno")
                return 0;
            }
            if (jeLiBroj(value)) {
                if (parseInt(value) > 2022) {
                    ispisiGresku(input, spanError, "Godina mora biti manja od 2022")
                    return 0;
                }
                noviFilmObj.godina = value
                spanError.innerHTML = "";
            }
            else{
                ispisiGresku(input, spanError, "Neispravno unet podatak")
                return 0;
            }
        }
    
    
    
    
        //pomocne funkcije
        function ispisiGresku(input, spanError, stringGreska) {
            spanError.innerText = stringGreska;
            input.value = "";
            greska = true;
        }
        function jeLiBroj(value) {
            if (isNaN(value) || value.includes(".")) {
                return 0;
            }
            return 1;
        }
        function jeLiPrazan(value) {
            if(value.length == 0) {
                return 1
            }
            return 0;  
        }
    
    })
    
    // bojenje redova na klik
    var kolekcija = document.getElementsByClassName("red");
    
    for (var i = 0 ; i < kolekcija.length; i++) {
        kolekcija[i].addEventListener('click' , promeniPozadinu) ; 
    }
    function promeniPozadinu(){
        console.log(this.classList);
        if(this.classList.contains("red-beli")){
            this.classList.remove("red-beli")
            this.classList.add("red-sivi")
        }
        else{
            this.classList.remove("red-sivi")
            this.classList.add("red-beli")
        }
    }
    
    }
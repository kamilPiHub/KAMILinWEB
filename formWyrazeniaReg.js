function sprawdzaniePoprawnosci() {
  
    poprawne = true; 

    if (!sprawdzImie()) {
        poprawne = false;
    }

    if (!sprawdzNazwisko()) {
        poprawne = false;
    }

    if (!sprawdzUlica()) {
        poprawne = false;
    }

    if (!sprawdzNumerDomu()) {
        poprawne = false;
    }

    if (!sprawdzNumerMieszkania()) {
        poprawne = false;
    }

    if (!sprawdzTelefon()) {
        poprawne = false;
    }

    if (!sprawdzDataUrodzenia()) {
        poprawne = false;
    }
   
    if (!sprawdzPlec()) {
        poprawne = false;
    }

    if (!sprawdzMiasto()) {
        poprawne = false;
    }

    return poprawne;  // - jesli przejdzie przez wszytskie z true to znaczy ze formularz jest git
}

function sprawdzImie() {
    obj = document.getElementById('imie');
    txt = obj.value;
    Wyrazenie = /^[a-z]+$/g;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = ""; 
        return true;
    } else {
        obj.style.backgroundColor = "red"; 
        return false;
    }
}

function sprawdzNazwisko() {
    obj = document.getElementById('nazwisko');
    txt = obj.value;
    Wyrazenie = /^[a-z]+$/g;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = "";
        return true;
    } else {
        obj.style.backgroundColor = "red";
        return false;
    }
}


function sprawdzUlica() {
    obj = document.getElementById('ulica');
    txt = obj.value;
    Wyrazenie = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\s]+$/;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = "";
        return true;
    } else {
        obj.style.backgroundColor = "red";
        return false;
    }
}

function sprawdzNumerDomu() {
    obj = document.getElementById('numer_domu');
    txt = obj.value;
    Wyrazenie = /^[0-9A-Za-z]+$/;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = "";
        return true;
    } else {
        obj.style.backgroundColor = "red";
        return false;
    }
}

function sprawdzNumerMieszkania() {
    obj = document.getElementById('numer_mieszkania');
    txt = obj.value;
    Wyrazenie = /^[0-9A-Za-z]*$/;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = "";
        return true;
    } else {
        obj.style.backgroundColor = "red";
        return false;
    }
}

function sprawdzTelefon() {
    obj = document.getElementById('telefon');
    txt = obj.value;
    Wyrazenie = /^\d{9}$|^(\d{3}[-.\s]?\d{3}[-.\s]?\d{3})$/;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = "";
        return true;
    } else {
        obj.style.backgroundColor = "red";
        return false;
    }
}

function sprawdzDataUrodzenia() {
    var obj = document.getElementById('data_urodzenia');
    var txt = obj.value;
    var Wyrazenie = /^\d{4}-\d{2}-\d{2}$/;
    var wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        
        var dataUrodzenia = new Date(txt);
        var dzisiaj = new Date();

        
        dzisiaj = new Date(dzisiaj.getFullYear(), dzisiaj.getMonth(), dzisiaj.getDate()); 

        if (dataUrodzenia > dzisiaj) {
            obj.style.backgroundColor = "red";
            return false;
        } 
        else {
            obj.style.backgroundColor = ""; 
            return true;
        }
    
}
}

function sprawdzPlec() {
    obj = document.getElementById('plec');
    txt = obj.value;
    Wyrazenie = /^(mezczyzna|kobieta|inna)$/;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = "";
        return true;
    } else {
        obj.style.backgroundColor = "red";
        return false;
    }
}

function sprawdzMiasto() {
    obj = document.getElementById('miasto');
    txt = obj.value;
    Wyrazenie = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]+$/;
    wynik = Wyrazenie.test(txt);
    
    if (wynik) {
        obj.style.backgroundColor = "";
        return true;
    } else {
        obj.style.backgroundColor = "red";
        return false;
    }
}


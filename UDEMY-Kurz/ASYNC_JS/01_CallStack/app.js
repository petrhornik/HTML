const nasobeni = (x, y) => { // volána v rámci mocnina, takže se vloží do call stacku nad ni
    return x * y;
};

const mocnina = x => nasobeni(x, x); // tato fce. je volána v rámci jiné fce., takže se vloží do call stacku nad ni

const jePravouhlyTrojuhelnik = (a, b, c) => {  // vloží se do stacku a začne se po zavolání provádět
    mocnina(a) + mocnina(b) === mocnina(c);
};

jePravouhlyTrojuhelnik(3, 4, 5); // přivolá do stacku fci. jePravouhlyTrojuhelnik()
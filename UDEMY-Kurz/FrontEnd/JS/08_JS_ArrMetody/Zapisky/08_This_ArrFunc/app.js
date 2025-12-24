// ukázka this v arr func.

const osoba = {
  fName: "Jakub",
  lName: "Doležal",
  fullName: function () {
    result = `Jmenuji se: ${this.fName + " " + this.lName}!`;
    console.log(result); // musím použít klas. fci arr by zde nefungovala!
  }, // window objekt neobsahuje fName ani lName - vracelo by se furt undefined
  shoutName: function () {
    setTimeout(() => {
      // zde je potřeba arr func pro funkčnost metody setTimeout
      // odkazujeme se nadřazený scope pro function scope shoutName
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};

osoba.fullName();
osoba.shoutName();

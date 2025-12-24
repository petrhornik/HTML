console.log("NAZDAR!!! posílám request na server");

setTimeout(() => { // jedá se o WebAPI, běží mimo stack přimo v prohlížeči, čeká 2s a poté se vloží jako callback
    console.log("Ahoj po 2s - odpověď ze serveru dorazila"); //během scripti se na setTimeout v rámci scriptu čeká, ale neblokuje to jeho běh
}, 2000);

console.log("KONEC skriptu - mezitím čekám na odpověď ze serveru");
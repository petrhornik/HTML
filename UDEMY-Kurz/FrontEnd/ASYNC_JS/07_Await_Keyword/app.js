const delayedColorChange = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
};

// OLD WAY - PROMISE CHAINING
/* delayedColorChange("red", 1000)
.then(() => {
    return delayedColorChange("purple", 1000);
})
.then(() => {
    return delayedColorChange("yellow", 1000);
})
.then(() => {
    return delayedColorChange("pink", 1000);
})
.then(() => {
    return delayedColorChange("wheat", 1000);
}); */

// NEW WAY - ASYNC AWAIT
async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000); // vždy čeká na dokončení předchozího await
  console.log("HELLO");
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE";
}

/* rainbow().then((data) => {
    console.log(data, "END OF COLOR CHANGING");
}); */

const doColorChange = async () => {
    await rainbow()
    console.log("HOTOVO")
};

doColorChange();

// Requesty a await

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    let data1 = await fakeRequestPromise("/page1");
    console.log(data1)
}

makeTwoRequests()
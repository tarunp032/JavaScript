function getallo(callback) {
  setTimeout(() => {
    const allo = "🥔";
    console.log("here we got the allo", allo);
    callback(allo);
  }, 5000);
}

function makedough(allo, callback) {
  setTimeout(() => {
    const dough = allo + "🍩";
    console.log("dough is ready and here is the raw dough", dough);
    callback(dough);
  }, 3000);
}

function makeAlloKulcha(dough, callback) {
  setTimeout(() => {
    const kulcha = dough + "🥪";
    console.log("kulcha is ready", kulcha);
    callback(kulcha);
  }, 5000);
}

getallo((allo) => {
  makedough(allo, (dough) => {
    makeAlloKulcha(dough, (kulcha) => {
      console.log("Kulcha is Served");
    });
  });
});

function getCCertificate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("C Certificate received 🧾");
      resolve("C Certificate");
    }, 1000);
  });
}

function getCPPcertificate(cCert) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("C++ Certificate received 🧾");
      resolve({ cCert, cppCert: "C++ Certificate" });
    }, 1000);
  });
}

function getReactCertificate(cObj) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("React Certificate received 🧾");
      resolve({ ...cObj, reactCert: "React Certificate" });
    }, 1000);
  });
}

// Execution
getCCertificate()
  .then(getCPPcertificate)
  .then(getReactCertificate)
  .then((finalCertificates) => {
    console.log("🎓 Final Certificates:", finalCertificates);
  });
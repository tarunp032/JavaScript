function getCCertificate(callback) {
  setTimeout(() => {
    console.log("C Certificate received 🧾");
    callback("C Certificate");
  }, 1000);
}

function getCPPcertificate(cCert, callback) {
  setTimeout(() => {
    console.log("C++ Certificate received 🧾");
    callback({ cCert, cppCert: "C++ Certificate" });
  }, 1000);
}

function getReactCertificate(cObj, callback) {
  setTimeout(() => {
    console.log("React Certificate received 🧾");
    callback({ ...cObj, reactCert: "React Certificate" });
  }, 1000);
}

// Execution
getCCertificate((cCert) => {
  getCPPcertificate(cCert, (cppCombined) => {
    getReactCertificate(cppCombined, (finalCertificates) => {
      console.log("🎓 Final Certificates:", finalCertificates);
    });
  });
});

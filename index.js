//brazil
let getbrazilTime = function () {
  document.querySelector("#brazilTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "America/Sao_Paulo", timeStyle: "medium", hourCycle: "h12" }
  );
};

//los angeles
let getlosangelesTime = function () {
  document.querySelector("#losangelesTime").innerHTML =
    new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      timeStyle: "medium",
      hourCycle: "h12",
    });
};

//sweden
let getswedenTime = function () {
  document.querySelector("#swedenTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Europe/Berlin", timeStyle: "medium", hourCycle: "h12" }
  );
};

//spain
let getspainTime = function () {
  document.querySelector("#spainTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Europe/Madrid", timeStyle: "medium", hourCycle: "h12" }
  );
};

// iceland
let geticelandTime = function () {
  document.querySelector("#icelandTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Atlantic/Reykjavik", timeStyle: "medium", hourCycle: "h12" }
  );
};

//united kingdom
let getunitedkingdomTime = function () {
  document.querySelector("#unitedkingdomTime").innerHTML =
    new Date().toLocaleString("en-US", {
      timeZone: "Europe/London",
      timeStyle: "medium",
      hourCycle: "h12",
    });
};

//australia
let getaustraliaTime = function () {
  document.querySelector("#australiaTime").innerHTML =
    new Date().toLocaleString("en-US", {
      timeZone: "Australia/Sydney",
      timeStyle: "medium",
      hourCycle: "h12",
    });
};

//poland
let getpolandTimeTime = function () {
  document.querySelector("#polandTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Europe/Warsaw", timeStyle: "medium", hourCycle: "h12" }
  );
};

//japon
let getjaponTime = function () {
  document.querySelector("#japonTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Asia/Tokyo", timeStyle: "medium", hourCycle: "h12" }
  );
};

//lebanon
let getlebanonTime = function () {
  document.querySelector("#lebanonTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Asia/Beirut", timeStyle: "medium", hourCycle: "h12" }
  );
};

//germany
let getgermanyTime = function () {
  document.querySelector("#germanyTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Europe/Berlin", timeStyle: "medium", hourCycle: "h12" }
  );
};

//china chinaTime
let getchinaTime = function () {
  document.querySelector("#chinaTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Asia/Shanghai", timeStyle: "medium", hourCycle: "h12" }
  );
};

//uae
let getuaeTime = function () {
  document.querySelector("#uaeTime").innerHTML = new Date().toLocaleString(
    "en-US",
    { timeZone: "Asia/Dubai", timeStyle: "medium", hourCycle: "h12" }
  );
};

//greenland
let getgreenlandTime = function () {
  document.querySelector("#greenlandTime").innerHTML =
    new Date().toLocaleString("en-US", {
      timeZone: "America/Godthab",
      timeStyle: "medium",
      hourCycle: "h12",
    });
};

//running functions

function main() {
  getbrazilTime();
  setInterval(getbrazilTime, 1000);

  getlosangelesTime();
  setInterval(getlosangelesTime, 1000);

  getswedenTime();
  setInterval(getswedenTime, 1000);

  getspainTime();
  setInterval(getspainTime, 1000);

  geticelandTime();
  setInterval(geticelandTime, 1000);

  getunitedkingdomTime();
  setInterval(getunitedkingdomTime, 1000);

  getaustraliaTime();
  setInterval(getaustraliaTime, 1000);

  getpolandTimeTime();
  setInterval(getpolandTimeTime, 1000);

  getjaponTime();
  setInterval(getjaponTime, 1000);

  getlebanonTime();
  setInterval(getlebanonTime, 1000);

  getgermanyTime();
  setInterval(getgermanyTime, 1000);

  getchinaTime();
  setInterval(getchinaTime, 1000);

  getuaeTime();
  setInterval(getuaeTime, 1000);

  getgreenlandTime();
  setInterval(getgreenlandTime, 1000);
}

main();

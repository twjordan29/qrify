function generateQR() {
  const qrData = document.getElementById("qrData").value;
  const qrSize = document.getElementById("qrSize").value;
  const qrColor = document.getElementById("qrColor").value;
  const qrBackgroundColor = document.getElementById("qrBackgroundColor").value;
  const error = document.getElementById("error");

  if (qrData.trim() === "") {
    error.style.display = "block";
    error.innerHTML = "Please enter a valid URL";
    setTimeout(() => {
      error.style.display = "none";
    }, 5000);
    return;
  }

  // Remove the old QR code if exists
  const qrCodeContainer = document.getElementById("qrCode");
  qrCodeContainer.innerHTML = "";

  // Generate the new QR code
  const qrCode = new QRCode(qrCodeContainer, {
    text: qrData,
    width: qrSize,
    height: qrSize,
    colorDark: qrColor,
    colorLight: qrBackgroundColor,
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("downloadBtn").style.display = "block"; // Show download button

  // Apply inline CSS for center alignment to the img element
  const qrCodeImage = qrCodeContainer.querySelector("img");
  if (qrCodeImage) {
    qrCodeImage.style.textAlign = "center";
  }
}

const urlQrBtn = document.getElementById("urlQrBtn");
const waQrBtn = document.getElementById("waQrBtn");
const urlQrDiv = document.getElementById("urlQrDiv");
const waQrDiv = document.getElementById("waQrDiv");
const wifiQrBtn = document.getElementById("wifiQrBtn");
const wifiQrDiv = document.getElementById("wifiQrDiv");
const newQrBtns = document.querySelectorAll(".new-qr");
const qrSrv = document.getElementById("qrSrv");
const qrSrv2 = document.getElementById("qrSrv2");
const phoneQrBtn = document.getElementById("phoneQrBtn");
const phoneQrDiv = document.getElementById("phoneQrDiv");
const emailQrBtn = document.getElementById("emailQrBtn");
const emailQrDiv = document.getElementById("emailQrDiv");
const vCardBtn = document.getElementById("vCardQrBtn");
const vCardDiv = document.getElementById("vCardQrDiv");

urlQrBtn.addEventListener("click", () => {
  urlQrDiv.style.display = "block";
  waQrDiv.style.display = "none";
  wifiQrDiv.style.display = "none";
  qrSrv.style.display = "none";
  phoneQrDiv.style.display = "none";
  qrSrv2.style.display = "none";
  emailQrDiv.style.display = "none";
  vCardDiv.style.display = "none";
});

waQrBtn.addEventListener("click", () => {
  waQrDiv.style.display = "block";
  urlQrDiv.style.display = "none";
  wifiQrDiv.style.display = "none";
  qrSrv.style.display = "none";
  phoneQrDiv.style.display = "none";
  qrSrv2.style.display = "none";
  emailQrDiv.style.display = "none";
  vCardDiv.style.display = "none";
});

wifiQrBtn.addEventListener("click", () => {
  wifiQrDiv.style.display = "block";
  waQrDiv.style.display = "none";
  urlQrDiv.style.display = "none";
  qrSrv.style.display = "none";
  phoneQrDiv.style.display = "none";
  qrSrv2.style.display = "none";
  emailQrDiv.style.display = "none";
  vCardDiv.style.display = "none";
});

phoneQrBtn.addEventListener("click", () => {
  phoneQrDiv.style.display = "block";
  wifiQrDiv.style.display = "none";
  waQrDiv.style.display = "none";
  urlQrDiv.style.display = "none";
  qrSrv.style.display = "none";
  qrSrv2.style.display = "none";
  emailQrDiv.style.display = "none";
  vCardDiv.style.display = "none";
});

emailQrBtn.addEventListener("click", () => {
  emailQrDiv.style.display = "block";
  phoneQrDiv.style.display = "none";
  wifiQrDiv.style.display = "none";
  waQrDiv.style.display = "none";
  urlQrDiv.style.display = "none";
  qrSrv.style.display = "none";
  qrSrv2.style.display = "none";
  vCardDiv.style.display = "none";
});

vCardBtn.addEventListener("click", () => {
  vCardDiv.style.display = "block";
  emailQrDiv.style.display = "none";
  phoneQrDiv.style.display = "none";
  wifiQrDiv.style.display = "none";
  waQrDiv.style.display = "none";
  urlQrDiv.style.display = "none";
  qrSrv.style.display = "none";
  qrSrv2.style.display = "none";
});

function generateWhatsAppQR() {
  const phoneNumber = document.getElementById("phoneNumber").value;
  const message = document.getElementById("message").value;
  const waqrSize = document.getElementById("waqrSize").value;
  const waqrColor = document.getElementById("waqrColor").value;
  const waqrBackgroundColor = document.getElementById(
    "waqrBackgroundColor"
  ).value;
  const waerror = document.getElementById("waerror");

  if (phoneNumber.trim() === "" || message.trim() === "") {
    waerror.style.display = "block";
    waerror.innerHTML = "Please enter a valid phone number and message.";
    setTimeout(() => {
      waerror.style.display = "none";
    }, 5000);
    return;
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const waqrCodeContainer = document.getElementById("waQrCode");
  waqrCodeContainer.innerHTML = "";

  const waqrCode = new QRCode(waqrCodeContainer, {
    text: whatsappUrl,
    width: waqrSize,
    height: waqrSize,
    colorDark: waqrColor,
    colorLight: waqrBackgroundColor,
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("waDownloadBtn").style.display = "block";
}

function generateWiFiQR() {
  const wifiSSID = document.getElementById("wifiSSID").value;
  const wifiPassword = document.getElementById("wifiPassword").value;
  const wifiEncryption = document.getElementById("wifiEncryption").value;
  const wifiError = document.getElementById("wifiError");
  const wifiqrBackgroundColor = document.getElementById(
    "wifiqrBackgroundColor"
  ).value;
  const wifiqrColor = document.getElementById("wifiqrColor").value;
  const wifiqrSize = document.getElementById("wifiqrSize").value;

  if (wifiSSID.trim() === "" || wifiPassword.trim() === "") {
    wifiError.style.display = "block";
    wifiError.innerHTML = "Please enter a valid SSID and password.";
    setTimeout(() => {
      wifiError.style.display = "none";
    }, 5000);
    return;
  }

  const wifiNetwork = `WIFI:S:${wifiSSID};T:${wifiEncryption};P:${wifiPassword};;`;

  const wifiQrCodeContainer = document.getElementById("wifiQrCode");
  wifiQrCodeContainer.innerHTML = ""; // Clear previous QR code

  // Generate QR code
  const wifiQrCode = new QRCode(wifiQrCodeContainer, {
    text: wifiNetwork,
    width: wifiqrSize,
    height: wifiqrSize,
    colorDark: wifiqrColor,
    colorLight: wifiqrBackgroundColor,
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("wifiDownloadBtn").style.display = "block"; // Show download button
}

function downloadWiFiQR() {
  const wifiQrCodeElement = document.querySelector("#wifiQrCode img");
  const downloadLink = document.createElement("a");
  downloadLink.href = wifiQrCodeElement.src;
  downloadLink.download = "wifi_qr_code.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function downloadWhatsAppQR() {
  const waQrCodeElement = document.querySelector("#waQrCode img");
  const downloadLink = document.createElement("a");
  downloadLink.href = waQrCodeElement.src;
  downloadLink.download = "whatsapp_qr_code.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function generatePhoneQR() {
  const qrphoneNumber = document.getElementById("qrphoneNumber").value;
  const countryCode = document.getElementById("countryCode").value;
  const phone = `${countryCode}${qrphoneNumber}`;
  const phoneqrSize = document.getElementById("phoneqrSize").value;
  const phoneqrColor = document.getElementById("phoneqrColor").value;
  const phoneqrBackgroundColor = document.getElementById(
    "wifiqrBackgroundColor"
  ).value;
  const phoneerror = document.getElementById("phoneError");

  if (phone.trim() === "") {
    phoneerror.style.display = "block";
    phoneerror.innerHTML = "Please enter a valid phone number.";
    setTimeout(() => {
      phoneerror.style.display = "none";
    }, 5000);
    return;
  }

  const phoneUrl = `tel:${phone}`;

  const phoneqrCodeContainer = document.getElementById("phoneQrCode");
  phoneqrCodeContainer.innerHTML = "";

  const phoneqrCode = new QRCode(phoneqrCodeContainer, {
    text: phoneUrl,
    width: phoneqrSize,
    height: phoneqrSize,
    colorDark: phoneqrColor,
    colorLight: phoneqrBackgroundColor,
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("phoneDownloadBtn").style.display = "block";
}

function downloadPhoneQR() {
  const phoneQrCodeElement = document.querySelector("#phoneQrCode img");
  const downloadLink = document.createElement("a");
  downloadLink.href = phoneQrCodeElement.src;
  downloadLink.download = "phone_qr_code.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function generateEmailQR() {
  const email = document.getElementById("email").value;
  const subject = document.getElementById("emailSubject").value;
  const body = document.getElementById("emailBody").value;
  const emailqrSize = document.getElementById("emailqrSize").value;
  const emailqrColor = document.getElementById("emailqrColor").value;
  const emailqrBackgroundColor = document.getElementById(
    "emailqrBackgroundColor"
  ).value;
  const emailerror = document.getElementById("emailError");

  if (email.trim() === "") {
    emailerror.style.display = "block";
    emailerror.innerHTML = "Please enter a valid email.";
    setTimeout(() => {
      emailerror.style.display = "none";
    }, 5000);
    return;
  }

  const emailUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  const emailqrCodeContainer = document.getElementById("emailQrCode");
  emailqrCodeContainer.innerHTML = "";

  const emailqrCode = new QRCode(emailqrCodeContainer, {
    text: emailUrl,
    width: emailqrSize,
    height: emailqrSize,
    colorDark: emailqrColor,
    colorLight: emailqrBackgroundColor,
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("emailDownloadBtn").style.display = "block";
}

function downloadEmailQR() {
  const emailQrCodeElement = document.querySelector("#emailQrCode img");
  const downloadLink = document.createElement("a");
  downloadLink.href = emailQrCodeElement.src;
  downloadLink.download = "email_qr_code.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function generateVCardQR() {
  // Retrieve values from input fields
  const vfirstName = document.getElementById("vfirstName").value;
  const vlastName = document.getElementById("vlastName").value;
  const vorganization = document.getElementById("vorganization").value;
  const vjobTitle = document.getElementById("vjobTitle").value;
  const vTelType = document.getElementById("vTelType").value;
  const vphone = document.getElementById("vphone").value;
  const vemail = document.getElementById("vemail").value;
  const vwebsite = document.getElementById("vwebsite").value;
  const vaddress = document.getElementById("vaddress").value;
  const vQrSize = document.getElementById("vCardqrSize").value;
  const vQrColor = document.getElementById("vCardqrColor").value;
  const vQrBackgroundColor = document.getElementById(
    "vCardqrBackgroundColor"
  ).value;

  // Construct vCard data
  const vCardData = `BEGIN:VCARD\r\n
VERSION:3.0\r\n
N:${vlastName};${vfirstName}\r\n
FN:${vfirstName} ${vlastName}\r\n
ORG:${vorganization}\r\n
TITLE:${vjobTitle}\r\n
TEL;TYPE=${vTelType}:${vphone}\r\n
EMAIL:${vemail}\r\n
URL:${vwebsite}\r\n
ADR:${vaddress}\r\n
END:VCARD`;

  // Generate vCard QR code using QRCode.js
  const vCardQrCodeContainer = document.getElementById("vCardQrCode");
  vCardQrCodeContainer.innerHTML = "";

  // Create QR code instance
  const vCardqrCode = new QRCode(vCardQrCodeContainer, {
    text: vCardData,
    width: vQrSize,
    height: vQrSize,
    colorDark: vQrColor,
    colorLight: vQrBackgroundColor,
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Show download button
  const downloadBtn = document.getElementById("vCardDownloadBtn");
  downloadBtn.style.display = "block";
}

function downloadVCardQR() {
  const vCardQrCodeElement = document.querySelector("#vCardQrCode img");
  const downloadLink = document.createElement("a");
  downloadLink.href = vCardQrCodeElement.src;
  downloadLink.download = "vCard_qr_code.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

newQrBtns.forEach((button) => {
  button.addEventListener("click", () => {
    location.reload();
  });
});

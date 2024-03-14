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

urlQrBtn.addEventListener("click", () => {
  urlQrDiv.style.display = "block";
  waQrDiv.style.display = "none";
});

waQrBtn.addEventListener("click", () => {
  waQrDiv.style.display = "block";
  urlQrDiv.style.display = "none";
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

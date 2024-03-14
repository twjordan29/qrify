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

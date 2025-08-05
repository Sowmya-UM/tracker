function generateQRCode() {
    // Fixed URL
    const url = "https://pet-qr-tracker.vercel.app/";

    // Get the QR code container
    const qrcodeContainer = document.getElementById('qrcode');

    // Clear previous QR code, if any
    qrcodeContainer.innerHTML = '';

    // Generate QR code for the fixed URL
    const qrcode = new QRCode(qrcodeContainer, {
        text: url,
        width: 128,
        height: 128
    });
}

// Initial generation when the page loads
generateQRCode();
const baseURL = "https://iraqisurvey.github.io/iq/graduate.html"; // رابط GitHub Pages

function generateAndSaveQRCode() {
    const studentName = document.getElementById("studentName").value.trim();
    if (studentName === "") {
        alert("الرجاء إدخال اسم الطالب");
        return;
    }
    
    const qrLink = `${baseURL}?name=${encodeURIComponent(studentName)}`;

    // توليد رمز QR
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, {
        text: qrLink,
        width: 128,
        height: 128
    });

    // إظهار رابط التحميل
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = qrLink;
    downloadLink.style.display = "block";
    
    // إضافة الطالب إلى قائمة الخريجين
    addGraduateToList(studentName, qrLink);
}

function addGraduateToList(name, qrLink) {
    const graduatesList = document.getElementById("graduatesList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${name} - <a href="${qrLink}" target="_blank">عرض الشهادة</a>`;
    graduatesList.appendChild(listItem);
}

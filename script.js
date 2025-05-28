
const form = document.getElementById("employeeForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value });

    fetch("YOUR_GOOGLE_SCRIPT_URL_HERE", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    responseMsg.textContent = "تم إرسال البيانات بنجاح!";
    form.reset();
});

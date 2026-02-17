function genOtp() {
    let size = Number(document.getElementById("size").value);
    let otpBox = document.getElementById("otp");

    if (size !== 4 && size !== 6) {
        otpBox.innerText = "Only 4 or 6 allowed";
        return;
    }

    let otp = "";
    for (let i = 0; i < size; i++) {
        otp += Math.floor(Math.random() * 10 );
    }

    otpBox.innerText = otp;
}


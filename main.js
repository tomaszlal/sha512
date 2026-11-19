const passwordInput = document.getElementById('passwordInput');
const resultBox = document.getElementById('resultBox');
const bruteResultBox = document.getElementById('bruteResultBox');
const passwordLength = document.getElementById('passwordLength');
const useLower = document.getElementById('useLower');
const useUpper = document.getElementById('useUpper');
const useNumbers = document.getElementById('useNumbers');
const useSpecial = document.getElementById('useSpecial');



function hashPassword() {
    const haslo = passwordInput.value;
    console.log(haslo);
    const hash = sha512(haslo);
    console.log(hash);
    resultBox.textContent = hash;
}

function bruteForceHashByFor() {
    if (resultBox.textContent.length < 128) {
        return;
    }

    const passwordLen = Number(passwordLength.value);
    const hash = resultBox.textContent;
    const smallCharset = "abcdefghijklmnopqrstuvwxyz";
    const bigCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharset = "0123456789";
    const specialCharset = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const charset = numberCharset + smallCharset;// + bigCharset +  specialCharset;

    // haslo z 1 znaku
    for (let i = 0; i < charset.length; i++) {
        const p = sha512(charset[i]);
        if (p === hash) {
            bruteResultBox.textContent = i;
            return;
        }
    }
    //haslo z 2 znakow
    if (passwordLen >= 2) {
        for (let i = 0; i < charset.length; i++) {
            for (let j = 0; j < charset.length; j++) {
                const password = charset[i] + charset[j];
                const p = sha512(password);
                if (p === hash) {
                    bruteResultBox.textContent = password;
                    return;
                }
            }
        }
    }
    //haslo z 3 znakow
    if (passwordLen >= 3) {
        for (let i = 0; i < charset.length; i++) {
            for (let j = 0; j < charset.length; j++) {
                for (let k = 0; k < charset.length; k++) {
                    const password = charset[i] + charset[j] + charset[k];
                    const p = sha512(password);
                    if (p === hash) {
                        bruteResultBox.textContent = password;
                        return;
                    }
                }
            }
        }
    }
    // hasło z 4 znaków
    if (passwordLen >= 4) {
        for (let i = 0; i < charset.length; i++) {
            for (let j = 0; j < charset.length; j++) {
                for (let k = 0; k < charset.length; k++) {
                    for (let l = 0; l < charset.length; l++) {
                        const password = charset[i] + charset[j] + charset[k] + charset[l];
                        const p = sha512(password);
                        if (p === hash) {
                            bruteResultBox.textContent = password;
                            return;
                        }
                    }
                }
            }
        }
    }
    // hasło z 5 znaków
    if (passwordLen >= 5) {
        for (let i = 0; i < charset.length; i++) {
            for (let j = 0; j < charset.length; j++) {
                for (let k = 0; k < charset.length; k++) {
                    for (let l = 0; l < charset.length; l++) {
                        for (let m = 0; m < charset.length; m++) {
                            const password = charset[i] + charset[j] + charset[k] + charset[l] + charset[m];
                            const p = sha512(password);
                            if (p === hash) {
                                bruteResultBox.textContent = password;
                                return;
                            }
                        }
                    }
                }
            }
        }
    }

     bruteResultBox.textContent = "NIE WYGENEROWANO";
}
const button_element = document.querySelector(".button");

const input_element = document.querySelector(".input");

const copy_icon_element = document.querySelector(".fa-copy");

const alert_container_element = document.querySelector(".alert_container");

// Adding Event listeners
button_element.addEventListener("click", () => {
    // console.log("clicked");
    createPassword();
})

copy_icon_element.addEventListener("click", () => {
    copyPassword();
    if (input_element.value) {
        alert_container_element.classList.remove("active");
        setTimeout(() => {
            alert_container_element.classList.add("active");
        }, 2000);
    };
})

// Adding functions
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNum, randomNum + 1);
        // console.log(randomNum, password);
    }
    input_element.value = password;

}

function copyPassword() {
    input_element.select();
    navigator.clipboard.writeText(input_element.value);
    // alert_container_element.innerText = "Password copied"

}
let screen = document.getElementById("display");

function press(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "خطأ";
    }
}

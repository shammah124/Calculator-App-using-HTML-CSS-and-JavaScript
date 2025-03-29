// Select the screen input element
let screenInput = document.querySelector(".screenText");

// Select all keys
let keys = document.querySelectorAll(".key");

// Variable to hold the current input
let input = "";

// Adjust this based on your display size
let maxLength = 20;

// Add event listeners to all keys
keys.forEach(key => {
    key.addEventListener("click", () => {
        let keyValue = key.textContent;

        // Checking for the equal sign to equal things up
        if (keyValue === "=") {
            try {
                input = eval(input).toString();
                if (input.length > maxLength) {
                    // Truncate the result to fit the maximum length of the screen size
                    input = input.substring(0, maxLength);
                }
            } catch (error) {
                input = "Error"; //To check when there is an error with the keyValue and the = sign
            }
        } else if (keyValue === "Clear") {
            input = ""; //Clears the screenInput or input
        } else {
            if (input.length < maxLength) {
                // Prevents adding more characters than allowed
                input += keyValue;
            }
        }
        // Update the Screen Input
        screenInput.textContent = input;
    });
});

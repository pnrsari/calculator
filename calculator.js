 $(document).ready(function () {
    let currentInput = '';
    let operatorPressed = false;

    // Handle button clicks
    $(".btn").click(function () {
        const value = $(this).text();

        // Handle clear
        if (value === 'C') {
            currentInput = '';
            $("#display").val('');
        }
        // Handle equal
        else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString(); // Evaluate the expression
                $("#display").val(currentInput);
            } catch (error) {
                $("#display").val('Error');
                currentInput = '';
            }
        }
        // Handle operators and numbers
        else {
            // Prevent multiple operators
            if (["/", "*", "-", "+"].includes(value) && operatorPressed) {
                return;
            }
            currentInput += value;
            $("#display").val(currentInput);
            operatorPressed = ["/", "*", "-", "+"].includes(value);
        }
    });
});

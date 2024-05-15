(function () {
    // Array of names
    var names = ["John", "Jack", "Jim","Yaakov","Jason","Paul","Frank","larry","Paula","Laura"];

    // Select the output div
    var outputDiv = document.getElementById("output");

    // Looping over each name
    for (var i = 0; i < names.length; i++) {
        // Getting the current name
        var name = names[i];

        // Checking the first letter of the name
        var firstLetter = name.charAt(0).toLowerCase();

        // Creating a paragraph element to hold the output
        var paragraph = document.createElement("p");

        // Setting the text content based on conditions
        if (firstLetter === 'j') {
            paragraph.textContent = "Goodbye " + name;
        } else {
            paragraph.textContent = "Hello " + name;
        }

        // Appending the paragraph element to the output div
        outputDiv.appendChild(paragraph);
    }
})();

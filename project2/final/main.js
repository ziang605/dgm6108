"use strict"

/* IC: Declare global variables to store user-entered information and results here */
let species, gender, petName;

/* IC: We have set up the form buttons for you, as well as the code that will clear the output once the user has successfully filled out the form and the program has given them final output (instead of telling them they need to correct something). We have set things up so that the output area is cleared, but the form remains filled out. This is to make it easier to test your project with slightly different versions of information rather than having to fill out the whole form every time. */

document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});

/* function processForm()
Summary:
- Reads form input values and runs validation and rule evaluation.

Parameters:
- None

Returns:
- Nothing
*/
function processForm() {

    /* IC: Assign values from your form inputs here, remembering:
        1) Always work with the value property from the form input

        2) Form data always comes in as type String. You MAY want to convert some inputs to Numbers, but you ALSO may need to analyze some numeric inputs as text (for example, if you need to check how many digits were entered, or only look at certain digits)

        3) You can do additional pre-processing here, if needed, but everything related to validating form input or providing results should go into the other functions provided below OR by functions that those other functions call (which you may also write)
    */

    species = document.getElementById("species").value;
gender = document.getElementById("gender").value;
petName = document.getElementById("petName").value;

    /* IC: This code looks for a true or false for whether the data is valid. It only continues to evaluate the answers if the data is valid. You DO NOT need to modify any code between here and the end of the function, nor should you, unless you have a good reason. All versions of this project can be completed WITHOUT modifying the code from this comment to the end of the function, so you should attempt to work with that restriction! */

    let evaluationCompleted = false;

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    } else {
        rule();
    }
}

/* IC: In this function, do any validation with validate the data was correctly entered in general, not for specific cases. Return false if you have told the user that they need to correct something. Return true if all data is valid. We have provided you with the basic constraints for the data, but you may improve the validation as a bonus (as long as you don't mess up our ability to test every option in your evaluateAnswers function!) */

/* function validateData()
Summary:
- Validates general input and parses species from text input.

Parameters:
- None (uses global variables)

Returns:
- true if input is valid
- false if validation fails
*/
function validateData() {
    clear();

    if (species.trim() === "") {
        output("Please enter your pet's species.");
        return false;
    }

    if (gender === "") {
        output("Please select your pet's gender.");
        return false;
    }

    if (petName === "") {
        output("Please select a pet name.");
        return false;
    }

    
    let lower = species.toLowerCase();

    let catIndex = lower.indexOf("cat");
    let dogIndex = lower.indexOf("dog");
    let pigIndex = lower.indexOf("pig");

    let firstIndex = -1;
    let firstSpecies = "";

    if (catIndex !== -1) { firstIndex = catIndex; firstSpecies = "cat"; }
    if (dogIndex !== -1 && (firstIndex === -1 || dogIndex < firstIndex)) { firstIndex = dogIndex; firstSpecies = "dog"; }
    if (pigIndex !== -1 && (firstIndex === -1 || pigIndex < firstIndex)) { firstIndex = pigIndex; firstSpecies = "pig"; }

    if (firstIndex === -1) {
        output("Sorry, that species is not yet in our database.");
        return false;
    }

    species = firstSpecies;

    return true;
}


/* IC: In this function, use conditional logic to figure out if the user's input meets all of the constraints that we have provided. Return false if you have told the user that they need to correct something. Return true if all data is valid. NOTE: Although the focuses of this project are conditional logic and function returns, you may need to create additional variables, do some calculations, and/or do some String manipulation in order to successfully complete your project! */

/* function evaluateAnswers()
Summary:
- Applies all Project 2-6 naming rules and outputs results.

Parameters:
- None (uses global variables)

Returns:
- true if all rules pass
- false if a rule is violated
*/
function evaluateAnswers() {

    // Whiskers: only for cats
    if (petName === "Whiskers" && species !== "cat") {
        output(`Your pet ${species} does not want to be named Whiskers; that name is only for cats!`);
        return false;
    }

    // Porky: only for male pigs
    if (petName === "Porky") {
        if (species !== "pig") {
            output(`Your pet ${species} does not want to be named Porky; that name is only for pigs!`);
            return false;
        }
        if (gender !== "Male") {
            output(`Sorry, your pig's gender is ${gender}. Only male pigs want to be named Porky.`);
            return false;
        }
    }

    // Daisy: only for dogs and pigs that are female or unknown
    if (petName === "Daisy") {
        if (species !== "dog" && species !== "pig") {
            output("Pets of this species don't want the name Daisy.");
            return false;
        }
        if (gender !== "Female" && gender !== "Unknown") {
            output("Pets of this gender don't want the name Daisy.");
            return false;
        }
    }

    // King: only for male or unknown
    if (petName === "King") {
        if (gender !== "Male" && gender !== "Unknown") {
            output("Pets of this gender don't want the name King.");
            return false;
        }
    }

    // Princess: only for female cats
    if (petName === "Princess") {
        if (gender !== "Female") {
            output("Pets of this gender don't want the name Princess.");
            return false;
        }
        if (species !== "cat") {
            output("Pets of this species don't want the name Princess.");
            return false;
        }
    }

    // Result sentence: he/she/it depending on gender
    let pronoun = "it";
    if (gender === "Male") pronoun = "he";
    if (gender === "Female") pronoun = "she";

    output(`Congratulations on adopting a new pet ${species}! We are confident ${pronoun}, depending on gender will enjoy being called ${petName}!`);

    output(`Any animal can be named Spot. But just to check, does ${pronoun} (${gender}) actually have spots?`);

    // Rule Comment if Spot selected
    if (petName === "Spot") {
        output(`Any animal can be named Spot. But just to check, does ${pronoun} (${gender}) actually have spots?`);
    }

    return true;
}




/* TIP: The above two functions are written using different techniques for communicating success or failure. In your project, we will be looking for consistency -- i.e., choose ONE of these methods (early returns, or tracking the success in a variable) and use it throughout your project! */
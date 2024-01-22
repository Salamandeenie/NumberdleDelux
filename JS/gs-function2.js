// gameScriptV3Functions -- Compatible with v2 Variables and Bridge

// Generative Functions
{
    // Generates a randomized Array
    function generateArray(numElements, digitAmount, minNumber, maxNumber)
    {
        var generatedArray = [];

        // loop for the number of elements
        for ( let i = 0; i < numElements; i++ )
        {
            // Generate a random number
            var randomElement = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
           // Pad with zeros
            const formattedElement = randomElement.toString().padStart(digitAmount, '0');
            // Push out to the Array
            generatedArray.push(formattedElement); 
        }

        return generatedArray;
    }

    // Generates a randomized array and makes it the answer array
    function generateAnswer(numElements = 5, digitAmount = 2, minNumber = 0, maxNumber = 99)
    {
        return answerGenerated = generateArray(numElements, digitAmount, minNumber, maxNumber);
    }

    // Generates an input field with slots number of segments
    function generateSegmentedInput(slots){
        if (!isWinGame){
       // turnTrackerAS(); // Increment turnTracker

        const segmentedInputsContainer = document.getElementById('segmentedInputsContainer');

        const groupDiv = document.createElement('div');
        groupDiv.className = 'segment-group';
        groupDiv.id = "groupID" + turnTracker;
        
        for ( let i = 0; i < slots; i++ )
        {
            const input = document.createElement('input');
            input.maxLength = 2;

            if(greenTracker[i] !== undefined && greenTracker[i] !== false)
            {
                input.placeholder = greenTracker[i];
            }
            else
            {
                input.placeholder = '--';
            }

            groupDiv.appendChild(input);
        }
            segmentedInputsContainer.appendChild(groupDiv)

            return "groupID" + turnTracker;
        }
    }
}

// Ears
{   // Master Ear. Pulls all keystroke data
    function MasterEar()
    {
        document.body.addEventListener('keydown', function(event) {
            console.log(event.key);

            // Handles the segmenented input field so that the user can actually play the game
            if (!isNaN(parseInt(event.key))) {
                currentFocus.value = event.key;
                const value = currentFocus.value;

                if (value.length === 2) {
                    const nextInput = currentFocus.nextElementSibling;
                    if (nextInput) {
                        nextInput.focus();
                    }
                }

        // Handles the backspace action, so when backspace is pressed, it moves the focus to the previous segment if it exists.
            else if (event.key === 'Backspace' && currentFocus.selectionStart === 0) {
                const prevInput = currentFocus.previousElementSibling;
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
        });
    }
}

// Misc Functions
{
    // Reads the current input of the screen.
    function readInput(segmentGroupID){

        const group = document.getElementById(segmentGroupID);
        if (!group) {
            return null; // Group not found
        }
    
        const inputs = group.querySelectorAll('input');
        const inputData = [];
    
        inputs.forEach(input => {
            // Convert the input value to a number and format it
            const value = input.value;
            let formattedValue = "";
            {
                const parsedValue = parseInt(value, 10);
                if (parsedValue == undefined || isNaN(parsedValue)) {
                    formattedValue = "pending";
                } else {
                    formattedValue = parsedValue.toString().padStart(2, '0');
                }
            }
    
            inputData.push(formattedValue);
        });
        data = inputData;
        return inputData;
    }
}
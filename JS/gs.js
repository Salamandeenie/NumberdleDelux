// gameScriptV2
document.addEventListener("DOMContentLoaded", function (){
    generateSegmentedInput((slotDifficultyNumber));
    //startTimer();
    generateAnswer();
    updateGuessCounter();

    currentFocus = findChildFromParentID("groupID" + turnTracker, 0)
    document.getElementById( "groupID" + turnTracker ).scrollIntoView();

    //MasterEar();
});

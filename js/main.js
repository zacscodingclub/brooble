function showMood() {
    name = document.getElementById("name").value;
    mood =  document.getElementById("mood").value;

    if (!name || !mood) {
        alert("Please fill all fields.");
        return false;
    }

    if (mood == "happy") {
        face = " :)";
    } else if (mood == "sad") {
        face = " :(";
    } else {
        face = " :|";
    }


    moodString = name + " is in a " + mood + " mood today."+face;

    newMood = document.getElementById("newMood");

    newMood.innerHTML = moodString;

}

function clearMood() {
    document.getElementById("moodForm").reset();
    newMood = document.getElementById("newMood");
    newMood.innerHTML = " ";

}

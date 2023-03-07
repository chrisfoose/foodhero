const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '614aaf1a46mshd0cce11497fe7a0p1e0622jsn8af5d0d1a5b9',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
};

document.getElementById("sendFood").addEventListener("click", async (e) => {
    const inputVal = document.getElementById("userinput").ariaValueMax;
    const res = await fetch(
        'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=$(inputval)',
        options
    );

    const resJson = await res.json();
    const listParent = document.getElementyById('results');
    listParent.innerHTML = "";
    resJson.hints.forEach((hint) => {
        const item = document.createElement("li");
        item.innerHTML = hint.food.label;
        listParent.appendChildren(item);
    });
};
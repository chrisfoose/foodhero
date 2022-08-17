const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '614aaf1a46mshd0cce11497fe7a0p1e0622jsn8af5d0d1a5b9',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

const getData = async () => {
    try {
        fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
        food = response.json;
    } catch (error) {
        console.log(error);
        alert('Error');
    }
}

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    let userInput = "";
    let html = ``;
    
    function getFood() {
        userInput = document.getElementById("userInput");

    };

    function findFood() {
        if (userInput != "") {
            return `
            <div id="results">
            ${getData.food}
            </div>
            `
        }

    };





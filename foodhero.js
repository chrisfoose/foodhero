const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '614aaf1a46mshd0cce11497fe7a0p1e0622jsn8af5d0d1a5b9',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    userInput = "";
    
    function getFood() {
        userInput = document.getElementById("userInput");

    };

    function findFood() {

    };



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '614aaf1a46mshd0cce11497fe7a0p1e0622jsn8af5d0d1a5b9',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

const getData = async () => {
    try {
        url="https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple"
        const response = await fetch(url);
        fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
        const food = response.json();
        return food.map(function getFood() {
            let userInput = document.getElementById("userInput");
            return `
            <div id="results">
            {$food}
            </div>
            `
        });

    } catch (error) {
        console.log(error);
        alert('Error');
    }
}

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    
    function getFood(userInput) {
        userInput = document.getElementById("userInput");
       for (i= 0; i = food; i++ ) {

       
                return `
                <div id="results">
                ${food[i]};

                </div>
                `
            }

    };

    // function findFood() {
    //     if (userInput != "") {
    //         return `
    //         <div id="results">
    //         ${getData.food}
    //         </div>
    //         `
    //     }





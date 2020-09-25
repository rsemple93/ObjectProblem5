function sortByTitle(){ 
	let array1 = [
	{name: 'Denzel', title: 'Training Day'},
	{name: 'Jamie Foxx', title: 'Ray'},
	{name: 'Will Smith', title: 'Hitch'}
];

array1.sort((a, b) => {
	if(a.title > b.title) {
		return 1
	} else {
		return -1
	}
})

console.log(array1)
}

sortByTitle();

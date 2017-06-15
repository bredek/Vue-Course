// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		show: true,
		list: ['one', 'two', 'three'],
		people: [
			{name: 'Max', age: 27},
			{name: 'Loh', age: 0},
			{name: 'Pidr', age: 777}
		]
	}
})
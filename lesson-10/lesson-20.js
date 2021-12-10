/* const movie = {
    title: 'Spiderman: no way home',
    year: 2021,
    imdb: 8.7,
    actors: ['Tom', 'Cucumber', 'Zendaya']
}
 
console.log(movie)
 
delete movie.imdb 
 
console.log(movie)
 
const numbers = [1, 2, 3, 4, 5]
console.log(numbers, numbers[4])
delete numbers[2]
console.log(numbers, numbers[4]) */
 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(numbers.slice(0, 3))
// console.log(numbers)
 
/* console.log(numbers.splice(0, 1))
console.log(numbers) */
 
console.log(numbers.splice(8, 1, 0))
console.log(numbers)

//////////////////////////////////////////////////////////////////////////////

// chto takoe ptototipy (prototypes)
 
/* const cat1 = {
    name: "Altyn",
    age: 2,
    pawsQty: 4,
    meow: function() {
        console.log('Meow meow')
    }
}
 
console.log(cat1)
 
class Cat {
    name = 'Altyn'
    age = 2
    pawsQty = 4
    meow = function() {
        console.log('meow')
    }
}
 
const cat2 = new Cat()
console.log(cat2) */
 
 
class Cat {
    constructor(name = 'no name', age = 0, pawsQty = 4) {
        this.name = name
        this.age = age
        this.pawsQty = pawsQty
 
    }
 
    meow = function() {
        console.log('meow')
    }
}
 
const cat3 = new Cat('Aryna', 3, 4)
console.log(cat3)
 
const cat4 = new Cat()
console.log('Cat4:', cat4)


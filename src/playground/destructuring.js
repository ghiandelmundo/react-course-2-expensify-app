/*
* Object Destructuring
*/
// const person = {
//     name: 'Ghian',
//     age: 43,
//     location: {
//         city: 'Langley',
//         temp: 92
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}`);

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

/*
* Array Destructuring
*/

// const address = ['222 Walnut Grove Drive', 'Langley', 'BC', 'V1M3K2'];
// const [, , province = 'ON'] = address;
// console.log(`You are in ${province}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
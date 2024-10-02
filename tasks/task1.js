//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people) {
   const adultPeople = [];

   people.forEach(person => {
     if (person.age >= 18) {
       adultPeople.push(person);
     }
   });
   return adultPeople;
}

module.exports = filterAdults;
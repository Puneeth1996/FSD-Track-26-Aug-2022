
const person_John = {
    id: 3423,
    address: {
        addressLine1: 'lorem',
        addressLine2: 'street34, adelaide',
        addressLine3: 'lorem',
    },
    country: 'India',
    postal: 56930,
    nameed: 'John'

};


console.log(`${person_John.nameed} is holding ${person_John.id} . located at ${person_John.address.addressLine1}-${person_John.address.addressLine2}-${person_John.address.addressLine3}`);



//  for in 
//  for of 
// console.log("person_John addres: ")
// for( let adr in person_John.address){
//     console.log( person_John.address[adr] )
// }


const newObejctPerson = {
    id: 3423,
    addressLine1: 'lorem',
    country: 'India',
    postal: 56930,
    nameed: 'John'
};


for( let key  of Object.keys(newObejctPerson) ) {
    console.log(newObejctPerson[key] )
}






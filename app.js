const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

//blueprint
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: {
        type: Number, 
        min: 1,
        max: 10
    }, 
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 34, 
    review: "Pretty solid as a fruit."
});

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    score: 6,
    review: "Decent fruit."
});

mango.save();

Person.updateOne({name: "John"}, {favoriteFruit: mango}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated the document");
    }
});

/*
const person = new Person({
    name: "Amy", 
    age: 12,
    favoriteFruit: pineapple
});

person.save();*/

/*
const kiwi = new Fruit({
    name: "Kiwi", 
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange", 
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana", 
    score: 3,
    review: "Weird texture"
});


Fruit.insertMany([kiwi, orange, banana], function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully saved all fruits to fruitsDB");
    }
}); 
*/


//read from database
Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});

/*
Fruit.updateOne({_id: "5bcasd231298asd"}, {name: "Peach"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated the document.");
    }
})


Fruit.deleteOne({name: "Peach"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted the document.");
    }
});

Person.deleteMany({name: "John"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted all the documents.");
    }
});
*/
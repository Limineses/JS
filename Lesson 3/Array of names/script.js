var names =["Alex", "Jack", "Stiv", "Maria", "Victoria", "Wendy", "Nick", "Jon", "Bob", "Sam", "Ann", "Batty"];
var people = [];
for(var i = 0; i < 100; i++)
{
    people[i] = human = {
        name: names[Math.floor(12 * Math.random())],
        age: Math.floor(10 + (50 - 10) * Math.random()) ,
        nameAge: function()
        {
            console.log("Hi, I'm " + this.name + " " + this.age + " years old.");
        }
    } 
}

people.forEach(function(elem)
{
    elem.nameAge();
});


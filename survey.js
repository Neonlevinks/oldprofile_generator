const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question('What is your name? ', (name) => {
  //log the answer in a database
  console.log(`Hello ${name}, nice to meet you!`);

  rl.question('What activity do you like doing? ', (activity) => {
    console.log(`Woah, ${activity}!, that's really cool!`);

    rl.question('What do you listen to while doing that? ', (music) => {
      console.log(`Oh, ${music} isn't my cup of tea. I'm a machine so I like Techno.`);

      rl.question('What meal is your favourite? Breakfast, lunch or dinner? ', (mealtime) => {
        console.log(`Cool! Let's get ${mealtime} sometime soon!`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (meal) => {
          console.log(`Now I'm hungry for ${meal}`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`You know I used to play ${sport} professionally, but after an injury I had to find work as a js file`);

            rl.question('What is your special skill? ', (skill) => {
              console.log(`I think I know you well enough now to introduce you to other people! I can say "Hi this is my friend ${name}! They like listening to ${music} while ${activity}. They eat ${meal} for ${mealtime} and like ${sport} more than any other sport. They might seem normal, but theres's no one better at ${skill} than ${name}!"`)

              rl.close();
            })
          })
        })
      })
    })
  });
});





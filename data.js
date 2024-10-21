// 99 Questions : 
const questions = [
  {
    question:
      "If you have a bowl with six apples and you take away four, how many do you have?",
    answers: [
      { text: "three", correct: false },
      { text: "Zero", correct: false },
      { text: "Four", correct: true },
      { text: "Six", correct: false },
    ],
  },
  {
    question:
      "Some months have 31 days, some have 30 days, but how many have 28 days?",
    answers: [
      { text: "1(Feb)", correct: false },
      { text: "6", correct: false },
      { text: "2", correct: false },
      { text: "12", correct: true },
    ],
  },
  {
    question:
      "A farmer has 17 sheep, and all but 9 die. How many sheep are left?",
    answers: [
      { text: "0", correct: false },
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "17", correct: false },
    ],
  },
  {
    question: "How many times can you subtract 10 from 100?",
    answers: [
      { text: "10", correct: false },
      { text: "9", correct: false },
      { text: "undefined", correct: false },
      { text: "1", correct: true },
    ],
  },
  {
    question: "Which is heavier: a pound of feathers or a pound of rocks?",
    answers: [
      { text: "Pound of Feathers", correct: false },
      { text: "Pound of rocks", correct: false },
      { text: "Both are same", correct: true },
      { text: "Can't determine without Instrument", correct: false },
    ],
  },
  {
    question:
      "What should you do if you accidentally cut your finger while cooking?",
    answers: [
      { text: "Run it under cold water", correct: false },
      { text: "Run it under hot water", correct: false },
      { text: "Apply pressure and clean the wound", correct: true },
      { text: "Suck on the wound", correct: false },
    ],
  },
  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "Seven", correct: true },
      { text: "Two", correct: false },
      { text: "Five", correct: false },
      { text: "Ten", correct: false },
    ],
  },
  {
    question: "What is a common symptom of dehydration?",
    answers: [
      { text: "High fever", correct: false },
      { text: "Persistent Headache", correct: true },
      { text: "Excess Sweating", correct: false },
      { text: "Blurred Vision", correct: false },
    ],
  },
  {
    question: "What is the smallest country in the world by land area?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Monaco", correct: false },
      { text: "San Marino", correct: false },
      { text: "Maldives", correct: false },
    ],
  },
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O2", correct: false },
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
    ],
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1912", correct: true },
      { text: "1914", correct: false },
      { text: "1916", correct: false },
      { text: "1918", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Who is the author of the 'Harry Potter' series?",
    answers: [
      { text: "J.R.R. Tolkien", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "Stephen King", correct: false },
      { text: "George R.R. Martin", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
      { text: "Lungs", correct: false },
    ],
  },
  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "Five", correct: false },
      { text: "Six", correct: false },
      { text: "Seven", correct: true },
      { text: "Eight", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    answers: [
      { text: "Silver", correct: false },
      { text: "Gold", correct: true },
      { text: "Iron", correct: false },
      { text: "Aluminum", correct: false },
    ],
  },
  {
    question: "Which country is the largest by land area?",
    answers: [
      { text: "Canada", correct: false },
      { text: "China", correct: false },
      { text: "Russia", correct: true },
      { text: "United States", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Nagoya", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Great White Shark", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Platinum", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Osmium", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Oganesson", correct: false },
      { text: "Opium", correct: false },
    ],
  },
  {
    question: "How many strings does a standard guitar have?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: true },
      { text: "7", correct: false },
    ],
  },
  {
    question: "In which year did the Berlin Wall fall?",
    answers: [
      { text: "1987", correct: false },
      { text: "1988", correct: false },
      { text: "1989", correct: true },
      { text: "1990", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avocado", correct: true },
      { text: "Onion", correct: false },
      { text: "Cucumber", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    answers: [
      { text: "32°F", correct: true },
      { text: "0°F", correct: false },
      { text: "100°F", correct: false },
      { text: "212°F", correct: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Morning Star?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "What is the main component of the sun?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: true },
      { text: "Carbon", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    answers: [
      { text: "Alan Turing", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "John von Neumann", correct: false },
      { text: "Steve Jobs", correct: false },
    ],
  },
  {
    question: "What is the main language spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "English", correct: false },
      { text: "French", correct: false },
    ],
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Mercury", correct: true },
      { text: "Aluminum", correct: false },
      { text: "Copper", correct: false },
    ],
  },
  {
    question: "How many bones are there in the adult human body?",
    answers: [
      { text: "206", correct: true },
      { text: "210", correct: false },
      { text: "201", correct: false },
      { text: "215", correct: false },
    ],
  },
  {
    question:
      "Which country gifted the Statue of Liberty to the United States?",
    answers: [
      { text: "Germany", correct: false },
      { text: "France", correct: true },
      { text: "Italy", correct: false },
      { text: "Spain", correct: false },
    ],
  },
  {
    question:
      "Which organ is responsible for pumping blood throughout the human body?",
    answers: [
      { text: "Brain", correct: false },
      { text: "Liver", correct: false },
      { text: "Heart", correct: true },
      { text: "Kidney", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Sahara Desert", correct: false },
      { text: "Gobi Desert", correct: false },
      { text: "Antarctic Desert", correct: true },
      { text: "Arabian Desert", correct: false },
    ],
  },
  {
    question: "Which year did World War II end?",
    answers: [
      { text: "1942", correct: false },
      { text: "1944", correct: false },
      { text: "1945", correct: true },
      { text: "1946", correct: false },
    ],
  },
  {
    question: "What is the smallest unit of matter?",
    answers: [
      { text: "Atom", correct: true },
      { text: "Molecule", correct: false },
      { text: "Electron", correct: false },
      { text: "Proton", correct: false },
    ],
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "South America", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "Who was the first President of the United States?",
    answers: [
      { text: "Abraham Lincoln", correct: false },
      { text: "Thomas Jefferson", correct: false },
      { text: "George Washington", correct: true },
      { text: "John Adams", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Helium", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    answers: [
      { text: "Iron", correct: true },
      { text: "Gold", correct: false },
      { text: "Lead", correct: false },
      { text: "Silver", correct: false },
    ],
  },
  {
    question: "Which famous scientist developed the laws of motion?",
    answers: [
      { text: "Isaac Newton", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Albert Einstein", correct: false },
      { text: "Niels Bohr", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance found on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Diamond", correct: true },
      { text: "Iron", correct: false },
      { text: "Platinum", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "What is the capital city of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Montreal", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in traditional Japanese sushi?",
    answers: [
      { text: "Chicken", correct: false },
      { text: "Beef", correct: false },
      { text: "Fish", correct: true },
      { text: "Pork", correct: false },
    ],
  },
  {
    question: "Which planet is known for its rings?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    answers: [
      { text: "Marie Curie", correct: true },
      { text: "Rosalind Franklin", correct: false },
      { text: "Ada Lovelace", correct: false },
      { text: "Elizabeth Blackwell", correct: false },
    ],
  },
  {
    question: "What is the largest internal organ in the human body?",
    answers: [
      { text: "Liver", correct: true },
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
      { text: "Kidney", correct: false },
    ],
  },
  {
    question: "Which ocean is the smallest in terms of surface area?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: true },
      { text: "Pacific Ocean", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of Fire and Ice?",
    answers: [
      { text: "Iceland", correct: true },
      { text: "Norway", correct: false },
      { text: "Sweden", correct: false },
      { text: "Finland", correct: false },
    ],
  },
  {
    question: "What is the smallest country in the world by population?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "San Marino", correct: false },
      { text: "Vatican City", correct: true },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "What type of animal is the Komodo dragon?",
    answers: [
      { text: "Mammal", correct: false },
      { text: "Bird", correct: false },
      { text: "Reptile", correct: true },
      { text: "Amphibian", correct: false },
    ],
  },
  {
    question: "Which famous scientist is known for his theory of evolution?",
    answers: [
      { text: "Charles Darwin", correct: true },
      { text: "Gregor Mendel", correct: false },
      { text: "Louis Pasteur", correct: false },
      { text: "James Watson", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yuan", correct: false },
      { text: "Won", correct: false },
      { text: "Yen", correct: true },
      { text: "Ringgit", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: true },
      { text: "Nile River", correct: false },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Giant Red Spot?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "Who was the first person to step on the moon?",
    answers: [
      { text: "Buzz Aldrin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for table salt?",
    answers: [
      { text: "NaCl", correct: true },
      { text: "H2O", correct: false },
      { text: "CO2", correct: false },
      { text: "KCl", correct: false },
    ],
  },
  {
    question:
      "Which famous painter is known for his works like 'Starry Night'?",
    answers: [
      { text: "Vincent van Gogh", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
      { text: "Rembrandt", correct: false },
    ],
  },
  {
    question: "What is the largest species of shark?",
    answers: [
      { text: "Great White Shark", correct: false },
      { text: "Hammerhead Shark", correct: false },
      { text: "Whale Shark", correct: true },
      { text: "Tiger Shark", correct: false },
    ],
  },
  {
    question: "In which country was the game of chess invented?",
    answers: [
      { text: "India", correct: true },
      { text: "China", correct: false },
      { text: "Persia", correct: false },
      { text: "Egypt", correct: false },
    ],
  },
  {
    question: "Which ancient civilization built the pyramids?",
    answers: [
      { text: "Romans", correct: false },
      { text: "Greeks", correct: false },
      { text: "Egyptians", correct: true },
      { text: "Mayans", correct: false },
    ],
  },
  {
    question:
      "What is the term for a word that is spelled the same forwards and backwards?",
    answers: [
      { text: "Anagram", correct: false },
      { text: "Palindrome", correct: true },
      { text: "Homophone", correct: false },
      { text: "Antonym", correct: false },
    ],
  },
  {
    question: "What is the capital of Italy?",
    answers: [
      { text: "Rome", correct: true },
      { text: "Venice", correct: false },
      { text: "Milan", correct: false },
      { text: "Florence", correct: false },
    ],
  },
  {
    question: "Which gas makes up most of the Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the primary language spoken in Spain?",
    answers: [
      { text: "Portuguese", correct: false },
      { text: "French", correct: false },
      { text: "Spanish", correct: true },
      { text: "Italian", correct: false },
    ],
  },
  {
    question:
      "If you drop a white piece of paper into a puddle of water, what color will the paper be after soaking it up?",
    answers: [
      { text: "White", correct: true },
      { text: "Blue", correct: false },
      { text: "Green", correct: false },
      { text: "Red", correct: false },
    ],
  },
  {
    question:
      "If a car is traveling at 60 miles per hour, how long will it take to travel 120 miles?",
    answers: [
      { text: "1 hour", correct: false },
      { text: "2 hours", correct: true },
      { text: "3 hours", correct: false },
      { text: "4 hours", correct: false },
    ],
  },
  {
    question:
      "If you have a 12-hour clock and it's showing 3 PM, what will be the time after 5 hours?",
    answers: [
      { text: "8 PM", correct: true },
      { text: "7 PM", correct: false },
      { text: "6 PM", correct: false },
      { text: "9 PM", correct: false },
    ],
  },
  {
    question:
      "If you are in a room with no windows or doors, how can you get out?",
    answers: [
      { text: "You can't get out", correct: false },
      { text: "Break the wall", correct: false },
      { text: "Stop imagining", correct: true },
      { text: "Find a hidden door", correct: false },
    ],
  },
  {
    question: "If you mix red and blue, what color do you get?",
    answers: [
      { text: "Purple", correct: true },
      { text: "Green", correct: false },
      { text: "Orange", correct: false },
      { text: "Brown", correct: false },
    ],
  },
  {
    question: "What is the opposite of 'day'?",
    answers: [
      { text: "Night", correct: true },
      { text: "Morning", correct: false },
      { text: "Evening", correct: false },
      { text: "Afternoon", correct: false },
    ],
  },
  {
    question:
      "If you have a basket containing 10 apples and you take away 3, how many apples do you have left?",
    answers: [
      { text: "7 apples", correct: true },
      { text: "3 apples", correct: false },
      { text: "10 apples", correct: false },
      { text: "13 apples", correct: false },
    ],
  },
  {
    question:
      "If you are running a race and you overtake the person in second place, what place are you in?",
    answers: [
      { text: "First place", correct: false },
      { text: "Second place", correct: true },
      { text: "Third place", correct: false },
      { text: "Last place", correct: false },
    ],
  },
  {
    question: "What is the capital of the United States?",
    answers: [
      { text: "New York", correct: false },
      { text: "Washington, D.C.", correct: true },
      { text: "Los Angeles", correct: false },
      { text: "Chicago", correct: false },
    ],
  },
  {
    question:
      "Which is heavier: a kilogram of feathers or a kilogram of bricks?",
    answers: [
      { text: "Feathers", correct: false },
      { text: "Bricks", correct: false },
      { text: "Both weigh the same", correct: true },
      { text: "Neither", correct: false },
    ],
  },
  {
    question:
      "If you see lightning and hear thunder, which event happened first?",
    answers: [
      { text: "Lightning", correct: true },
      { text: "Thunder", correct: false },
      { text: "They happened at the same time", correct: false },
      { text: "It depends on the distance", correct: false },
    ],
  },
  {
    question:
      "You have a project deadline tomorrow and you’re feeling sick. What should you do?",
    answers: [
      {
        text: "Go to work and complete the project regardless",
        correct: false,
      },
      {
        text: "Contact your supervisor, explain the situation, and request an extension if needed",
        correct: true,
      },
      { text: "Ignore the deadline and take a sick day", correct: false },
      {
        text: "Try to finish the project while taking medication at home",
        correct: false,
      },
    ],
  },
  {
    question:
      "You find a wallet on the street with a lot of cash inside and no ID. What should you do?",
    answers: [
      { text: "Keep the money for yourself", correct: false },
      { text: "Take the wallet to the nearest police station", correct: true },
      { text: "Leave the wallet where you found it", correct: false },
      { text: "Throw the wallet away", correct: false },
    ],
  },
  {
    question:
      "You are offered a job with a higher salary but it requires relocating to a different city. What should you consider first?",
    answers: [
      { text: "The higher salary alone", correct: false },
      { text: "The cost of living in the new city", correct: true },
      { text: "The distance from your current home", correct: false },
      { text: "The prestige of the company", correct: false },
    ],
  },
  {
    question:
      "You have to make a decision between two equally attractive job offers. What should be your approach?",
    answers: [
      {
        text: "Choose based on which offer has the better location",
        correct: false,
      },
      {
        text: "Pick the one that aligns best with your long-term career goals",
        correct: true,
      },
      {
        text: "Go with the job that offers the most immediate benefits",
        correct: false,
      },
      {
        text: "Select the job with the higher starting salary",
        correct: false,
      },
    ],
  },
  {
    question:
      "You are at a social event and someone makes an inappropriate comment. What should you do?",
    answers: [
      { text: "Ignore the comment and avoid confrontation", correct: false },
      { text: "Confront the person publicly", correct: false },
      {
        text: "Address the issue calmly and privately, if necessary",
        correct: true,
      },
      { text: "Leave the event immediately", correct: false },
    ],
  },
  {
    question:
      "You are managing a team and one of your team members is consistently underperforming. What should be your first step?",
    answers: [
      {
        text: "Ignore the problem and hope it resolves itself",
        correct: false,
      },
      {
        text: "Speak to the team member privately to understand the issue",
        correct: true,
      },
      {
        text: "Reprimand the team member in front of the whole team",
        correct: false,
      },
      { text: "Immediately demote or replace the team member", correct: false },
    ],
  },
  {
    question:
      "You are planning a big event and one of your key suppliers fails to deliver on time. What should you do?",
    answers: [
      { text: "Panic and cancel the event", correct: false },
      {
        text: "Find an alternative supplier quickly and communicate with all parties involved",
        correct: true,
      },
      {
        text: "Ignore the issue and hope the problem resolves itself",
        correct: false,
      },
      { text: "Blame the supplier publicly", correct: false },
    ],
  },
  {
    question:
      "You receive conflicting advice from two trusted advisors on an important decision. What should be your approach?",
    answers: [
      { text: "Follow the advice of the one you like better", correct: false },
      {
        text: "Consider the advice carefully and weigh the pros and cons of each perspective",
        correct: true,
      },
      {
        text: "Choose randomly between the two pieces of advice",
        correct: false,
      },
      {
        text: "Seek advice from a third person before making a decision",
        correct: false,
      },
    ],
  },
  {
    question:
      "You have a tight deadline and a crucial task is incomplete due to a mistake you made. What should you do?",
    answers: [
      {
        text: "Try to fix the mistake as quickly as possible and inform your team",
        correct: true,
      },
      { text: "Hide the mistake and hope no one notices", correct: false },
      { text: "Blame someone else for the error", correct: false },
      { text: "Give up and ask for an extension", correct: false },
    ],
  },
  {
    question:
      "You are given the choice to spend an extra hour working on a project or an extra hour relaxing. What should you consider?",
    answers: [
      {
        text: "How much progress you can make on the project versus the need for relaxation",
        correct: true,
      },
      { text: "Always choose working more to show dedication", correct: false },
      { text: "Always choose relaxing to avoid burnout", correct: false },
      {
        text: "It doesn’t matter; both options are equally important",
        correct: false,
      },
    ],
  },
  {
    question:
      "You have two equally important tasks to complete, but you only have time for one. What should you do?",
    answers: [
      { text: "Complete the task you enjoy more", correct: false },
      { text: "Complete the task with the earliest deadline", correct: false },
      {
        text: "Assess the impact of each task and choose the one with the greater impact",
        correct: true,
      },
      { text: "Randomly choose which task to complete first", correct: false },
    ],
  },
  {
    question:
      "You are a project manager and a critical team member suddenly falls ill. What should be your immediate action?",
    answers: [
      { text: "Reassign their tasks to other team members", correct: true },
      { text: "Wait for them to recover", correct: false },
      { text: "Ask them to work from home despite being ill", correct: false },
      { text: "Pause the project until they return", correct: false },
    ],
  },
  {
    question:
      "You are faced with two conflicting recommendations from senior team members on a strategic decision. What should you do?",
    answers: [
      {
        text: "Choose the recommendation of the more experienced team member",
        correct: false,
      },
      {
        text: "Seek a third opinion and make an informed decision",
        correct: true,
      },
      { text: "Go with your gut feeling", correct: false },
      { text: "Flip a coin to decide", correct: false },
    ],
  },
  {
    question:
      "You have been offered two equally good job opportunities in different cities. What should you consider first?",
    answers: [
      { text: "The salary packages of both jobs", correct: false },
      {
        text: "The long-term career growth potential in each job",
        correct: true,
      },
      { text: "The city you prefer to live in", correct: false },
      { text: "The opinions of your family and friends", correct: false },
    ],
  },
  {
    question:
      "Your company is considering a risky investment that could potentially bring high returns. How should you proceed?",
    answers: [
      { text: "Invest a small amount to test the waters", correct: true },
      {
        text: "Invest the full amount to maximize potential returns",
        correct: false,
      },
      { text: "Avoid the investment to prevent any risk", correct: false },
      { text: "Invest based on your competitor's actions", correct: false },
    ],
  },
  {
    question:
      "You find out that a close colleague is engaging in unethical behavior. What is your first course of action?",
    answers: [
      { text: "Report the colleague to HR immediately", correct: false },
      { text: "Gather evidence and then report", correct: false },
      {
        text: "Speak to the colleague directly about your concerns",
        correct: true,
      },
      { text: "Ignore it because it's not your business", correct: false },
    ],
  },
  {
    question:
      "Your company is facing a financial crisis and must make cuts. Which department should be considered first for budget reductions?",
    answers: [
      {
        text: "The department with the lowest performance metrics",
        correct: true,
      },
      { text: "The newest department", correct: false },
      { text: "The department with the highest salaries", correct: false },
      { text: "The largest department", correct: false },
    ],
  },
  {
    question:
      "You are offered a promotion that requires relocating to a different city, but your family is strongly opposed to the move. What do you do?",
    answers: [
      {
        text: "Take the promotion and relocate, prioritizing your career",
        correct: false,
      },
      {
        text: "Decline the promotion to keep your family happy",
        correct: false,
      },
      {
        text: "Discuss with your family to find a compromise that addresses everyone's concerns",
        correct: true,
      },
      {
        text: "Accept the promotion but travel back home on weekends",
        correct: false,
      },
    ],
  },
  {
    question:
      "You are leading a project, and one of your team members consistently underperforms, affecting the whole team's progress. What is your course of action?",
    answers: [
      { text: "Reassign their tasks to other team members", correct: false },
      {
        text: "Speak to them privately to understand the issue and offer support",
        correct: true,
      },
      { text: "Report them to upper management", correct: false },
      { text: "Ignore the issue and hope it resolves itself", correct: false },
    ],
  },
  {
    question:
      "During a critical meeting, your manager proposes a strategy you strongly believe is flawed. How do you respond?",
    answers: [
      { text: "Agree with your manager to avoid conflict", correct: false },
      {
        text: "Respectfully express your concerns and provide alternative solutions",
        correct: true,
      },
      {
        text: "Stay silent and discuss your concerns privately with your manager later",
        correct: false,
      },
      {
        text: "Publicly criticize the strategy in the meeting",
        correct: false,
      },
    ],
  },
  {
    question:
      "You are working on a critical project with a tight deadline, and you are overwhelmed with tasks. What should you do?",
    answers: [
      {
        text: "Work extra hours to complete everything yourself.",
        correct: false,
      },
      {
        text: "Delegate some tasks to your team and prioritize the most important ones",
        correct: true,
      },
      { text: "Request an extension for the deadline", correct: false },
      {
        text: "Ignore less important tasks and focus only on major ones",
        correct: false,
      },
    ],
  },
  {
    question:
      "You witness a senior colleague taking credit for a project you significantly contributed to. How do you handle the situation?",
    answers: [
      { text: "Confront the colleague publicly", correct: false },
      {
        text: "Discuss the issue privately with the colleague to seek recognition",
        correct: true,
      },
      { text: "Report the incident to your manager or Hr", correct: false },
      { text: "Let it go and focus on your future work", correct: false },
    ],
  },
  {
    question:
      "You are managing a project, and a key stakeholder requests a major change close to the deadline. What is your course of action?",
    answers: [
      { text: "Refuse the change to stay on schedule", correct: false },
      {
        text: "Accept the change without considering the impact",
        correct: false,
      },
      {
        text: "Assess the feasibility and communicate the implications before deciding",
        correct: true,
      },
      { text: "Implement the change and hope for the best", correct: false },
    ],
  },
];

export { questions };

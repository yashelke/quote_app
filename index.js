


// async function getQuote() {
//   const quoteText = document.getElementById("quoteText");
//   const quoteAuthor = document.getElementById("quoteAuthor");

//   quoteText.textContent = "Fetching Quote...";
//   quoteAuthor.textContent = "";

//   try {
//     const response = await fetch("https://zenquotes.io/api/random");
//     const data = await response.json();

//     quoteText.textContent = `"${data[0].q}"`;
//     quoteAuthor.textContent = `— ${data[0].a}`;
//   } catch (error) {
//     quoteText.textContent = "Error fetching the quote!";
//     quoteAuthor.textContent = "";
//     console.log("Error occurred: ", error);
//   }
// }


// document.addEventListener("DOMContentLoaded", () => {
//   const quoteText = document.getElementById("quoteText");
//   const quoteAuthor = document.getElementById("quoteAuthor");
//   const generateButton = document.getElementById("generateButton");

//   generateButton.addEventListener("click", async () => {
//     quoteText.textContent = "Fetching Quote...";
//     quoteAuthor.textContent = "";

// try {
//   const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
//   const data = await response.json();

//   quoteText.textContent = `"${data[0].q}"`;
//   quoteAuthor.textContent = `— ${data[0].a}`;
// } catch (error) {
//   quoteText.textContent = "Error fetching the quote!";
//   quoteAuthor.textContent = "";
//   console.error("Error occurred:", error);
// }

//   });
// });



// document.addEventListener("DOMContentLoaded", () => {
//   const quoteText = document.getElementById("quoteText");
//   const quoteAuthor = document.getElementById("quoteAuthor");
//   const generateButton = document.querySelector("button");

//   generateButton.addEventListener("click", async () => {
//     quoteText.textContent = "Fetching Quote...";
//     quoteAuthor.textContent = "";

// try {
//   const response = await fetch("https://api.quotable.io/random");
//   const data = await response.json();

//   quoteText.textContent = `"${data.content}"`;
//   quoteAuthor.textContent = `— ${data.author}`;
// } catch (error) {
//   quoteText.textContent = "Error fetching the quote!";
//   quoteAuthor.textContent = "";
//   console.error("Error occurred:", error);
// }


//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const quoteText = document.getElementById("quoteText");
//   const quoteAuthor = document.getElementById("quoteAuthor");
//   const generateButton = document.querySelector("button");

//   generateButton.addEventListener("click", async () => {
//     quoteText.textContent = "Fetching Quote...";
//     quoteAuthor.textContent = "";

//     try {
//       const response = await fetch("https://quotes.rest/qod?language=en", {
//         headers: {
//           Accept: "application/json",
//         }
//       });

//       const data = await response.json();
//       const quote = data.contents.quotes[0];

//       quoteText.textContent = `"${quote.quote}"`;
//       quoteAuthor.textContent = `— ${quote.author}`;
//     } catch (error) {
//       quoteText.textContent = "Error fetching the quote!";
//       quoteAuthor.textContent = "";
//       console.error("Error occurred:", error);
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const quoteText = document.getElementById("quoteText");
//   const quoteAuthor = document.getElementById("quoteAuthor");
//   const generateButton = document.querySelector("button");

//   let quotes = [];

//   // Load quotes from JSON
//   fetch("./quotes.json")
//     .then(response => response.json())
//     .then(data => {
//       quotes = data;
//     })
//     .catch(error => {
//       quoteText.textContent = "Error loading quotes.";
//       console.error("Failed to load quotes:", error);
//     });

//   generateButton.addEventListener("click", () => {
//     if (quotes.length === 0) {
//       quoteText.textContent = "Quotes not loaded yet!";
//       return;
//     }

//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];

//     quoteText.textContent = `"${randomQuote.quote}"`;
//     quoteAuthor.textContent = `— ${randomQuote.author}`;
//   });
// });
// quoteText.style.opacity = 0;
// quoteAuthor.style.opacity = 0;

// setTimeout(() => {
//   quoteText.textContent = `"${randomQuote.quote}"`;
//   quoteAuthor.textContent = `— ${randomQuote.author}`;
//   quoteText.style.opacity = 1;
//   quoteAuthor.style.opacity = 1;
// }, 200);


document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const generateButton = document.querySelector("button");

  let quotes = [];

  // Load quotes from quotes.json
  fetch("./quotes.json")
    .then((response) => response.json())
    .then((data) => {
      quotes = data;
    })
    .catch((error) => {
      quoteText.textContent = "Error loading quotes.";
      console.error("Failed to load quotes:", error);
    });

  generateButton.addEventListener("click", () => {
    if (quotes.length === 0) {
      quoteText.textContent = "Quotes not loaded yet!";
      quoteAuthor.textContent = "";
      return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex]; // ✅ Correctly defined here

    quoteText.textContent = `"${quote.quote}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
  });
});

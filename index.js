

// document.addEventListener("DOMContentLoaded", () => {
//   const quoteText = document.getElementById("quoteText");
//   const quoteAuthor = document.getElementById("quoteAuthor");
//   const generateButton = document.querySelector("button");

//   let quotes = [];

 
//   fetch("./quotes.json")
//     .then((response) => response.json())
//     .then((data) => {
//       quotes = data;
//     })
//     .catch((error) => {
//       quoteText.textContent = "Error loading quotes.";
//       console.error("Failed to load quotes:", error);
//     });

//   generateButton.addEventListener("click", () => {
//     if (quotes.length === 0) {
//       quoteText.textContent = "Quotes not loaded yet!";
//       quoteAuthor.textContent = "";
//       return;
//     }

//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const quote = quotes[randomIndex]; 

//     quoteText.textContent = `"${quote.quote}"`;
//     quoteAuthor.textContent = `— ${quote.author}`;
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const generateButton = document.querySelector("button");

  const API_KEY = "g1Ge6fbR9Z8TbDEVw6hH6w==qiGtTS7qEW0x5dS8"; // ✅ Correctly wrapped in quotes

  generateButton.addEventListener("click", async () => {
    quoteText.textContent = "Fetching Quote...";
    quoteAuthor.textContent = "";

    try {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY, // ✅ Use the constant here
        },
      });

      const data = await response.json();

      if (data.length > 0) {
        const quote = data[0];
        quoteText.textContent = `"${quote.quote}"`;
        quoteAuthor.textContent = `— ${quote.author}`;
      } else {
        quoteText.textContent = "No quote received.";
        quoteAuthor.textContent = "";
      }

    } catch (error) {
      quoteText.textContent = "Error fetching the quote!";
      quoteAuthor.textContent = "";
      console.error("API error:", error);
    }
  });
});


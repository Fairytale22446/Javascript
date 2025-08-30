    const quotes = [
      { text: "“With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”", author: "Quaid-e-Azam" },
      { text: "“Failure is a word unknown to me.”", author: "Quaid-e-Azam" },
      { text: "“Work, work and work alone is the key to success.”", author: "Quaid-e-Azam" },
      { text: "Think 100 times before you take a decision, but once that decision is taken, stand by it as one man.”", author: "Quaid-e-Azam" },
      { text: "“No struggle can ever succeed without women participating side by side with men.”", author: "Quaid-e-Azam" },
      { text: "“Expect the best, prepare for the worst.”", author: "Quaid-e-Azam" },
      { text: "“You are free; you are free to go to your temples. You are free to go to your mosques or any other places of worship.”", author: "Quaid-e-Azam" },
      { text: "“My message to you all is of hope, courage and confidence.”", author: "Quaid-e-Azam" }
    ];

    const wall = document.getElementById("quotesWall");

    quotes.forEach(q => {
      let div = document.createElement("div");
      div.classList.add("quote");
      div.innerHTML = `<p>"${q.text}"</p><div class="author">- ${q.author}</div>`;
      wall.appendChild(div);
    });
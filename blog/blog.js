// Reference to the container where articles will be inserted
const articlesContainer = document.querySelector('#maincontent');

// Example data for the articles
const articles = [
  {
    date: 'July 5, 2022',
    ageRange: '10-14',
    genre: 'Fantasy',
    rating: '★★★★☆',
    title: 'Septimus Heap Book One: Magyk',
    image: 'magyk-img.jpg',
    description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.'
  },
  {
    date: 'December 12, 2021',
    ageRange: '12-16',
    genre: 'Fantasy',
    rating: '★★★★☆',
    title: 'Magnus Chase Book One: Sword of Summer',
    image: 'magnus-chase-img.jpg',
    description: 'Rick Riordan’s Norse Mythology adventure, after his previous success with Greek, Roman, and Egyptian mythology.'
  }
  
];

// Function to build the HTML for a single article
function buildArticleHTML(article) {
  return `
    <section class="article">
      <div class="book-info">
         <h2>${article.date}</h2>
         <p>${article.ageRange}</p>
         <p>${article.genre}</p>
         <p>${article.rating}</p>
      </div>
      <div class="book-details">
         <h2 class="book-title">${article.title}</h2>
         <img class="img" src="${article.image}" alt="Cover of '${article.title}'">
         <p>${article.description}</p>
      </div>
    </section>`;
   
}

// Function to display all articles
function displayArticles() {
  // Clear the container before adding new articles
  articles.forEach(article => {
    // Build the HTML for each article
    const articleHTML = buildArticleHTML(article);
    
    // Append the article HTML to the container
    articlesContainer.innerHTML += articleHTML;
  });
}

// Call the function to display the articles
displayArticles();
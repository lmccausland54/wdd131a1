
const articlesContainer = document.querySelector('#maincontent');


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
    description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good."
  },
  {
    date: 'Feb 12, 2022',
    ageRange: '12-16',
    genre: 'Fantasy',
    rating: '★★★★★',
    title: 'Belgariad Book One: Pawn of Prophecy',
    image: 'pawn-img.jpg',
    description: '"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his "Aunt Pol" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.'
  }

  
];


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


function displayArticles() {
  
  articles.forEach(article => {
    
    const articleHTML = buildArticleHTML(article);
    
    
    articlesContainer.innerHTML += articleHTML;
  });
}


displayArticles();
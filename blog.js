const blogs = [
  { question: 'Difference between map, forEach, filter, and find.', answer: answer1 },
  { question: 'Difference between Local Storage, Session Storage, and Cookies.', answer: answer2 },
  { question: 'What is event loop? How does it works?', answer: answer3 },
  { question: 'Purpose of quizTimer() function.', answer: answer4 },
  { question: 'Purpose of chooseQuiz() function.', answer: answer5 },
];

// load blogs
const blogsContainer = document.getElementById('blogsContainer');
blogs.forEach(blog => {
  const blogUl = document.createElement('ul');
  blogUl.classList.add('text-md', 'my-10');
  blogUl.innerHTML = `
  <li class="my-4">
        <span class="bg-green-600 text-white px-2 rounded">Question:</span>
        <span class="font-medium">${blog.question}</span>
    </li>
    <li class="my-4 text-justify">
        <span class="bg-orange-200 px-2 rounded">Answer:</span>
        <span>${blog.answer}</span>
    </li>
  `;
  blogsContainer.appendChild(blogUl);
});


// redirect to home page
document.getElementById('home-page').addEventListener('click', function () {
  window.location.href = './index.html';
});
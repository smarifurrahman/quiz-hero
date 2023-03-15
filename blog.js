const blogs = [
  { question: 'Difference between map, forEach, filter, and find.', answer: 'ans' },
  { question: 'Difference between Local Storage, Session Storage, and Cookies.', answer: 'ans' },
  { question: 'What is event loop? How does it works?', answer: 'ans' },
  { question: 'Purpose of quizTimer() function.', answer: 'ans' },
  { question: 'Purpose of chooseQuiz() function.', answer: 'ans' },
];

// load blogs
const blogsContainer = document.getElementById('blogsContainer');
blogs.forEach(blog => {
  const blogUl = document.createElement('ul');
  blogUl.classList.add('text-sm', 'my-10');
  blogUl.innerHTML = `
  <li class="my-4">
        <span class="bg-green-600 text-white px-2 rounded">Question:</span>
        ${blog.question}
    </li>
    <li class="my-4">
        <span class="bg-orange-200 px-2 rounded">Answer:</span>
        ${blog.answer}
    </li>
  `;
  blogsContainer.appendChild(blogUl);
});


// redirect to home page
document.getElementById('home-page').addEventListener('click', function () {
  window.location.href = './index.html';
});
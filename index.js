async function fetchAndDisplayPosts() {
  const list = document.getElementById("post-list");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const posts = await response.json();
  

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", fetchAndDisplayPosts);
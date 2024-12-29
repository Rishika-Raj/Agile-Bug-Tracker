document.getElementById("bug-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
  
    const response = await fetch("/add-bug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
  
    if (response.ok) {
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
      loadBugs();
    } else {
      alert("Failed to submit bug.");
    }
  });
  
  async function loadBugs() {
    const response = await fetch("/get-bugs");
    const bugs = await response.json();
  
    const bugList = document.getElementById("bugs");
    bugList.innerHTML = "";
    bugs.forEach((bug) => {
      const li = document.createElement("li");
      li.textContent = `${bug.title}: ${bug.description}`;
      bugList.appendChild(li);
    });
  }
  
  // Load bugs on page load
  loadBugs();
  
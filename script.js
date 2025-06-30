document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value
  };

  fetch("https://sheetdb.io/api/v1/v38c5yrea3ire", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data })
  })
  .then(response => response.json())
  .then(json => {
    alert("✅ Thanks for signing up!");
    document.getElementById("signupForm").reset();
  })
  .catch(error => {
    alert("❌ Submission failed. Please try again.");
    console.error(error);
  });
});

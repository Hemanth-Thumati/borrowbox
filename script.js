document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = e.target.elements;
  const data = {
    name: inputs["name"].value,
    email: inputs["email"].value,
    city: inputs["city"].value
  };

  fetch("https://sheetdb.io/api/v1/v38c5yrea3ire", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: data })
  })
  .then(res => res.json())
  .then(json => {
    alert("✅ Thanks for signing up!");
    e.target.reset();
  })
  .catch(err => {
    alert("❌ Submission failed. Try again.");
    console.error(err);
  });
});

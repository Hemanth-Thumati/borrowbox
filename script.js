<script>
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
    .then(res => res.json())
    .then(response => {
      alert("✅ Thanks for signing up! We'll notify you soon.");
      document.getElementById("signupForm").reset();
    })
    .catch(err => {
      alert("❌ Submission failed. Try again later.");
      console.error(err);
    });
  });
</script>

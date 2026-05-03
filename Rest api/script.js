function searchUser() {
  let username = document.getElementById("searchInput").value;

  if(username === "") {
    alert("Please enter username");
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {

      if(data.message === "Not Found") {
        document.getElementById("result").innerHTML = "<p>User not found</p>";
        return;
      }

      document.getElementById("result").innerHTML = `
        <img src="${data.avatar_url}">
        <h3>${data.name}</h3>
        <p>${data.bio}</p>
        <p>Followers: ${data.followers}</p>
        <p>Public Repos: ${data.public_repos}</p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerHTML = "<p>Error fetching data</p>";
    });
}
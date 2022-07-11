console.log("hello")
const button = document.getElementById("submit")
const getEmail = document.getElementById("input-email").value
const getPassword = document.getElementById("input-password").value
console.log(getEmail, getPassword);

function fetchData() {
  console.log("hii")
  const getEmail = document.getElementById("input-email").value
  const getPassword = document.getElementById("input-password").value
  console.log(getEmail, getPassword);

  let url = "localhost:4000/login"


  let data = fetch(url, {
    method: "post",
    body: {
      email: getEmail,
      password: getPassword
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    res.json()
  }).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error + "from error")
  })



  console.log(data)
}

button.addEventListener("click", fetchData)

function submit() {
  var password = document.getElementById("rectangle-2").value;
  var username = document.getElementById("div").value;
  if (username == "admin" && password == "250406") {
    window.location.replace("home.html");
  } else {
    alert("username or password wrong!!");
  }
}

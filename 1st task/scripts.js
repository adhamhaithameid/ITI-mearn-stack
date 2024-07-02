function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(pageId).style.display = "block";

  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  document
    .querySelector(`nav ul li a[href="#${pageId}"]`)
    .classList.add("active");

  if (pageId === "birthday") {
    setTimeout(() => {
      document.getElementById("birthday-image").style.display = "none";
      document.getElementById("message-form").style.display = "block";
    }, 5000);
  }
}

function submitMessage() {
  if (document.getElementById("birthday")) {
    document.getElementById("birthday").innerHTML =
      "<h2>Thank you for your message!</h2>";
  }
}

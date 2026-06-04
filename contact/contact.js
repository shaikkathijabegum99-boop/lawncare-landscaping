
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  document.getElementById("status").innerText =
    "Message sent successfully!";
});


function toggleTheme(){
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");

  root.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark"
  );
}


function toggleRTL(){
  document.body.dir =
    document.body.dir === "rtl" ? "ltr" : "rtl";
}
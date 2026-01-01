function toggleMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark");
  } else {
    localStorage.setItem("light");
  }
}

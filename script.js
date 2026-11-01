// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Keep only one career entry open at a time
const jobs = document.querySelectorAll(".job");
jobs.forEach((job) => {
  job.addEventListener("toggle", () => {
    if (job.open) jobs.forEach((other) => { if (other !== job) other.open = false; });
  });
});

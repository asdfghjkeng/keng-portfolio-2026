// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Keep only one career entry open at a time
const jobs = document.querySelectorAll(".job");
jobs.forEach((job) => {
  job.addEventListener("toggle", () => {
    if (job.open)
      jobs.forEach((other) => {
        if (other !== job) other.open = false;
      });
  });
});
const copyBtn = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  ta.remove();
}

copyBtn.addEventListener("click", async () => {
  try {
    await copyText(copyBtn.dataset.email);
    copyBtn.textContent = "Copied!";
    copyStatus.textContent = "Email copied to clipboard";
  } catch (err) {
    copyBtn.textContent = "Copy failed";
    copyStatus.textContent = "Could not copy email";
  }
  setTimeout(() => {
    copyBtn.textContent = "Copy email";
    copyStatus.textContent = "";
  }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebar-toggle");
  const navContainer = document.getElementById("sidebar-nav");

  // CENTRAL REGISTRY: Add, remove, or edit your pages here
  const menuItems = [
    { name: "Main", url: "index.html" },
    { name: "Shellshockers", url: "shellshock.html" },
    { name: "Space waves", url: "spacewaves.html" },
    //{ name: "Contact", url: "contact.html" }
  ];

  // Auto-generate HTML links from the array
  navContainer.innerHTML = menuItems
    .map(item => `<a href="${item.url}">${item.name}</a>`)
    .join("");

  // Toggle open/close class on click
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});

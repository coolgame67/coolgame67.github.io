document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebar-toggle");
  const navContainer = document.getElementById("sidebar-nav");

  // CENTRAL REGISTRY: Add, remove, or edit your pages here
  const menuItems = [
    { name: "Home", url: "index.html" },
    { name: "About Us", url: "about.html" },
    { name: "Services", url: "services.html" },
    { name: "Contact", url: "contact.html" }
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

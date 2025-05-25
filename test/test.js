function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "-250px") {
        sidebar.style.right = "0";
        sidebar.style.display = "flex";
        document.addEventListener("click", closeSidebarOnClickOutside);
    } else {
        sidebar.style.right = "-250px";
        document.removeEventListener("click", closeSidebarOnClickOutside);
    }
}

function closeSidebarOnClickOutside(event) {
    var sidebar = document.getElementById("sidebar");
    var hamburger = document.querySelector(".hamburger");

    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.style.right = "-250px";
        document.removeEventListener("click", closeSidebarOnClickOutside);
    }
}
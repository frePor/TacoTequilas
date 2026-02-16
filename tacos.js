document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector("#site-sidebar");
    const toggleButton = document.querySelector(".sidebar-toggle");
    const closeButton = document.querySelector(".sidebar-close");
    const backdrop = document.querySelector(".sidebar-backdrop");
    const sidebarLinks = document.querySelectorAll(".sidebar-links a");

    if (!sidebar || !toggleButton || !closeButton || !backdrop) {
        return;
    }

    const openSidebar = () => {
        sidebar.hidden = false;
        backdrop.hidden = false;
        document.body.classList.add("sidebar-open");
        toggleButton.setAttribute("aria-expanded", "true");
        closeButton.focus();
    };

    const closeSidebar = () => {
        sidebar.hidden = true;
        backdrop.hidden = true;
        document.body.classList.remove("sidebar-open");
        toggleButton.setAttribute("aria-expanded", "false");
    };

    toggleButton.addEventListener("click", () => {
        const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            closeSidebar();
            return;
        }
        openSidebar();
    });

    closeButton.addEventListener("click", closeSidebar);
    backdrop.addEventListener("click", closeSidebar);

    sidebarLinks.forEach((link) => {
        link.addEventListener("click", closeSidebar);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !sidebar.hidden) {
            closeSidebar();
            toggleButton.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 920 && !sidebar.hidden) {
            closeSidebar();
        }
    });
});

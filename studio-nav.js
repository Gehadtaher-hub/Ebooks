(function () {
  "use strict";

  if (document.getElementById("back-to-lectures")) return;

  const style = document.createElement("style");
  style.textContent = `
    #back-to-lectures {
      position: fixed;
      top: 12px;
      left: 12px;
      z-index: 2147483647;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 12px;
      background: #172554;
      color: white;
      text-decoration: none;
      font: 700 14px system-ui, -apple-system, "Segoe UI", sans-serif;
      box-shadow: 0 8px 24px rgba(23, 37, 84, 0.28);
    }

    #back-to-lectures:hover {
      background: #2563eb;
    }

    @media (max-width: 600px) {
      #back-to-lectures {
        top: 8px;
        left: 8px;
        padding: 9px 11px;
        font-size: 13px;
      }
    }
  `;
  document.head.appendChild(style);

  const link = document.createElement("a");
  link.id = "back-to-lectures";
  link.href = "index.html";
  link.textContent = "← Back to Lectures";
  link.setAttribute("aria-label", "Back to Distributed Systems lectures");
  document.body.appendChild(link);
})();

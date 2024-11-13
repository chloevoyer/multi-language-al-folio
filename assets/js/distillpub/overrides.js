$(document).ready(function () {
  // Existing footnotes styling
  document.querySelectorAll("d-footnote").forEach(function (footnote) {
    footnote.shadowRoot.querySelector("sup > span").setAttribute("style", "color: var(--global-theme-color);");
    footnote.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {background-color: var(--global-bg-color) !important;}");
    footnote.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {border-color: var(--global-divider-color) !important;}");
  });

  // Existing citations styling
  document.querySelectorAll("d-cite").forEach(function (cite) {
    cite.shadowRoot.querySelector("div > span").setAttribute("style", "color: var(--global-theme-color);");
    cite.shadowRoot.querySelector("style").sheet.insertRule("ul li a {color: var(--global-text-color) !important; text-decoration: none;}");
    cite.shadowRoot.querySelector("style").sheet.insertRule("ul li a:hover {color: var(--global-theme-color) !important;}");
    cite.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {background-color: var(--global-bg-color) !important;}");
    cite.shadowRoot
      .querySelector("d-hover-box")
      .shadowRoot.querySelector("style")
      .sheet.insertRule(".panel {border-color: var(--global-divider-color) !important;}");
  });

  // Add last updated date to byline
  function addLastUpdated() {
    const frontMatter = document.querySelector("d-front-matter");
    if (!frontMatter) return;

    try {
      const data = JSON.parse(frontMatter.firstElementChild.textContent);
      if (!data.lastUpdated) return;

      const byline = document.querySelector("d-byline .byline");
      if (!byline) return;

      const publishedDate = byline.querySelector(".published");
      if (!publishedDate) return;

      // Create last updated element
      const lastUpdated = document.createElement("div");
      lastUpdated.className = "last-updated";
      
      // Add language-specific text
      const lang = document.documentElement.lang || "en";
      const label = lang.startsWith("fr") ? "Dernière mise à jour" : "Last updated";
      
      lastUpdated.innerHTML = `
        <span class="dt-updated">
          ${label}: ${data.lastUpdated}
        </span>
      `;

      // Insert after published date
      publishedDate.insertAdjacentElement("afterend", lastUpdated);

      // Add styles to match your theme
      const style = document.createElement("style");
      style.textContent = `
        d-byline .last-updated {
          grid-column: text;
          font-size: 0.8em;
          color: var(--global-text-color);
          opacity: 0.8;
          margin-top: 0.5em;
        }
        d-byline .last-updated:hover {
          color: var(--global-theme-color);
        }
      `;
      document.head.appendChild(style);
    } catch (e) {
      console.error("Error adding last updated date:", e);
    }
  }

  // Run last updated function
  addLastUpdated();
});

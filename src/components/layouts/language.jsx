// LanguageSelector.jsx
import { useEffect, useState } from "react";

const LanguageSelector = () => {
  const defaultLanguage = "nl";

  const changeLanguage = (e) => {
    e.preventDefault();
    alert("YES");
    const selectedLanguage = e.target.value;
    let newUrl;

    const currentUrl = new URL(window.location);
    const pathSegments = currentUrl.pathname.split("/").filter(Boolean); // Remove empty values

    if (selectedLanguage === defaultLanguage) {
      // If the default language is selected, remove the language segment if present
      if (["en", "de"].includes(pathSegments[0])) {
        pathSegments.shift(); // Remove the first segment (language code)
      }
    } else {
      // If a non-default language is selected, update or add the language segment
      if (["en", "de", "nl"].includes(pathSegments[0])) {
        pathSegments[0] = selectedLanguage; // Replace the first segment with the new language code
      } else {
        pathSegments.unshift(selectedLanguage); // Add the new language code as the first segment
      }
    }

    newUrl = `${currentUrl.origin}/${pathSegments.join("/")}${
      currentUrl.search
    }`;

    console.log(newUrl);
    window.location.href = newUrl; // Redirect to the new URL
  };

  useEffect(() => {
    console.log("Yes i");
  }, []);

  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Action
        </a>
        <a class="dropdown-item" href="#">
          Another action
        </a>
        <a class="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
};

export default LanguageSelector;

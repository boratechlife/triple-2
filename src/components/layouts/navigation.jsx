import { useEffect, useState } from "react";
import navigation from "@data/navigation.json";

import LanguageSelector from "@components/layouts/language";
import i18next, { t } from "i18next";
import { Trans, HeadHrefLangs } from "astro-i18next/components";

export default function Navigation({ pageUrl }) {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 70);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    const navbar = $("#mainnavigationBar");
    navbar.toggleClass("bg-nav");
  };

  const handleChange = (event) => {
    alert("Yes...");
  };

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg position-fixed w-100 zindex-dropdown${
            isSticky ? " sticky-nav" : ""
          }`}
          id="mainnavigationBar"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={navigation.logo} alt="Nav-Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleClick}
            >
              <span className="navbar-toggler-default">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="3.5"
                    y1="5.5"
                    x2="21.5"
                    y2="5.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="4.5"
                    y1="12.5"
                    x2="21.5"
                    y2="12.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="11.5"
                    y1="19.5"
                    x2="21.5"
                    y2="19.5"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="navbar-toggler-toggled">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 6.5L6.5 21.5"
                    stroke="#404152"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.5 21.5L6.5 6.5"
                    stroke="#404152"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-20 mb-lg-0">
                {navigation.items.map((link, i) => (
                  <li key={i} className="nav-item">
                    <a
                      href={
                        link.link !== "/"
                          ? `/${i18next.language}${link.link}`
                          : `${link.link}`
                      }
                      className={`nav-link ${
                        pageUrl?.pathname === link.link ? "active" : ""
                      }`}
                    >
                      {t(`navigation.items.${i}.text`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-none d-lg-block">
              <div className="nav-item">
                <a
                  href={
                    navigation.btn.link !== "/"
                      ? `/${i18next.language}${navigation.btn.link}`
                      : `${navigation.btn.link}`
                  }
                  className="btn btn-sm btn-links"
                >
                  {t("navigation.btn.text")}
                </a>
              </div>
            </div>

            <div className="mx-1 py-4">
              <select
                name=""
                className="custom-select form-control-lg border-0"
                id="select-language"
                defaultValue={i18next.language}
              >
                <option value="nl">nl</option>
                <option value="en">en</option>
                <option value="de">De</option>
              </select>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

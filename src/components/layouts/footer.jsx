import footer from "@data/footer.json";

import i18next, { t } from "i18next";
import { Trans, HeadHrefLangs } from "astro-i18next/components";

export default function Footer({}) {
  return (
    <footer className="footer pt-xxl-19 pt-8 pb-sm-7 pb-5" id="footer">
      <div className="container-fluid">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-12 col-lg-4 me-auto order-2 order-lg-1">
              <div className="footer-logo mt-7 mt-md-0">
                <a href={footer.logo_url} className="">
                  <img src={footer.logo} alt="logo" />
                </a>
                <p>
                  © Copyright <span>{new Date().getFullYear()}</span>{" "}
                  {t("footer.copyright")}
                </p>
              </div>
              <div className="social-icon">
                <ul className="list-unstyled">
                  {footer.social.map((link, i) => (
                    <li key={i}>
                      <a href={`${link.link}`}>
                        <i className={link.icon} aria-hidden="true">
                          <span className="visually-hidden">
                            {link.icon_alt}
                          </span>
                        </i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {footer.sections.map((section, i) => (
              <div className="col-6 col-md-3 col-lg-2 order-1" key={i}>
                <div className="footer-widget">
                  <h3 className=""> {t(`footer.sections.${i}.title`)}</h3>
                  <ul className="list-unstyled">
                    {section.links.map((link, k) => (
                      <li key={k}>
                        <a href={`${link.link}`}>
                          <a
                            href={
                              link.link !== "/"
                                ? `/${i18next.language}${link.link}`
                                : `${link.link}`
                            }
                          >
                            {link.text}
                          </a>
                          {t(`footer.section.${i}.links.${k}.text`)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

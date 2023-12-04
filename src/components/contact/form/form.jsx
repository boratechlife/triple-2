export default function ContactForm(block) {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 me-auto order-2 order-lg-1">
            <div className="contact-form-Information">
              <div className="address">
                {block.address && (
                  <>
                    <h3>{block.address.heading}</h3>
                    <p>{block.address.address}</p>
                  </>
                )}
                <div className="item mb-4">
                  {block.phone && (
                    <>
                      <h3>{block.phone.heading}</h3>
                      <a href={`tel:${block.phone.cell}`}>
                        {block.phone.cell}
                        <span>
                          <img
                            src={block.phone.image}
                            alt={block.phone.image_alt}
                            loading="lazy"
                          />
                        </span>
                      </a>
                    </>
                  )}
                </div>
                <div className="item">
                  {block.email && (
                    <>
                      <h3>{block.email.heading}</h3>
                      <a href={`mailto:${block.email.email}`}>
                        {block.email.email}
                        <span>
                          <img
                            src={block.email.image}
                            alt={block.email.image_alt}
                            loading="lazy"
                          />
                        </span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="contact-form">
              <div class="calendly-inline-widget" data-url="https://calendly.com/bram-tripleblue/30min-demo" style={'min-width:320px;height:700px'}></div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              
              <div className="effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

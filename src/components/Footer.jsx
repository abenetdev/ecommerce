import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="store-locator">Store locator</a>
          <a href="/faqs">FAQs</a>
          <a href="/news">News</a>
          <a href="/carrers">Careers</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/abenetdev"
          >
            &nbsp; Abenet Adugna
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;

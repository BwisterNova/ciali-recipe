import { FiClock, FiHome, FiMail, FiPhone } from "react-icons/fi";
import styles from "./contactPage.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactImage}>
        <h2>Contact Us</h2>
        <p>
          Have a question, comment, or suggestion? We’d love to hear from you!
          Get in touch with us using the form below, and we’ll get back to you
          as soon as possible.
        </p>
      </div>

      <div className={styles.getInTouchContainer}>
        <h3>Get in Touch</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero
          fugiat error. Sunt dolore mollitia nam fugiat facere hic aliquid
          impedit quod, fugit veniam quos quasi nesciunt ullam distinctio eos.
        </p>
        <div className={styles.contactInfo}>
          <div>
            <FiPhone className={styles.icon} />
            <div>
              <h4>Phone:</h4>
              <p>123-456-7890</p>
            </div>
          </div>
          <div>
            <FiMail className={styles.icon} />
            <div>
              <h4>Email:</h4>
              <p>mail@mail.com</p>
            </div>
          </div>
          <div>
            <FiClock className={styles.icon} />
            <div>
              <h4>Hours:</h4>
              <p>Monday - Friday: 9am - 5pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

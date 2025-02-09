import React from "react";
import "./ContactUs.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Titre centré */}
      <div className="contact-title">
        <h2>Contact Us</h2>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>

      {/* Section gauche : Informations de contact */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        <ul>
          <li>📞 +012 3456 789</li>
          <li>📧 demo@gmail.com</li>
          <li>📍 132 Dartmouth Street Boston, Massachusetts 02156 USA</li>
        </ul>
        {/* Icônes Réseaux Sociaux */}
        <div className="social-icons">
          <span>🔵</span>
          <span>🔴</span>
          <span>🟡</span>
        </div>
      </div>

      {/* Section droite : Formulaire de contact */}
      <div className="contact-form">
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <div className="subject">
            


                    <div class="subject">
                <p>Select Subject:</p>
                <div>
                    <label><input type="radio" name="subject" value="general" /> General Inquiry</label>
                    <label><input type="radio" name="subject" value="support" /> Support</label>
                    <label><input type="radio" name="subject" value="feedback" /> Feedback</label>
                </div>
            </div>




          </div>
          <textarea placeholder="Write your message..." rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

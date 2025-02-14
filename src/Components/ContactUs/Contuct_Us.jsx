import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      {/* Bouton Retour */}
      {/* <button className="back-button" onClick={() => console.log('click')}>← Back</button> */}
      <Link to="/" className="go-back">← Go Back</Link>


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
          
          {/* Choix du sujet */}
       
              <div className="subject">
                  <p>Select Subject:</p>
                  <div className="choise">
                      <table>
                            <tbody>
                               <tr>
                                <td><label>Support</label></td>
                               <td><input type="radio" name="support" id="suport" /></td>
                               </tr>

                               <tr>
                                <td><label>Error</label></td>
                               <td><input type="radio" name="Error" id="Error" /></td>
                               </tr>


                               <tr>
                                <td><label>Achat</label></td>
                               <td><input type="radio" name="Achat" id="Achat" /></td>
                               </tr>

                            </tbody>
                      </table>
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

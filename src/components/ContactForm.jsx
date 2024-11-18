import React from "react";

function ContactForm() {
    return(
        <div class="contact-container" id="ContactForm">
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us for inquiries, feedback, or collaboration opportunities. We're here to help!</p>
            <form class="contact-form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />

                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Type your message here..." rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>

    );
}
export default ContactForm
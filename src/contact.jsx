export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p>Let's connect for web development, security, or data optimization opportunities.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
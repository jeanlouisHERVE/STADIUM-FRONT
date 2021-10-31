import './styles.scss';

const ContactForm = () => (
  <form action="" onSubmit="">
    <div className="formWord">
      <h2>Say Hello!</h2>
      <span>Full Name</span>
      <br />
      <input className="input100" type="text" name="fullName" required />
      <br />
      <span>Phone Number</span>
      <br />
      <input className="input100" type="text" name="phone" required />
      <br />
      <span>Enter Email</span>
      <br />
      <input className="input100" type="text" name="email" required />
      <br />
    </div>
    <div className="formWord">
      <span>Message</span>
      <br />
      <textarea name="message" required />
      <br />
      <button type="submit" attribut="">SUBMIT</button>
      <div className="row">All Done</div>
    </div>
  </form>
);

// == Export
export default ContactForm;

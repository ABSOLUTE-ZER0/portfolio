import React, { useState } from "react";
import Header from "../layout/Header";
import API from "../../api";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  const sendMail = async () => {
    const { name, email, subject, message } = mailData;
    const res = await API.post("/api/contact/selfmail", {
      name,
      email,
      subject,
      message,
    });

    if (res.data.errors) {
      window.alert(res.data.errors[0].msg);
    } else {
      window.alert("Message sent! We will get back to you shortly");
      window.location.reload();
    }
  };

  return (
    <div className='contact'>
      <Header page='contact' />
      <div className='contact__details'>
        <h1>Lets Work together</h1>
        <p className='d-none d-lg-block'>
          Get in touch with me via filling out the form
        </p>
        <h3 className='d-none d-lg-block'>Or</h3>
        <p className='d-none d-lg-block'>You can contact me directly</p>
        <p>
          P: <span>+91 6300 499 255</span>
        </p>
        <p>
          E: <span>sricharan@abslzero.in</span>
        </p>
      </div>
      <div className='contact__form box-shadow'>
        <div className='contact__form-div'>
          <input
            value={mailData.name}
            name='name'
            onChange={handleInput}
            className='contact__form-input'
            type='text'
            placeholder='Name'
            autoComplete='off'></input>
        </div>
        <div className='contact__form-div'>
          <input
            value={mailData.email}
            name='email'
            onChange={handleInput}
            className='contact__form-input'
            type='text'
            placeholder='Email ID'
            autoComplete='off'></input>
        </div>
        <div className='contact__form-div'>
          <input
            value={mailData.subject}
            name='subject'
            onChange={handleInput}
            className='contact__form-input'
            type='text'
            placeholder='Subject'
            autoComplete='off'></input>
        </div>
        <div className='contact__form-div'>
          <textarea
            value={mailData.message}
            name='message'
            onChange={handleInput}
            rows={4}
            style={{ resize: "none" }}
            className='contact__form-input'
            type='text-area'
            placeholder='Message'
            autoComplete='off'></textarea>
        </div>
        <div className='contact__button-div'>
          <button
            variant=''
            onClick={sendMail}
            className='btn contact__form-btn'>
            Submit
          </button>
        </div>
      </div>

      <div className='scroll'></div>
    </div>
  );
};

export default Contact;

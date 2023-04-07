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

  var script = document.createElement("script");
  script.id = "ff-script";
  script.src =
    "https://formfacade.com/include/111761761289842912019/form/1FAIpQLScNbMe_5yg4k5FdZAJXo6eI0LjRgqVynXKVSk_RomQu6f6v1Q/classic.js?div=ff-compose";
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);

  return (
    <div className='contact'>
      <Header page='contact' />
      <div className='contact__details'>
        <h1>Lets Work together</h1>
        <p className='d-none d-lg-block'>
          Get in touch by filling out the form
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
      <div id="ff-compose" className='contact__form box-shadow'>
        <iframe
          title='contactForm'
          id='contact__form-iframe'
          class='contact__form-iframe'
          src='https://docs.google.com/forms/d/e/1FAIpQLScNbMe_5yg4k5FdZAJXo6eI0LjRgqVynXKVSk_RomQu6f6v1Q/viewform?embedded=true'
          width='640'
          height='809'
          frameborder='0'
          marginheight='0'
          marginwidth='0'>
          Loading…
        </iframe>
      </div>

      <div className='scroll'></div>
    </div>
  );
};

export default Contact;

import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9061a4ea-ad3d-4650-8693-de57abededa0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    }
    
    else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <img src={msg}alt="" />
            <h3>Send us a message</h3>
            <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Itaque recusandae laboriosam 
                nobis ipsum veniam similique
                 expedita nihil non sapiente 
                 laborum maxime voluptatum 
                 magni, iste deleniti incidunt 
                 veritatis consequatur
                 rem distinctio!</p>
                 <ul>
                <li> <img src={mail} alt="" /> contact@gmail.com</li>
                    <li> <img src={phone} alt="" /> +233599316218</li>
                    <li> <img src={location} alt="" /> Ghana </li>
                    {/* <li> 77 Massachuset Ave, Cambridge<>MA 02139, United State </li> */}
                 </ul>
        </div>

        <div className="contact-col">
            <form action=""onSubmit={onSubmit} >
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows='6' placeholder='Enter Your Message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={
                    arrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact

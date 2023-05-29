// npm i emailjs-com
import emailjs from 'emailjs-com'
import React from 'react'

const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('').then(res=>{
            console.log(res);
            console.log(e.target);
            alert(
                "Subscribed Successfully! check your email"
            )
        }).catch(err=>console.log(err));

    }
       
  return (
    <form class="form-inline" onSubmit={sendEmail}>
        <div class="input-group">
        <input type="email" name="email" class="form-control" placeholder="Enter your email" required />
        <div class="input-group-append">
            <button type="submit" class="btn btn-success">Subscribe</button>
        </div>
        </div>
    </form>
  )
}

export default Mailer
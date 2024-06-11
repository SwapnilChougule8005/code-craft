import React from 'react';
import  './styles.css'
import Header from '../../components/header';
const Contact = () => {
    return (
        <div>
            <Header/>
            <h2 className='h2'>Class Address</h2>
            <p className='address'>
                Laxmipush apartment,
                Flat no 102, 1st floor,
                swapn nagari, spurti choek, vishrambag,
                sangli 416415.Email: learncodecraf.tech@gmail.com
            </p>
            <h5>Contact Us</h5>
            <p className='phone'>+91 8087823247</p>
            <p className='phone'>+91 7218640134</p>
        </div>
    )
}
export default Contact;
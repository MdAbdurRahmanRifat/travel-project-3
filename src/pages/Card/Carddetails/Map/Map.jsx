import React from 'react'

const Map = () => {
  return (
    <>
    
      <div className="w-full flex  flex-shrink-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59420.95196853201!2d91.95166094192302!3d21.436731606067866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1733333040655!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
   
    </>
  )
}

export default Map

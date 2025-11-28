"use client";

export default function Map() {
    return (
        <div className="container1 flex items-center justify-center flex-col">
            {/* <h1 className="p-2 text-2xl text-white">Map Component</h1> */}
            <iframe
                className="rounded-md shadow-md border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46583.7025272697!2d5.892153735559353!3d43.13641926296322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c91b027b35b2fd%3A0x40819a5fd8fc830!2sToulon!5e0!3m2!1sfr!2sfr!4v1764345042710!5m2!1sfr!2sfr"
                width="550"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            ></iframe>
        </div>
    );
}

import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="grid justify-items-start place-content-center px-4 py-6">
        <p className="text-4xl font-bold text-[#869bd4]">Contact Us</p>
        <p className="mt-5 text-xl text-[black] font-semibold">
          Office of the Prime Minister, Government House
        </p>
        <p className="text-xl text-[black] font-semibold">
          Location: No. 1 Nakhon Pathom Road, Dusit District, Bangkok 10300
        </p>
        <br />
        <div className="text-md">
          <p>Email: depathailand@depa.or.th</p>
          <p>Location: 234/431 Lat Phrao Road, Soi Lat Phrao 10</p>
          <p>Chom Phon Subdistrict, Chatuchak District, Bangkok 10900</p>
          <p>This website is created by Digital Economy Promotion Agency.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

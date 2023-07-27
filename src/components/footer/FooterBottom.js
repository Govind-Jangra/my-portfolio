import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
        <p className="text-center text-2xl text-white ">
           © {new Date().getFullYear()}. All rights reserved by Govind
        </p>
    </div>
  );
}

export default FooterBottom
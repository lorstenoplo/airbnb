import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="text-lg font-bold">ABOUT</h5>

        <p className="footerItem">How Airbnb work</p>
        <p className="footerItem">Newsroom</p>
        <p className="footerItem">Investors</p>
        <p className="footerItem">Airbnb Plus</p>
        <p className="footerItem">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="text-lg font-bold">COMMUNITY</h5>

        <p className="footerItem">Accessibility</p>
        <p className="footerItem">This is not a real site</p>
        <p className="footerItem">Built For demonstration purposes</p>
        <p className="footerItem">Pedro Goncalves</p>
        <p className="footerItem">Web Developer</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="text-lg font-bold">HOST</h5>

        <p className="footerItem">How Airbnb work</p>
        <p className="footerItem">Newsroom</p>
        <p className="footerItem">Investors</p>
        <p className="footerItem">Airbnb Plus</p>
        <p className="footerItem">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="text-lg font-bold">SUPPORT</h5>

        <p className="footerItem">Help Center</p>
        <p className="footerItem">Trust & Safety</p>
        <p className="footerItem">More things</p>
        <p className="footerItem">Airbnb Plus</p>
        <p className="footerItem">Airbnb Luxe</p>
      </div>
    </footer>
  );
};

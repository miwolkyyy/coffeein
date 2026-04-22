import React from "react";

function Locations() {
  return (
    <div className="w-full py-6">
      <h1 className="font-bold text-secondary text-center text-5xl capitalize">our location</h1>
      <iframe
        className="md:w-220 w-96 h-90 rounded-xl border-2 border-base-200 mx-auto mt-4 "
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12149.588409130092!2d-79.84463015167391!3d9.152963376820239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1776763361223!5m2!1sid!2sid"
        // width="6500"
        // height="450"
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Locations;

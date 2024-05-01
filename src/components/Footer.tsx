"use client";

const Footer = () => {
  const data = {
    name: "Van",
    year: new Date().getFullYear()
  };

  return (
    <div className="flex items-center justify-center ">
      <h3 className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        &copy; {data.year} {data.name}
      </h3>
    </div>
  );
};

export default Footer;

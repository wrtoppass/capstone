import Logo from "@/assets/mushroomexpress.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            This is not a real service. Do not put any delicate info into the sign-in or 
            register. 
          </p>
          <p>© Mushroom Express All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Facebook</p>
          <p>Twitter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">William Toppass</p>
          <p>(333)333-3333</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

// Images
import cart1 from "@/assets/carts/cart-1.png";
import cart2 from "@/assets/carts/cart-2.png";
import cart3 from "@/assets/carts/cart-3.png";

const Discover = () => {
  return (
    <div className="discover bg-[#0D2612]">
      <div className="wrapper text-slate-100 pb-20">
        <div className="discover__info py-12 text-center">
          <h2 className="text-3xl font-Hammer">
            Discover news and innovations
          </h2>
        </div>
        <div className="discover__carts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-[6%]">
          <div className="discover__carts--item text-center sm:text-left">
            <img
              src={cart1}
              alt="cart images"
              className="max-h-72 object-contain sm:object-fill"
            />
            <div className="cart__info grid gap-4">
              <h4 className="text-xl md:text-[calc(.9rem+.7vw)] mt-7 font-Hammer">
                Always in the Game
              </h4>
              <p className="text-sm md:text-[calc(.4rem+.7vw)] leading-5 font-Readex">
                Stay ahead of the latest and greatest gaming tech, featuring new
                releases, exclusive deals, and exciting pre-orders.
              </p>
              <a href="#" className="underline underline-offset-4 font-Readex">
                See More
              </a>
            </div>
          </div>
          <div className="discover__carts--item text-center sm:text-left">
            <img
              src={cart2}
              alt="cart images"
              className="max-h-72 object-contain sm:object-fill"
            />
            <div className="cart__info grid gap-4">
              <h4 className="text-xl md:text-[calc(.9rem+.7vw)] mt-7 font-Hammer">
                Enhance Your Experience
              </h4>
              <p className="text-sm md:text-[calc(.4rem+.7vw)] leading-5 font-Readex">
                Upgrade Your World by Elevating your setup and personalize your
                space with our collection of stylish and functional gaming
                accessories.
              </p>
              <a href="#" className="underline underline-offset-4 font-Readex">
                See More
              </a>
            </div>
          </div>
          <div className="discover__carts--item text-center sm:text-left">
            <img
              src={cart3}
              alt="cart images"
              className="max-h-72 object-contain sm:object-fill"
            />
            <div className="cart__info grid gap-4">
              <h4 className="text-xl md:text-[calc(.9rem+.7vw)] mt-7 font-Hammer">
                Command the Battle!
              </h4>
              <p className="text-sm md:text-[calc(.4rem+.7vw)] leading-5 font-Readex">
                Take control with our diverse range of gaming
                keyboards, featuring mechanical switches for tactile feedback
                etc.
              </p>
              <a href="#" className="underline underline-offset-4 font-Readex">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

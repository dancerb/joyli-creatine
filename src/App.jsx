import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import confetti from 'canvas-confetti';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    if (typeof window !== 'undefined') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleCartClick = () => {
    setCartCount(0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white p-4 text-center text-lg">
        FREE SHIPPING ON ALL ORDERS! 🚚
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-5xl mx-auto p-4 w-full">
          <nav className="flex justify-between items-center py-4">
            <div className="text-4xl font-bold text-teal-500">
              <img src="logo.png" alt="Joyli Logo" className="w-48 h-auto" />
            </div>
            <div className="space-x-4 text-lg">
              <a href="#" className="hover:underline">SHOP</a>
              <a href="#" className="hover:underline">ABOUT</a>
              <a href="#" className="hover:underline">REVIEWS</a>
              <a href="#" className="hover:underline">BLOG</a>
            </div>
            <div className="space-x-4 text-lg flex items-center">
              <button className="relative">
                <img src="user.png" alt="Account" className="w-6 h-6" />
              </button>
              <button
                className="relative"
                onClick={handleCartClick}
                aria-label="Cart"
              >
                <img src="shopping-cart.png" alt="Cart" className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </nav>

          <main className="pb-16">
            <div className="flex flex-col items-center">
              <img src="product.png" alt="Creatine Infused Gummies" className="w-96 h-auto object-cover" style={{ maxWidth: '600px', maxHeight: '500px' }} />
              <h1 className="text-5xl font-bold mt-4">CREATINE INFUSED GUMMIES</h1>
              <h2 className="text-3xl text-red-500 mt-2">STRAWBERRY</h2>
              <p className="mt-2 text-xl">5g of Creatine Monohydrate Per Serving. 30 Servings. Sugar Free, Vegan, Halal</p>
              <p className="mt-2 text-3xl font-bold">$24.99</p>

              <div className="flex mt-4 w-full max-w-xs">
                <button
                  className="flex-grow bg-black text-white rounded px-6 py-2 text-lg mr-2"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button className="flex-grow bg-blue-600 text-white rounded px-6 py-2 text-lg ml-2">
                  Subscribe
                </button>
              </div>

              <div className="w-full mt-8 overflow-hidden">
                <Slider {...sliderSettings}>
                  <div>
                    <img src="creatine.png" alt="Creatine" className="w-full h-auto object-cover" />
                  </div>
                  <div>
                    <img src="growbig.png" alt="Grow Big" className="w-full h-auto object-cover" />
                  </div>
                  <div>
                    <img src="mat.png" alt="Mat" className="w-full h-auto object-cover" />
                  </div>
                  <div>
                    <img src="nutrition.png" alt="Nutrition" className="w-full h-auto object-cover" />
                  </div>
                </Slider>
              </div>
            </div>
          </main>

          <footer className="mt-8 text-center">
            <h2 className="text-3xl font-bold">Joyli Creatine Infused Gummies</h2>
            <p className="mt-2 text-lg">Setting a new standard in fitness supplements, proudly made in the USA. Each sugar-free, low-calorie gummy is packed with 5g of creatine monohydrate per serving, designed to provide the muscle-building benefits of traditional creatine powders without the guilt. Say goodbye to boring powders and step up your fitness game with our enjoyable, convenient, and potent gummies.</p>
            <div className="mt-4">
              <span className="block text-2xl font-bold">5G</span>
              <span>Creatine Per Serving</span>
              <span className="block text-2xl font-bold">4</span>
              <span>Gummies Per Serving</span>
              <span className="block text-2xl font-bold">30</span>
              <span>Servings Per Container</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold">KEY FEATURES:</h3>
            <ul className="list-disc list-inside text-left mt-2 text-lg">
              <li><strong>Potent Dose of Creatine:</strong> Each serving of Joyli Creatine Infused Gummies is loaded with 5g of Creatine Monohydrate. We’ve condensed all the benefits of traditional creatine supplements into a tasty, convenient form.</li>
              <li><strong>Made in the USA with Quality Assurance:</strong> We take quality seriously. Our gummies are produced in an FDA-registered and GMP-certified facility in the USA, with third-party lab verification for potency and safety. When you choose Joyli, you're choosing a brand that believes in the excellence of creatine made in the USA.</li>
              <li><strong>Clean, Cruelty-Free, and Low-Calorie:</strong> Our commitment to your values means our gummies are Halal, Non-GMO, and cruelty-free. Plus, they're sugar-free and low in calories for guilt-free enjoyment. These organic vegan creatine gummies are designed to align with your ethical and nutritional choices.</li>
              <li><strong>Perfect for Fitness Enthusiasts of All Levels:</strong> Whether you're a seasoned athlete or just starting your fitness journey, Joyli Creatine Gummies are the perfect addition to your routine. These plant-based creatine gummies cater to a wide range of fitness levels and goals.</li>
              <li><strong>Multi-Jar Discount:</strong> We appreciate loyalty. Enjoy great savings when you order multiple jars of Joyli. The more you buy, the more you save!</li>
              <li><strong>Free Shipping:</strong> We strive to make your purchasing experience as smooth as possible. Enjoy free shipping on all your Joyli orders, with no minimum order requirement.</li>
            </ul>
          </footer>

          <div className="bg-black text-white text-center py-4">
            Joyli 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

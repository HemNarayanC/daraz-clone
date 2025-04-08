import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JustForYouData from "./products/JustForYouData";

const CountDownSale = () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 18);
  targetDate.setMinutes(targetDate.getMinutes() + 53);
  targetDate.setSeconds(targetDate.getSeconds() + 49);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    
    return difference > 0
      ? {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [product, setProduct] = useState(null);
  
  const params = useParams();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const productData = JustForYouData.find((item) => item.id === parseInt(params.id));
    setProduct(productData || null);
  }, [params.id]);

  return (
    <div className="bg-purple-900 text-white px-4 flex justify-between items-center w-full h-[72px] mx-auto font-[Euclid Circular A] mt-4">
      <div>
        <p className="text-2xl font-bold">{product ? product.price : "N/A"}</p>
        <p className="text-sm">Starts in 0 day(s) {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p>
      </div>
      <div className="text-center">
        <p className="font-bold">4.4 MEGA SALE</p>
        <p className="text-sm font-semibold">Add to Cart Now!</p>
      </div>
      <div className="bg-orange-500 text-white px-3 rounded text-center font-bold text-[18px]">
        <p>4 - 13</p>
        <p>APR</p>
      </div>
    </div>
  );
};

export default CountDownSale;

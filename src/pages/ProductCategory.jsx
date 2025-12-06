import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createCartItems } from "@/redux/actions/cart.action";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import API from "@/API/Interceptor";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [productData, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(createCartItems({ productId }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await API.get(`/product?category=${category}`);
      console.log(res, "test");
      setProducts(res.data.data);
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <div className="p-3 py-[4rem]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-gradient-x">
            {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </h1>
          <div className="mt-2 h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-400 mt-3">
            Explore our exclusive collection of {category} and find your perfect
            gadget.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {productData?.map((item) => (
            <motion.div
              key={item._id}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">
                    {item.name}
                  </h2>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2 h-[40px]">
                    {item.description}
                  </p>
                </div>

                {/* Keep price consistent height & aligned */}
                <div className="mt-auto">
                  <p className="text-lg font-bold text-purple-400 mb-4">
                    ₹{item.price}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link to={`/product/${item._id}`}>
                      <button className="cursor-pointer bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-xl font-medium hover:from-purple-700 hover:to-purple-900 transition-all duration-200">
                        View Product
                      </button>
                    </Link>
                    <div>
                      <button
                        onClick={() => handleAddToCart(item._id)}
                        className="cursor-pointer border border-purple-500 text-purple-300 px-4 py-2 rounded-xl font-medium hover:bg-purple-700 hover:text-white transition-all duration-200"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;

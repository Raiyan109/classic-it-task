import cupImg from '../assets/Milk-Tea-being-poured-into-cup-Premium-vector-PNG-1-removebg-preview.png'
import { FaArrowRight } from "react-icons/fa6";


const Products = () => {
    const products = [
        {
            image: cupImg,
            title: "White coffee"
        },
        {
            image: cupImg,
            title: "White coffee"
        },
        {
            image: cupImg,
            title: "White coffee"
        },
    ]
    return (
        <div className="flex justify-center items-center flex-col overflow-hidden">

            <div>
                <h1 className="text-5xl text-white font-semibold">Coffee Items</h1>
                <h1 className="text-4xl text-white font-medium">For Coffee Geeks</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 py-10'>
                {
                    products.map((product, i) => (
                        <div key={i} className='bg-amber-300 shadow-lg flex flex-col justify-center items-center relative p-20 w-96 h-96  rounded-lg'>
                            <div>
                                <h1 className='text-amber-800 text-5xl font-bold absolute top-0 left-0 py-6 px-3'>{product.title}</h1>
                                <img src={product.image} alt="" className='absolute top-0 left-20 w-[400px] h-[400px] object-contain px-2' />
                            </div>

                            <div className='absolute bottom-0 left-10 pb-10'>
                                <button>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Products;
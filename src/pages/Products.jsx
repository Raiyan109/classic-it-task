import cupImg from '../assets/Milk-Tea-being-poured-into-cup-Premium-vector-PNG-1-removebg-preview.png'
import cupImg1 from '../assets/greencup.jpeg'
import cupImg2 from '../assets/yellowcup.jpeg'
import { FaArrowRight } from "react-icons/fa6";


const Products = () => {
    const products = [
        {
            image: cupImg,
            title: "White coffee",
            colors: ['black', 'green', 'yellow'],
            imgClicked: {
                'black': true,
                'green': false,
                'yellow': false,
            },
            imgLinked: {
                'black': cupImg,
                'green': cupImg1,
                'yellow': cupImg2
            }
        },
        {
            image: cupImg,
            title: "White coffee",
            colors: ['black', 'green', 'yellow'],
            imgClicked: {
                'black': true,
                'green': false,
                'yellow': false,
            },
            imgLinked: {
                'black': cupImg,
                'green': cupImg1,
                'yellow': cupImg2
            }
        },
        {
            image: cupImg,
            title: "White coffee",
            colors: ['black', 'green', 'yellow'],
            imgClicked: {
                'black': true,
                'green': false,
                'yellow': false,
            },
            imgLinked: {
                'black': cupImg,
                'green': cupImg1,
                'yellow': cupImg2
            }
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
                        <div key={i} className='bg-amber-300 shadow-lg flex flex-col justify-center items-center relative p-20 w-96 h-96 rounded-lg'>
                            <div>
                                <h1 className='text-amber-800 text-4xl font-bold absolute top-0 left-0 py-6 px-3'>{product.title}</h1>
                                <div className='absolute top-0 left-20 px-2'>
                                    {Object.keys(product.imgClicked).map((item) => {
                                        if (product.imgClicked[item]) {
                                            return (
                                                <img className='w-[400px] h-[400px] object-contain' key={item} src={product.imgLinked[item]} alt={product.title} />
                                            )
                                        }
                                        else {
                                            return null
                                        }
                                    })}
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <div className='absolute bottom-0 left-10 pb-10'>
                                    <button>
                                        <FaArrowRight />
                                    </button>
                                </div>
                                {/* <div className='absolute bottom-0 left-20 mb-2'>
                                    
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Products;
import cupImg from '../assets/Milk-Tea-being-poured-into-cup-Premium-vector-PNG-1.png'
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
        <div className="flex justify-center items-center p-10">
            <div className="p-10">
                <div>
                    <h1 className="text-5xl text-white font-semibold">Coffee Items</h1>
                    <h1 className="text-4xl text-white font-medium">For Coffee Geeks</h1>
                </div>

                <div>
                    {
                        products.map((product, i) => (
                            <div key={i} className='bg-white shadow-lg flex flex-col justify-center items-center'>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
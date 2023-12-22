
const Navbar = () => {
    return (
        <div>
            <header className="p-4 bg-transparent text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 text-2xl text-yellow-600 font-bold">
                        Coffee
                    </a>
                    <ul className="items-stretch space-x-3 flex">

                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-orange-600 border-orange-600">Signup</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Login</a>
                        </li>
                    </ul>

                </div>
            </header>
        </div>
    );
};

export default Navbar;
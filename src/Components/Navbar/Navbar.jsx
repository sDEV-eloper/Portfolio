
import navigation from './constants';
import  {scrollToSection}  from '../scrollView/scrollToSection';
// border-2 border-red-500 
const Navbar = () => {

  
  return (
    <nav className="bg-gray-800  rounded-b-lg flex justify-center w-1/3 ml-auto mr-auto fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-12  ">
          <div className="flex items-center ">
            <div className="hidden md:block ">
              <ul className=" flex items-baseline  space-x-4  ">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <button 
                    className={item.current ? 'active' : 'text-gray-300  px-3 py-2 rounded-md text-sm font-medium '}    
                    onClick={()=>scrollToSection(item.name)}
                    >
                      <abbr title={item.name}>
                        <item.icon className="inline-block h-5 w-5 text-white hover:text-yellow-2400  hover:text-yellow-300" /> 
                      </abbr>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item, index) => (
            <button className={item.current ? 'active' : 'text-gray-300  block px-3 py-2 rounded-md text-base font-medium '}
            onClick={()=>scrollToSection(item.name)}
            >
              <item.icon className="mr-3 h-6 w-6 inline-block" /> {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
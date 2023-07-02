import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
 import {FaLaptopCode }from'react-icons/fa';
 import {FaSuitcase }from'react-icons/fa';
 import {CgWebsite} from 'react-icons/cg'
 import {RiContactsBook2Fill} from 'react-icons/ri'
 

 const navigation = [
  { name: "Home", href: "/", current: true, icon: AiFillHome },
  { name: "About", href: "/about", current: false, icon: BsFillPersonFill },
  { name: "Skills", href: "/skills", current: false,  icon: FaLaptopCode },
  { name: "Work", href: "/work", current: false,  icon: FaSuitcase },
  { name: "Projects", href: "/projects", current: false,  icon: CgWebsite },
  { name: "Contact", href: "/contact", current: false,  icon: RiContactsBook2Fill },
];
export default navigation

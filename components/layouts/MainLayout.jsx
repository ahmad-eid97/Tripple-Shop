import Navbar from './../Navbar/Navbar';
import NavbarTwo from './../Navbar/NavbarTwo';
import Footer from './../Footer/Footer';
import MobileBar from './../Navbar/MobileBar/MobileBar';

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarTwo />
        {children}
      <Footer />
      <MobileBar />
    </>
  )
}

export default MainLayout;
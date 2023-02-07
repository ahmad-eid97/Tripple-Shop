import Navbar from './../Navbar/Navbar';
import NavbarTwo from './../Navbar/NavbarTwo';
import Footer from './../Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <NavbarTwo /> */}
        {children}
      <Footer />
    </>
  )
}

export default MainLayout;
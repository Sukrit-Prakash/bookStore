import React from 'react'
import {Link} from 'react-router-dom'

// import carticon from './components/assets/cart.png'
 const Navbar = () =>{

    const [menu ,setMenu]=React.useState("shop");
    return(
        <div className='navbarx'> 
            <p></p>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCc2Vv4CX3Ctg-nvU-i_YorX0F-2E7MPkW_syRWus7g&s" alt="" /> */}
            <ul className='navmenu'></ul>
            <li onClick={()=>{setMenu("kids")}}><Link to='/'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("product")}}><Link to='/product'>products</Link>{menu==="product"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("search")}}><Link to='/'>search</Link>{menu==="search"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cart")}}><Link to='/cart'>cart</Link>{menu==="cart"?<hr/>:<></>}</li>
            <div className='logincart'>
               <Link to='/login'> <button  >login</button></Link>
                {/* <img src={carticon} alt="" /> */}
                <img className='imgx' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADSCAMAAABD772dAAAAhFBMVEX///8AAABTU1OVlZXy8vLNzc0nJyd9fX1fX1/8/PzKysr19fWLi4vv7++CgoLDw8NFRUXf39+8vLy0tLSkpKSIiIiurq7n5+d1dXUYGBg1NTUTExPR0dEeHh5BQUEwMDCZmZlmZmY5OTlNTU1hYWGfn59WVlZEREQLCwttbW13d3ckJCSRmjqWAAAHjElEQVR4nO2di1oqOwyFBwG5OgjIwFa8IFt0y/u/3xHPPt+B1cI0bTLJIP8D1EQmM02ymmbZF73RsOMlb95N+vNedmYUjRJu88lA20hGFmX+fnM11baTi2GQvztmN9q2cjAP9veL4RmEc/gP/M1I295krmkONzraBqdC9LfReKr5C5vscKMx17Y5iduf5vFLhMOPdX5Z30Q43FhrW51CzE/caGpbnULY1hIYa1udQmny4OFW2+gkepPPrp/bo/uSibbRUgzGRdfn8C9twyQZND0e139XfYrB6syiuJw7x+Nav6gDeEOHh9oWSbMBh7faBknjbELP/ZnOZuDwi7ZB0mD5617bIHEwd65zlhgEbrr72gZJ0/tpH6bs/dDhV217xMFiQUvbIGmWPz2I7zdXdWHTKWIK6t7UuDa80R12c6Za8Zvs8Fjb5ERmZI8ftE1OhNw0+aNtcSLkgvpU2+JEnqgOR3VmDPFBdbjuQUx3uKNtchpdssMjbZPToO89Btomp7EkO5w9aducRESRxtd2qQ0xnfy2ttEpxDTyMYg/3ppmeVmBse0Ih7MrWCRmjarIwdYojRk2mSz3TWGbRN5YfoMpYs5sJCO4EY7U4sAq17xGcjLhCOEswzeBXWEe7oMjWyXYgLCrlQdJTlwIu021P6xGMsIUwlm2PVzngdNITjCEo8von7CQ1c44hnC00hv/c3ecVjJyf2hmvO4IY2PDaCQjLTAzodn5DEvxGckJWwi7R2Ei0uoKwBBO6HX2YSmb8unHQyNTutnYRYz9oovCGMKuvMViZ5wxhF0pgMUUEXPhJM0RSgEspoiwkU4UpIDDzzw2coKbhUTJEUoB7J20xRBOjDqUAthLEVnKWf+DdR57KeLroYHJX07sInLYyAnrV3gHHu+yliJi0y/5w4lSAGspIoZw8tbIeooIX2EGbfcv8NiWeBobQgzCX3xmbKWI7CHsLmkrRcTzGQyDC/ChsXVSDWoyLFtfTBEtTX/AVypdcugBpQCWUkSBELadIgqEsFvnsdSAAOUNUwkK
                pQB2UkR8obKEsCsFsJMiioSw5RQRQ5jr2YNl6cJNKSS+wjtQLW4lRRQKYVcKYCVFFAphVwpgJUXE1hdfmwDHmhhJEaGcxXh2H/tzNlJELGcxbgGx9msjRRQLYTcpsdFFlAthVwpgIoghb2U95Yz/TAspIn6FWbM4lAJYSBHRJt5BWLC4BaEpPnW8SdwaVjcgNIWvMHMnF6UA+iki1iWYowzrPPopomwIO0GsX+eR/Arv+A3rq6eIUM565F4fpQDaKSJ+hdnHQ2Odh358kxfpEHa7iOx/gAa2B/hLqSgFUE4RYWMgMPMLpQC6KSJ+hQUmvNtKEeVD2A1iVaGpfAi7UgDVFBEmfokkM1hRUU0Rq7AFP/WawxBxay8zFBqlAKO2Fks8USXT0LQ7FUBoCDY+R3YQumcFP/Z2kJrrjnOJzSClSXBGTxtB7GCC1cFxclclaXt2BLmrGYwOjpOTFcXcBSKPYFeAdNNcZUhu6qk3r1WCZO3F4uC4K0F/HSmAAR5F5cz2pj++Cxde7stNqJKVeNkFOzrFoKVIBcoLrBYu5P+kLpgi2hGaSoFSABsaNUEwRTz7OyAwRTR4SJ4ZGBOi3xmXBhsQbKpsqzgTTbUNEgcdtiBDFAU747W+wjYE3Gyd/2sLHbZyBEIMTCDO/rIep7KlL8sTxmm5fGpbJIzz2lLX5UmDRyDO/jJIz00uGwOScUE+XI8b3ZGJsy4yHCnXrodFf35jaQwEGyhwge/U9roC1s0KD+cbaRVXWG/BUx9KVJi5GLnLpbr6w8DIFVTV5WpGwrjCEpMNj6uc/mTCY/bzO6e4cTfVlVNxYVxfEkC/pzSN5Wu5TaLIibSOMVVVuqicZO4rXlesVDIdTBY6v7Nmt7bVLjrdbbmNjOQmZta3xuNlu18BZ98AuHDhwoULFy6cYNB/6ywWn7Mp25agtyx2K+aFQcFfb7pfnM85fB7tT0tZGWu7O0dP16k/yhT35c/Vp75H8V5HnXRgbO4rLKxNJAuZR/XxL9v4FqqnIfuNjed6dcS6+PT8eCNHf5DX6QN6cR7jpKN99AP59En5mCa5qyHheGq4KDkoH6FawxGsgNCB/2DKaln0R3BVsqKuYLn0wCm5FVLewFGdyo8TetJ/4vKar+aMGJxX4+GdtmLIaT9FuVDImXHaE3jqk/Qfipr0AOuIe4WQLobclIMygjrENPNCVmSdrEwiIISJs9XCDuyqBXFIwNE+TGEDf9TEfkGzWz4ov4c30XRQ216GDauhOBz2C6s5HDTYg7T5DRPKqO21Tuc1fyHNksNBdH7UXlpBk0xop8h9UmxE8UhriMMFaUWc6+xD8VAJnsvzQatshbwWFKseAUFM3BYZTx6c89Mu1LJb+TOtt5XOAp5AckXGeAFAocSjfI1I5UW8B+3TQvxl2tM5mHaZ9ucV4k8FXWwH8fhTQ9vFSIE3TP5FoJlmZcKCd/+R1i71Te4y0y7NPB3TderLpcA9jaWG+Be9Yv/oFo/kYb+CaU3ysGPQv8s7nbw54RS1zPJOPpyS337/ABDCc6deTXD3AAAAAElFTkSuQmCC" alt="" />
            </div>
        </div>
    );
 }
 export default Navbar;
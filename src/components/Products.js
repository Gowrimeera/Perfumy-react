import one from "../images1/one.jpg"
import two from "../images1/two.jpg"
import three from "../images1/three.jpg"




//products component
function Products() 
{
  return(
    <div class="products">
    <div class="box">
          <img src={one} alt="One"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
    </div>
    <div class="box">
          <img src={two} alt="Two"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
    </div>
    <div class="box">
          <img src={three} alt="Three"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
    </div>
    </div>
  )
}


export default Products
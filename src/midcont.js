import loc from './assets/Frame 33616.svg'
import search2 from './assets/Group 33494.svg'


function Midcont () {

return( <><div className="container">
    <div className="main-text"> <h2>Discover your <b>Perfect Rental</b> </h2>
     <p>Rent Cars, Items and Houses in Just a Few Clicks</p> 
    </div>
    <div className="buttons"><button className="btn-p">Places</button> <button className="btn">Rides</button> <button className="btn">Things</button></div>
    
    <div className="search">
    <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" class="sch" placeholder="search for cars, houses and more.."></input>
   <div className="sec-comp"><img src={loc} className="loc" alt="loc" /> 
    <img src={search2} className="sech" alt="sech" /></div>
    
       </div>

    </div>
    

    </>
)

}

export default Midcont




import pic from './assets/Group 33507.svg'
import art1 from './assets/parallax1.png'
import art2 from './assets/parallax2.png'
import art3 from './assets/parallax3.png'
import art4 from './assets/parallax4.png'
import art5 from './assets/parallax5.png'

function Article () {
return (<>
<div className="Article"><div className="top-cont-2"><div class="browse"><h2>Featured Articles</h2> </div>
            <div class="grp-2"><img src={pic} class="line" alt="pic"/></div></div>

<div className='featured-a'>
    <div className='left-a'><img className="art1" src={art1} />
    <p className="date">February 4, 2023</p>
    <h4 className="topic">Plan the Perfect Vacation</h4>
    <p className="note">Discover expert advice on how to find the ideal rental property that meets your needs and budget.</p></div>

   
<div className='right-a'> <div className='mid-art'><img className='art2' src={art2} art="art2" /> 
<div className='mid-art-abt'><p className="date">May 7, 2023</p>
<h4 className="topic">Car Rental hacks for smooth Journey</h4>
<p className="note">Learn insider tips for getting the best deals and making the most of your rental car experience.</p></div>

</div>
<div className='mid-art'><img className='art3' src={art3} alt="art3" />
<div className='mid-art-abt'><p className="date">May 7, 2023</p>
<h4 className="topic">Car Rental hacks for smooth Journey</h4>
<p className="note">Learn insider tips for getting the best deals and making the most of your rental car experience.</p></div></div>
<div className='mid-art'><img className='art4' src={art4} alt="art4" />
<div className='mid-art-abt'><p className="date">May 7, 2023</p>
<h4 className="topic">Car Rental hacks for smooth Journey</h4>
<p className="note">Learn insider tips for getting the best deals and making the most of your rental car experience.</p></div></div>
<div className='mid-art'><img className='art5' src={art5} alt="art5" />
<div className='mid-art-abt'><p className="date">May 7, 2023</p>
<h4 className="topic">Car Rental hacks for smooth Journey</h4>
<p className="note">Learn insider tips for getting the best deals and making the most of your rental car experience.</p></div></div>
   
</div>
</div>
</div>


</>)
}

export default Article

import React from 'react'
import {Link} from 'react-router-dom'
import ImageSlider from './ImageSlider';
import {SliderData} from "./SliderData"



function MainComponent(){
    return(
        <div>
            <ImageSlider slides={SliderData}/>
        <main>        
            <div className = 'image-container'>
                <div className='Cake'>
                <img src ="./images/CupCakes.jpg" alt = 'Cup Cakes'/>
                <Link to = '/BirthdayCakes'> Cup Cakes</Link>
                </div>

                <div className='Cake'>
                <img src="./images/BirthdayCake.jpg" alt = 'Birthday Cakes' className = "distance" />
                <Link to = '/BirthdayCakes'> Birthday Cakes</Link>
                </div> 

                <div className='Cake'>
                <img src = "./images/WeddingCakes.jpg" alt = 'Wedding Cake'/>
                <Link to = '/BirthdayCakes'> Wedding Cakes</Link>
                </div>

                <div className ='Cake'>
                <img src = "./images/SpecialEventCakes.jpg" alt = 'Special Event Cakes'/>
                <Link to = '/BirthdayCakes'> Special Events Cakes</Link>
                </div>

                <div className ='Cake'>
                <img src = "./images/TieredCakes.jpg" alt = 'Tiered Cakes'/>
                <Link to = '/BirthdayCakes'> Tiered Cakes</Link>
                </div>

                <div className ='Cake'>
                <img src ="./images/IntroductionCakes.jpg" alt = 'Introduction Cakes'/>
                <Link to = '/BirthdayCakes'> Introduction Cakes</Link>
                </div> 
            </div>
     </main>
    </div>  
            
    );
}



export default MainComponent;
import React from "react"

function About(){
    return(
        <div className='About'>
            <h2>About Us</h2>
        <div className= 'About-container'>
            
            <div className='Vision'>
                <img src = "./images/WhoAreWe.jpeg" alt = 'Who Are We'/>
                <h3>Ketham Yummy Cakes </h3>
                <p>is a leading commercial bakery creating delicious, handcrafted, customised and character tasty art cakes
                at a pocket friendly price.We make a variety of customised cakes to depict the event's theme from simple 
                to complex designs in a timely manner.
                </p>
            </div>  
                  
            <div className='Vision'>
                <img src = "./images/our-vision.jpeg" alt = 'our-vision'/>
                <p>To become the nation's premier bakery.</p>
            </div>

            <div className='Vision'>
                <img src = "./images/OurMission.jpeg" alt = 'Our Mission'/>
                <p> We are passionate about baking innovative products that taste great and make every eating experience 
                    more satisfying. We will never compromise our product quality or family values and we will work 
                    each day to exceed customer expectations one order at a time.
                </p>
            </div>
            </div>

            <div className='CoreValues'>
            <img src = "./images/CoreValues.jpeg" alt = 'Core Values'/>
                <h3>Integrity</h3>
                <p>We always speak the truth by delivering exactly what we promise.</p>
                <h3> Adaptability</h3>
                <p>We retain long-term partnerships by continuously reevaluating our products,
                     processes and talent to meet changing market demands.</p>
                <h3>Respect</h3>
                <p>We conduct ourselves in a manner that values the individual needs and contributions of all stakeholders,
                   both internally and externally.</p>
                <h3>Excellence</h3>
                <p>We always deliver products and services of exceptional quality. 
                    we stay on a path of constant and never-ending improvement and innovation.</p>
                <h3>Accountability</h3>
                <p>
                    We accept our individual and team responsibilities, we meet our commitments. 
                    We take responsibility for our performance in all our decisions and actions.</p>
                <h3>Team work</h3>
                <p></p>
            </div>
        </div>
        

    )
}

export default About
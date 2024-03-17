import homeimg from '../images/home.jpeg';
import frontimg from '../images/fronthome.jpg';

export function generateHome(){
    const homeContent= ` 
    <div class="section welcome">
        <h1>Rakksan 전설과 신화 그리고 최고의 레스토랑</h1>
        <div class="text">Indulge in the exquisite flavors of Japan at Rakassan Restaurant. Located in the heart of Tokyo, our establishment offers a modern yet cozy ambiance paired with impeccable service. Our menu features an array of authentic Japanese dishes crafted with the freshest ingredients and traditional techniques. From succulent sushi to comforting ramen, each dish is a masterpiece of flavor and presentation. Join us for a culinary journey that promises to delight your senses and leave you craving more. Experience the best of Japanese cuisine at Rakassan Restaurant today.</div>
        <div class="img-container"><img src="${homeimg}" alt=""><img src="${frontimg}" alt=""></div>
    </div>
    <div class="section">
        <h1>Hours 시간</h1>
        <div class="text">Sunday: 8am - 8pm</div>   
        <div class="text">Monday: 6am - 6pm</div>   
        <div class="text">Tuesday: 6am - 6pm</div>   
        <div class="text">Wednesday: 6am - 6pm</div>   
        <div class="text">Thursday: 6am - 10pm</div>   
        <div class="text">Friday: 6am - 10pm</div>   
        <div class="text">Saturday: 8am - 10pm</div>   
    </div>
    <div class="section">
        <h1>Location 위치</h1>
        <div class="text">Sukiyabashi Jiro</div>
        <div class="text">4 Chome-2-15 Ginza, Chuo City,</div>
        <div class="text">Tokyo 104-0061, Japan</div>
      
    </div>`;
    
    return homeContent;
}

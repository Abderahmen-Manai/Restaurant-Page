import tea from '../images/tea.jpg';
import cocktail from '../images/cocktail.jpg';
import amazake from '../images/amazake.jpg';
import soup from '../images/soup.webp';
import sushi from '../images/sushi.webp';
import ramen from '../images/ramen.jpg';

export function generateMenu() {
    const menuContent = `
    <div class="section menu-title"><h1>Menu 메뉴</h1></div>

    <div class="section title"><h1>Beverages 음료수</h1></div>

    <div class="section menu"><h1>Tea 차</h1>
        <div class="text">
            A warm, sweet tea made with the highest quality tea leaves and a hint of lemon to start your day off right!
            <div class="price-picture">
                <div class="price">2$</div>
                <img src="${tea}" alt="Tea">
            </div>
        </div>
    </div>

    <div class="section menu"><h1>Cocktail 칵테일</h1>
        <div class="text">
            Savor our signature cocktail, a masterful fusion of premium spirits, fresh fruits, and aromatic herbs. With its tantalizing blend of flavors, from citrusy zest to herbal undertones, it promises a delightful experience in every sip.
            <div class="price-picture">
                <div class="price">4$</div>
                <img src="${cocktail}" alt="Cocktail">
            </div>
        </div>
    </div>

    <div class="section title"><h1>Sides 측면</h1></div>

    <div class="section menu"><h1>Soup 국</h1>
        <div class="text">
            Enjoy our delectable soup, a savory symphony of flavors carefully crafted to delight your taste buds. With its rich blend of wholesome ingredients and aromatic spices, each spoonful offers a comforting embrace that warms the soul.
            <div class="price-picture">
                <div class="price">4$</div>
                <img src="${soup}" alt="Soup">
            </div>
        </div>
    </div>

    <div class="section menu"><h1>Amazake 감주</h1>
        <div class="text">
            Savor the sweetness of our Amazake, a delightful Japanese fermented rice beverage. With its smooth texture and subtle sweetness, it offers a refreshing and nourishing experience with every sip.
            <div class="price-picture">
                <div class="price">5$</div>
                <img src="${amazake}" alt="Amazake">
            </div>
        </div>
    </div>

    <div class="section title"><h1>Main Dishes 메인 요리</h1></div>

    <div class="section menu"><h1>Sushi 회</h1>
        <div class="text">
            Indulge in our sushi, a culinary delight bursting with fresh flavors and exquisite textures. With its artful presentation and quality ingredients, each bite offers a taste of Japan's finest culinary traditions.
            <div class="price-picture">
                <div class="price">8$</div>
                <img src="${sushi}" alt="Sushi">
            </div>
        </div>
    </div>

    <div class="section menu"><h1>Ramen 라면</h1>
        <div class="text">
            Savor the comforting warmth of our ramen, a bowlful of rich broth, tender noodles, and flavorful toppings. With its soul-soothing blend of savory goodness, each slurp transports you to the bustling streets of Japan.
            <div class="price-picture">
                <div class="price">9$</div>
                <img src="${ramen}" alt="Ramen">
            </div>
        </div>
    </div>
    `;

    return menuContent;
}

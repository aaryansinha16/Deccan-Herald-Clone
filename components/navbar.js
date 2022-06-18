function header() {
  return `
        <!-- deccan herald logo left one -->
        <a href="./index.html">
            <img src="https://www.deccanherald.com/sites/dh/files/article_images/2020/04/28/Deccan%20Herald%20logo-1588037746.png" alt="" id="deccan-herald-header-logo">
        </a>

            <div id="header-banner-div">

                <!-- big banner  -->

                <img src="http://www.mvpthemes.com/jawn/wp-content/uploads/2018/11/jawn-wall-leader.jpg" alt="" id="header-banner">
                <div id="header-small-text">

                    <!-- date time data -->

                    <div id="date-container">
                        <div id="livedate"></div>
                        <div id="livetime"></div>
                        <div><a href="https://epaper.deccanherald.com/">E-PAPER </a></div>
                        <div><a href="">CLASSIFIEDS</a></div>
                    </div>


                    <div id="nifty-container">

                        <!-- nifty data -->

                        <div>BLR 31 ° C Clouds</div>
                        <div>Sensex: 52693.57-153.13</div>
                        <div>Nifty: 15732.1-42.3</div>

                        <!-- social media logos -->
                        <a href="https://www.facebook.com/deccanherald">
                    <img src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/fb-nav.svg
                    " alt="" id="fb-logo">
                        </a>

                        <a href="https://twitter.com/deccanherald">
                    <img src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/twitter-nav.svg
                    " alt="" id="twitter-logo">
                    </a>

                    <a href="https://www.instagram.com/deccanherald/">
                    <img src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/icons/ig-nav.svg" alt="" id="insta-logo">
                        </a>
                    </div>
                </div>
            </div>
        `;
}

function navbar() {
  return `
        
        <div id="dash-logo">
            <span id="emptyfirst"></span>
            <span id="threeClick" class="material-symbols-outlined">
                menu
                </span>
        </div>

        <ul id="navbar-childs">
            <li><a href="./index.html">Home</a></li>
            <li><a href="">Bengaluru</a> 
                <div class="submenu">
                    <ul>
                        <li>Top Stories</li>
                        <li>Crime</li>
                        <li>Politics</li>
                        <li>Infrastructure</li>
                        <li>Life in the City</li>
                        <li>Bengaluru in 2040</li>
                    </ul>
                </div>
            </li>

            <li><a href="./karnataka.html">Karnataka</a> 
                <div class="submenu">
                    <ul>
                        <li>Top Stories</li>
                        <li>Politics</li>
                        <li>Districts</li>
                        <li>22in22</li>
                    </ul>
                </div>
            </li>

            <li><a href="">National</a> 
                <div class="submenu">
                    <ul>
                        <li>Politics</li>
                        <li>Corona Virus</li>
                        <li>North and Central</li>
                        <li>East and Northeast</li>
                        <li>South</li>
                        <li>West</li>
                    </ul>
                </div>
            </li>
            <li><a href="">Sports</a> 
                <div class="submenu">
                    <ul>
                        <li>Top Stories</li>
                        <li>Cricket</li>
                        <li>Formula 1</li>
                        <li>Football</li>
                        <li>Tennis</li>
                        <li>Other Sports</li>
                    </ul>
                </div>
            </li>

            <li><a href="">Bussiness</a> 
                <div class="submenu">
                    <ul>
                        <li>Business News</li>
                        <li>Family Finance</li>
                        <li>Technology</li>
                        <li>Dh Wheels</li>
                        <li>Budget 2022</li>
                    </ul>
                </div>
            </li>

            <li><a href="">Opinion</a> 
                <div class="submenu">
                    <ul>
                        <li>DH Views</li>
                        <li>Editorials</li>
                        <li>Panorama</li>
                        <li>Comment</li>
                        <li>In Perspective</li>
                        <li>Right in the Middle</li>
                    </ul>
                </div>
            </li>

            <li><a href="">Features</a> 
                <div class="submenu">
                    <ul>
                        <li>Metro Life</li>
                        <li>Entertainment</li>
                        <li>Travel</li>
                        <li>Spectrum</li>
                        <li>Sunday Herald</li>
                        <li>Living</li>
                        <li>DH Education</li>
                    </ul>
                </div>
            </li>

            <li><a href="./youtubePage.html">Videos</a> 
                <div class="submenu">
                    <ul>
                        <li>Latest Video</li>
                        <li>Bengaluru</li>
                        <li>Karnataka</li>
                        <li>Popular</li>
                        <li>People</li>
                        <li>Bengaluru in 2040</li>
                    </ul>
                </div>
            </li>

            <li><a href="">Specials</a>
                <div class="submenu">
                    <ul>
                        <li>Insight</li>
                        <li>Sunday Spotlight</li>
                        <li>Point Blank</li>
                    </ul>
                </div>
            </li>

            <li><a href="">Brandspot</a> 
            </li>

            <li id="new-newsletter-superscript"><a href="./newsLetter.html">
                <div id="superscript-container">
                <div>NEWS</div>
                <div>Newsletters</div>
                    </div>
                    </a>
            </li>
        </ul>
        <div id="search-box">
            <span class="material-symbols-outlined">
                search
                </span>
                <div class="submenu-search">
                    <input type="text" placeholder="What are you looking for?">
                    <button id="search-button">Search</button>
                </div>
        </div>
   
    `;
}

function inbrief() {
  return `
    <div>IN BRIEF:</div>
    <div><a href="">Is a fourth wave coming?</a></div>
    <div><a href="">Armed forces unveil 'Agnipath'</a></div>
    <div><a href="">DND feature on WhatsApp soon</a></div>
    <div><a href="">hate over trail unfair: Heard</a></div>
    <div><a href="">Unique footwear for diabetics</a></div>
    <div><a href="">B'luru: Elders' abuse capital</a></div>
    `;
}

export { header, navbar, inbrief };

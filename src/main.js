import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Carousel from './carousel.js';

export default function Main(){

    return(
        <div className="main">
            <div className="carousel">
                <div class="p-3 m-0 border-0 bd-example">
                    <Carousel />
                   
                </div>

            </div>
            <div className="trend">
                <div><img src="data:image/jpeg;base64,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" alt='new year trend image'></img></div>
                <div><img src="data:image/png;base64,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" alt='festive lookks image'></img></div>
            </div>
            <div className="brandnewproducts">
                <div className="title">
                    <div>
                        <h3>Brand New Products</h3>
                        
                    </div>
                    <div>
                        <button>View All</button>
                        <button>Table lamp</button>
                        <button>Furniture</button>
                        <button>Chair</button>
                    </div>
                </div>
                <div className="products">

                    
                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    <div className="prod1">
                        <div><img src="https://cdn-icons-png.flaticon.com/128/7889/7889574.png" alt="bodysuitimg"></img></div>
                        <div><h4>Trending</h4></div>
                        <div className="nameheart">
                    <h3>BODYSUIT-Tracksuit-black</h3>
                    <FavoriteIcon />

                    </div>
                        <div><p>Price</p></div>                    
                    </div>

                    

                    

                    {/* stop here */}
                    

                </div>

                <div>
                    <button className='brandnewprodsbutton'>Load More</button>
                </div>
            </div>
            <div className="specialfeatures">
                <div><h2>Special Features</h2></div>
                <div className='featuresiconcard'>
                    <div className='iconcard'>
                        <ShoppingCartIcon />
                        <h6>FREE DELIVERY</h6>
                        <h4>From $56</h4>


                    </div>
                    <div className='iconcard'>
                        <GroupsIcon />
                        <h6>FREE DELIVERY</h6>
                        <h4>From $56</h4>
                    </div>
                    <div className='iconcard'>
                        <Inventory2Icon />
                        <h6>FREE DELIVERY</h6>
                        <h4>From $56</h4>
                    </div>
                    <div className='iconcard'>
                        <CurrencyExchangeIcon />
                        <h6>FREE DELIVERY</h6>
                        <h4>From $56</h4>
                    </div>
                    <div className='iconcard'>
                        <SupportAgentIcon />
                        <h6>FREE DELIVERY</h6>
                        <h4>From $56</h4>
                    </div>


                </div>
            </div>
            <div className="newsfeeds">
                <div>
                    <h2>News Feeds</h2>
                    <h5>Lorem Ipsum dolo summit</h5>
                </div>
                <div className='newsfeedcards'>
                    <div className='newsfeedcard'>
                        <img alt='img1'></img>
                        <div className='caldate'>
                            <h6>Calander date</h6>
                            <h6>Comments</h6>
                        </div>
                        <h2>Inspiration is under construction Business & Fashion 2019.</h2>
                        <h4> unknown printed. It was</h4>
                    </div>

                    <div className='newsfeedcard'>
                        <img alt='img1'></img>
                        <div className='caldate'>
                            <h6>Calander date</h6>
                            <h6>Comments</h6>
                        </div>
                        <h2>Inspiration is under construction Business & Fashion 2019.</h2>
                        <h4> unknown printed. It was</h4>
                    </div>

                    <div className='newsfeedcard'>
                        <img alt='img1'></img>
                        <div className='caldate'>
                            <h6>Calander date</h6>
                            <h6>Comments</h6>
                        </div>
                        <h2>Inspiration is under construction Business & Fashion 2019.</h2>
                        <h4> unknown printed. It was</h4>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <div><h3>Newsletter</h3></div>
                <div><h5>Enter your email address</h5></div>
                <div><button className="newsbutton">Subscribe Now</button></div>
            </div>
            

        </div>
    )

}
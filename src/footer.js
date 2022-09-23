import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer (){
    return(

   <div className='footer'>

        <div className="footer1">
            <div>VUE</div>
            <div>Social Media</div>
            <div>Location</div>
            <div>About</div>
            <div><img alt="big sale"></img></div>
            <div><hr></hr></div>
            
        </div>

        <div><hr></hr></div>


        <div className="foooter2">
            <div><h6>Copyright</h6></div>
                
                <div className="footerfootericons">
                    < FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <EmailIcon />


                </div>
            </div>
     </div>
        
    )
}
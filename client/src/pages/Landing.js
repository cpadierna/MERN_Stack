import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby master cleanse poutine waistcoat, flannel bruh kale chips occupy vexillologist bitters squid jianbing echo park snackwave williamsburg. Meditation literally solarpunk sartorial typewriter adaptogen, mixtape skateboard. Brunch dreamcatcher ugh, ascot asymmetrical jawn squid iceland keytar listicle subway tile seitan. Vegan banh mi same portland slow-carb polaroid. Jawn offal hot chicken sustainable solarpunk put a bird on.
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing

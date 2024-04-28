import Carousel from '../Carousel/Carousel'
import Categories from '../Categories/Categories'
import Featured from '../Featured/Featured'
import NewArrival from '../NewArrival/NewArrival'
import './Home.css'

const Home = () => {

    return (
        <section>
            <div id="landing" className='bg-gray-100'>
                <div id='landing-left-side'>
                    <div id='inner-landing-left-side'>
                        <div id='heading' className='font-mono'>Summer Sale</div>
                        <div id='sub-heading'>50% Off</div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis debitis deserunt dolores blanditiis ut quia accusantium neque fugit temporibus.
                        </p>
                        <button>Shop Now <b>&rarr;</b></button>
                    </div>
                </div>
                <div id='landing-right-side' className='flex items-center gap-x-4'>
                    <Carousel />
                    <Carousel />
                    <Carousel />
                    <Carousel />
                </div>
            </div>
            <Categories />
            <NewArrival />
            <Featured />
        </section>
    )
}

export default Home

import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

function Home() {
    return (
     <React.Fragment>
        <Hero>
            <Banner title="Quartos de luxo" subtitle="Quartos de luxo a partir de 250,00">
                <Link to='/rooms' className="btn-primary" >
                   Conheça nossos Quartos
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
     </React.Fragment>
    )
}

export default Home

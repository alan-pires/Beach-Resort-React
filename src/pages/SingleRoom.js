import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    // componentDidMount(){        
    // }
    
    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>Nenhum quarto foi encontrado.</h3>
                <Link to="/rooms" className="btn-primary">
                    Voltar para quartos
                </Link>
            </div>
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg,...defaultImg] = images

        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`Quarto ${name}`}>
                    <Link to="/rooms" className="btn-primary">
                        Voltar para quartos
                    </Link>
                </Banner>
            </StyledHero>

            <section className="single-room">
               <div className="single-room-images">
                 {defaultImg.map((item, index)=>{
                    return <img key={index} src={item} alt={name} />
                 })}
               </div>               
            

            <div className="single-room-info">
                <article className="desc">
                    <h3>Detalhes: </h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Info: </h3>
                    <h6>Preço: R${price}</h6>
                    <h6>Tamanho: {size} metros quadrados</h6>
                    <h6>
                        Capacidade: {
                            capacity > 1 ? `${capacity} pessoas` : 
                            `${capacity} pessoa` }
                    </h6>
                        <h6>{pets?"Permite animal de estimação" : "Não permite animal de estimação" }</h6>
                        <h6>{breakfast && "Café da manhã incluso"}</h6>
                </article>
            </div>
            </section>
            
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

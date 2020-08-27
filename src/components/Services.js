import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
   state={
       services:[
           {
               icon:<FaCocktail />,
               title:"Cocktails de Cortesia",
               info: "Desfrute dos nossos Cocktails enquanto relaxa a beira da praia."
           },
           {
            icon:<FaHiking />,
            title:"Trilhas",
            info: "O hotel fica localizado próximo as trilhas mais bonitas da cidade."
        },
        {
            icon:<FaShuttleVan />,
            title:"Transfer",
            info: "Temos vans partindo do aeroporto diariamente."
        },
        {
            icon:<FaBeer />,
            title:"Cervejas",
            info: "Experimente nossas cervejas artesanais."
        }

       ]
   }
   
    render() {
        return (
            <section className="services" >
                <title title="Serviços" />
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return <article key={index} className="service" >
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                             <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

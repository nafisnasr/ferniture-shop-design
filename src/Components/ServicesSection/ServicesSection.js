import React, { useState } from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'
import { servicesData } from "../../data"
import "./ServicesSection.css"

export default function ServicesSection() {
    const [services] = useState(servicesData)

    return (
        <section className="services">
            <div className="wrapper row">
                {services.map(service => (
                    <ServiceBox key={service.id} {...service} />
                ))}
            </div>
        </section>
    )
}

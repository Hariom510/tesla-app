import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <container>
            <Section
              title = "Model S"
              description = "Order Online for Touchless Delivery"
              backgroundimg = "model-s.jpg"
              leftBtnText= "Custom Order"
              rightBtnText = "Existing Inventory"
             />

            <Section
            title = "Model Y"
            description = "Order Online for Touchless Delivery"
            backgroundimg = "model-y.jpg"
            leftBtnText= "Custom Order"
            rightBtnText = "Existing Inventory" />
            <Section
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            backgroundimg = "model-3.jpg"
            leftBtnText= "Custom Order"
            rightBtnText = "Existing Inventory" />
            <Section
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            backgroundimg = "model-x.jpg"
            leftBtnText= "Custom Order"
            rightBtnText = "Existing Inventory" />
            <Section
            title = "Lowest Cost Solar Panels in India"
            description = "Money-back guarantee"
            backgroundimg = "solar-panel.jpg"
            leftBtnText= "Order now"
            rightBtnText = "Learn more" />
            <Section
            title = "Solar for New Roofs"
            description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundimg = "solar-roof.jpg"
            leftBtnText= "Order now"
            rightBtnText = "Learn more" />
            <Section
            title = "Accessories"
            description = ""
            backgroundimg = "accessories.jpg"
            leftBtnText= "Shop now"
            />



            

        </container>
    )
}

export default Home

//belows are the power of styled components of react which allows us to write css property in javascript insted of in css file
const container = styled.div`
    height: 100vh;
`
import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn Bitcoin. <br />Understand money.<br />Make meaningful investments.</h1>
        <p>Complete courses about the beginnings and workings of cryptocurrencies. Build both practice and real investment portfolios with Bitcoin & Altcoins.</p>
        <Link to="/page-2/">Watch the video</Link>
        
      </div>
    </div>
    <div className="Cards">
      <h2>5 Modules</h2>
      <div className="CardGroup">
        <Card 
          title="What is money, really?"
          text=""
          image={require('../images/forCard.jpg')} />
        <Card 
          title="What is cryptocurrency?"
          text=""
          image={require('../images/forCard.jpg')} />
        <Card 
          title="What is Bitcoin?"
          text=""
          image={require('../images/forCard.jpg')} />
        <Card 
          title="What is a wallet?"
          text=""
          image={require('../images/forCard.jpg')} />
        <Card 
          title="Learn about trading!"
          text=""
          image={require('../images/forCard.jpg')} />
      </div>
    </div>
    <div className="forsect">
    <Section
      image={require('../images/btc.jpg')}
      logo={require('../images/Bitcoin-icon.png')}
      title="Bitcoin Top News"
      text="Staying informed is a skilled practice of both consumer-citizens & investors. But staying informed requires good resources. Don't worry, we do all the hard work for you, searching and organizing top Crypto News for you right here. See it here, every day, and enjoy."
     />
     </div>     
  </div>
)

export default IndexPage
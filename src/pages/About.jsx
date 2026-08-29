import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Jebesoft IT Academy жөнүндө</h2>
      <p className="about-description">
        <strong>Jebesoft IT Academy</strong> — бул маалыматтык технологиялар жана программалоо тармагында квалификациялуу адистерди даярдоого адистешкен заманбап билим берүү борбору.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Биздин миссия</h3>
          <p>
            Ар бир студентке суроо-талапка ээ кесипти өздөштүрүүгө жана IT-индустриясында ийгиликтүү старт алууга жардам берип, жеткиликтүү жана практикага багытталган IT-билим берүү.
          </p>
        </div>

        <div className="about-card">
          <h3>Эмне үчүн биз?</h3>
          <ul>
            <li><strong>Алгачкы күндөрдөн баштап практика:</strong> минималдуу теория, максималдуу реалдуу долбоорлор.</li>
            <li><strong>Тажрыйбалуу менторлор:</strong> иштеп жаткан разработчиктер жана IT-инженерлер.</li>
            <li><strong>24/7 колдоо:</strong> тапшырмаларды талдоого жана код-ревьюга жардам берүү.</li>
            <li><strong>Жумушка орношууга көмөктөшүү:</strong> резюме түзүү, маектешүүлөргө даярдоо жана стажировкалар.</li>
          </ul>
        </div>
      </div>

      <div className="about-banner">
        🚀 <span>Jebesoft менен бирге IT тармагындагы жолуңузду бүгүн баштаңыз!</span>
      </div>
    </div>
  )
}

export default About
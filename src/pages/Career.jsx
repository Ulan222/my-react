import React from 'react'

const careerSteps = [
  {
    step: '01',
    title: 'Окутуу жана долбоорлор',
    desc: 'Сиз заманбап технологияларды өздөштүрүп, реалдуу кейстерден портфолио түзөсүз.'
  },
  {
    step: '02',
    title: 'Жумушка орношууга даярдык',
    desc: 'Туура резюме түзөбүз, GitHub/Behance профилин жасалгалайбыз жана сыноо маектешүүлөрүн өткөрөбүз.'
  },
  {
    step: '03',
    title: 'Jebesoft’то стажировка',
    desc: 'Мыкты студенттер биздин ички долбоорлордо коммерциялык стажировкадан өтүүгө мүмкүнчүлүк алышат.'
  },
  {
    step: '04',
    title: 'IT-компаниядан оффер',
    desc: 'Бүтүрүүчүлөрдү өнөктөш компанияларга сунуштайбыз жана сыноо мөөнөтүн ийгиликтүү өткөнгө чейин коштоп жүрөбүз.'
  }
]

const Career = () => {
  return (
    <div className="career-container">
      <div className="career-header">
        <h2 className="career-title">Жумушка орношуу жана Карьера</h2>
        <p className="career-subtitle">Биз жөн гана окутпастан — суроо-талапка ээ IT-адиси болууга жардам беребиз</p>
      </div>

      <div className="career-steps">
        {careerSteps.map((item) => (
          <div key={item.step} className="step-card">
            <div className="step-number">{item.step}</div>
            <div className="step-content">
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="career-banner">
        <h3>Карьерадагы биринчи кадамды жасоого даярсызбы?</h3>
        <p>Биздин HR-эксперт менен акысыз карьердик консультацияга жазылыңыз.</p>
      </div>
    </div>
  )
}

export default Career
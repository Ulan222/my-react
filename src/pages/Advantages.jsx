import React from 'react'

const advantagesData = [
  {
    id: 1,
    icon: '🚀',
    title: 'Тез старт',
    description: 'Ойлонулган окутуу программасынын жардамы менен суроо-талапка ээ кесипти 4–10 айда өздөштүрүңүз.'
  },
  {
    id: 2,
    icon: '💻',
    title: 'Реалдуу долбоорлор',
    description: 'Убакыттын 80%дан ашыгы практикага бөлүнөт. Окуунун аягында күчтүү портфолио топтойсуз.'
  },
  {
    id: 3,
    icon: '👨‍🏫',
    title: 'Тайanch менторлор',
    description: 'Иштеп жаткан Senior жана Middle иштеп чыгуучулардан билим алуу жана туруктуу код-ревью.'
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Жумушка орношууга көмөк',
    description: 'Маектешүүгө даярдайбыз, резюме түзөбүз жана мыкты бүтүрүүчүлөрдү IT-компанияларга сунуштайбыз.'
  },
  {
    id: 5,
    icon: '🕒',
    title: 'Ийкемдүү график',
    description: 'Сабактардын жазууларына жана материалдарына 24/7 мүмкүнчүлүк. Окууну жумуш же университет менен айкалыштырыңыз.'
  },
  {
    id: 6,
    icon: '🏆',
    title: 'Jebesoft сертификаты',
    description: 'Жумуш берүүчүлөр арасында бааланган диплом менен алган билимиңизди далилдеңиз.'
  }
]

const Advantages = () => {
  return (
    <div className="advantages-container">
      <div className="advantages-header">
        <h2 className="advantages-title">Эмне үчүн дал именно Jebesoft?</h2>
        <p className="advantages-subtitle">Биздин IT-академияда окуунун башкы артыкчылыктары</p>
      </div>

      <div className="advantages-grid">
        {advantagesData.map((item) => (
          <div key={item.id} className="advantage-card">
            <div className="advantage-icon">{item.icon}</div>
            <h3 className="advantage-name">{item.title}</h3>
            <p className="advantage-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Advantages
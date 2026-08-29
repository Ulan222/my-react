import React from 'react'

const coursesData = [
  {
    id: 1,
    title: 'Frontend-иштеп чыгуу',
    duration: '6 ай',
    level: 'Нөлдөн баштап',
    tags: ['HTML/CSS', 'JavaScript', 'React'],
    description: 'Заманбап веб-интерфейстерди жана интерактивдүү тиркемелерди жасоону өздөштүрүңүз.'
  },
  {
    id: 2,
    title: 'Backend-иштеп чыгуу',
    duration: '7 ай',
    level: 'Нөлдөн баштап',
    tags: ['Python', 'Django', 'PostgreSQL', 'REST API'],
    description: 'Сервердик логиканы, маалымат базалары менен иштөөнү жана тиркемелердин архитектурасын үйрөнүңүз.'
  },
  {
    id: 3,
    title: 'Fullstack-иштеп чыгуучу',
    duration: '10 ай',
    level: 'Орто деңгээл',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    description: 'Нөлдөн баштап толук кандуу веб-сервистерди түзүү үчүн комплекстүү программа.'
  },
  {
    id: 4,
    title: 'UX/UI Дизайн',
    duration: '4 ай',
    level: 'Нөлдөн баштап',
    tags: ['Figma', 'Prototyping', 'User Research'],
    description: 'Мобилдик жана веб-тиркемелер үчүн ынгайлуу жана эстетикалык интерфейстерди долбоорлоңуз.'
  }
]

const Courses = ({ onSelectCourse }) => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2 className="courses-title">Биздин Курстар</h2>
        <p className="courses-subtitle">Өзүңүзгө ылайыктуу программаны тандап, IT тармагындагы карьераңызды баштаңыз</p>
      </div>

      <div className="courses-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-badge">{course.level}</div>
            <h3 className="course-name">{course.title}</h3>
            <p className="course-desc">{course.description}</p>

            <div className="course-tags">
              {course.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="course-footer">
              <span className="course-duration">⏱ {course.duration}</span>
              <button 
                className="course-btn" 
                onClick={() => onSelectCourse(course.title)}
              >
                Жазылуу
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
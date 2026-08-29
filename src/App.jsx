import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import About from './pages/About'
import Courses from './pages/Courses'
import Advantages from './pages/Advantages'
import Reviews from './pages/Reviews'
import Career from './pages/Career'
import Contacts from './pages/Contacts'

function App() {
     const Register= async () => {
     try{
      const result = await createUserWithEmailAndPassword(auth, email, password)
      console.log(result)
      const user = result.user
      await setDoc(doc(db,"user", user.uid), {
            uid:user.uid,
            name:name,
            email:email,
            jashy:age,
            role:"user",
      })
      console.log("Успешно создан")
      

     }
     catch (err){
      alert(err)

     }
    }
  const [selectedCourse, setSelectedCourse] = useState(
    'Frontend-разработка'
  )

  const navigate = useNavigate()

  const handleSelectCourse = (courseTitle) => {
    setSelectedCourse(courseTitle)
    navigate('/contacts')
  }

  return (
    <div className="app-main">

      <header className="header">
        <h1 className="brand-logo">
          Jebesoft <span>IT Academy</span>
        </h1>
      </header>

      <nav className="l">
        <div className="c">

          <p className="ss">
            <Link className="s" to="/">
              Биз жөнүндө
            </Link>
          </p>

          <p className="ss">
            <Link className="s" to="/courses">
              Курстар
            </Link>
          </p>

          <p className="ss">
            <Link className="s" to="/advantages">
              Артыкчылыктар
            </Link>
          </p>

          <p className="ss">
            <Link className="s" to="/reviews">
              Пикир
            </Link>
          </p>

          <p className="ss">
            <Link className="s" to="/career">
              Карьера
            </Link>
          </p>

          <p className="ss">
            <Link className="s" to="/contacts">
              Катталуу
            </Link>
          </p>

        </div>
      </nav>

      <main className="counter">

        <Routes>

          <Route
            path="/"
            element={<About />}
          />

          <Route
            path="/courses"
            element={
              <Courses
                onSelectCourse={handleSelectCourse}
              />
            }
          />

          <Route
            path="/advantages"
            element={<Advantages />}
          />

          <Route
            path="/reviews"
            element={<Reviews />}
          />

          <Route
            path="/career"
            element={<Career />}
          />

          <Route
            path="/contacts"
            element={
              <Contacts
                selectedCourse={selectedCourse}
              />
            }
          />

        </Routes>

      </main>

    </div>
  )
}

export default App

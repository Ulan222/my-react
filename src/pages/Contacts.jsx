import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

// Өлкөлөрдүн тизмеси жана телефон коддору
const COUNTRIES = [
  { code: '+996', flag: '🇰🇬', country: 'KG' },
  { code: '+7', flag: '🇰🇿', country: 'KZ' },
  { code: '+7', flag: '🇷🇺', country: 'RU' },
  { code: '+998', flag: '🇺🇿', country: 'UZ' },
  { code: '+1', flag: '🇺🇸', country: 'US' },
  { code: '+90', flag: '🇹🇷', country: 'TR' },
]

const Contacts = ({ selectedCourse }) => {
  const [countryCode, setCountryCode] = useState('+996')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    course: selectedCourse || 'Frontend-иштеп чыгуу',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: selectedCourse
      }))
    }
  }, [selectedCourse])

  // Өлкөнүн коду же номер өзгөргөндө телефон талаасын жаңылоо
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      phone: `${countryCode} ${phoneNumber}`.trim()
    }))
  }, [countryCode, phoneNumber])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.password) {
      alert('Атыңызды, email жана сыр сөздү толтуруңуз')
      return
    }

    setLoading(true)

    try {
      // Firebase Authentication'да колдонуучу түзүү
      const result = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      const user = result.user

      // Firestore'го кошумча маалыматтарды сактоо
      await setDoc(doc(db, 'user', user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        jashy: formData.age,
        course: formData.course,
        message: formData.message,
        role: 'user',
        createdAt: serverTimestamp()
      })

      console.log('Колдонуучу ийгиликтүү түзүлдү:', user.uid)

      setSubmitted(true)
      setPhoneNumber('')

      // Форманы тазалоо
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        age: '',
        course: selectedCourse || 'Frontend-иштеп чыгуу',
        message: ''
      })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)

    } catch (err) {
      console.error(err)
      alert('Катталууда ката чыкты: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contacts-container">

      <div className="contacts-header">
        <h2 className="contacts-title">
          Катталуу жана курс жазуу
        </h2>

        <p className="contacts-subtitle">
          Аккаунт түзүңүз жана Jebesoft курсуна жазылыңыз
        </p>
      </div>

      <div className="contacts-content">

        <div className="contacts-info">
          <h3>Байланыш маалыматы</h3>

          <p className="contacts-text">
            Биз менен түз байланышыңыз же офисибизге келиңиз.
          </p>

          <div className="info-item">
            <span className="info-icon">📍</span>

            <div>
              <strong>Дарек:</strong>
              <p>Каракол ш., Алыбаков көч., 158</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>

            <div>
              <strong>Телефон:</strong>
              <p>+996 (779) 11-98-90</p>
            </div>
          </div>
        </div>

        <div className="contacts-form-wrapper">

          <h3>Курска катталуу</h3>

          {submitted && (
            <div className="success-message">
              ✅ Сиз ийгиликтүү катталдыңыз жана курска жазылдыңыз!
            </div>
          )}

          <form
            className="contacts-form"
            onSubmit={handleRegister}
          >

            <div className="form-group">
              <label>Сиздин атыңыз *</label>

              <input
                type="text"
                name="name"
                placeholder="Атыңызды киргизиңиз"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>

              <input
                type="email"
                name="email"
                placeholder="Email киргизиңиз"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Сыр сөз *</label>

              <input
                type="password"
                name="password"
                placeholder="Сыр сөздү киргизиңиз"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label>Телефон номери</label>

              <div className="phone-input-wrapper">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="country-select"
                >
                  {COUNTRIES.map((c, index) => (
                    <option key={index} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  placeholder="(779) 11-98-90"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="phone-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Жашыңыз</label>

              <input
                type="number"
                name="age"
                placeholder="Жашыңызды киргизиңиз"
                value={formData.age}
                onChange={handleChange}
                min="1"
                max="100"
              />
            </div>

            <div className="form-group">
              <label>Тандалган курс</label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="Frontend-иштеп чыгуу">
                  Frontend-иштеп чыгуу
                </option>

                <option value="Backend-иштеп чыгуу">
                  Backend-иштеп чыгуу
                </option>

                <option value="Fullstack-иштеп чыгуучу">
                  Fullstack-иштеп чыгуучу
                </option>

                <option value="UX/UI Дизайн">
                  UX/UI Дизайн
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading
                ? 'Түзүлүүдө...'
                : 'Катталуу'}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
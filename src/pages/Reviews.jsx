import { useEffect, useState } from 'react'

function Reviews() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews')

    return savedReviews
      ? JSON.parse(savedReviews)
      : [
          {
            id: 1,
            name: 'Алина',
            role: 'Frontend-иштеп чыгуучу',
            rating: 5,
            text: 'Эң сонун окутуу! Баарын түшүнүктүү жана кенен түшүндүрүшөт.'
          },
          {
            id: 2,
            name: 'Данияр',
            role: 'Студент',
            rating: 4,
            text: 'Жакшы мугалимдер жана кызыктуу практикалык тапшырмалар.'
          }
        ]
  })

  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews))
  }, [reviews])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim()) {
      alert('Атыңызды киргизиңиз')
      return
    }

    if (rating === 0) {
      alert('Баа бериңиз')
      return
    }

    if (!text.trim()) {
      alert('Пикириңизди жазыңыз')
      return
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: 'Jebesoft окуучусу',
      rating: rating,
      text: text.trim()
    }

    setReviews((prev) => [newReview, ...prev])

    setName('')
    setRating(0)
    setText('')
  }

  const renderStars = (count) => {
    return (
      <div className="review-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= count ? 'star active' : 'star'}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="reviews-container">

      {/* Заголовок */}
      <div className="reviews-header">
        <h2 className="reviews-title">
          Биздин окуучулардын пикирлери
        </h2>

        <p className="reviews-subtitle">
          Сиздин пикириңиз биз үчүн маанилүү
        </p>
      </div>


      {/* Форма отзыва */}
      <div className="review-form">

        <h3>Пикир калтыруу</h3>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Сиздин атыңыз</label>

            <input
              type="text"
              placeholder="Атыңызды киргизиңиз"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          {/* Выбор звёзд */}
          <div className="rating-group">

            <label>Сиздин бааңыз</label>

            <div className="rating-select">

              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={
                    star <= rating
                      ? 'rating-star selected'
                      : 'rating-star'
                  }
                  onClick={() => setRating(star)}
                  onMouseEnter={() => {}}
                >
                  ★
                </button>
              ))}

            </div>

            <span className="rating-text">
              {rating === 0
                ? 'Бааны тандаңыз'
                : `5тен ${rating}`}
            </span>

          </div>


          <div className="form-group">

            <label>Сиздин пикириңиз</label>

            <textarea
              rows="5"
              placeholder="Окуганыңыз тууралуу айтып бериңиз..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

          </div>


          <button
            type="submit"
            className="review-submit"
          >
            Пикир калтыруу
          </button>

        </form>

      </div>


      {/* Отзывы */}
      <div className="reviews-grid">

        {reviews.map((review) => (
          <div
            className="review-card"
            key={review.id}
          >

            <div className="review-top">

              <div className="review-avatar">
                {review.name.charAt(0).toUpperCase()}
              </div>

              <div className="review-info">

                <h3 className="review-name">
                  {review.name}
                </h3>

                <span className="review-role">
                  {review.role}
                </span>

              </div>

            </div>


            {/* Звёзды */}
            {renderStars(review.rating)}


            <p className="review-text">
              "{review.text}"
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Reviews
import { useEffect, useState } from 'react'
import { getReviewers } from '../api/reviewerApi'
import { createConference } from '../api/conferenceApi'
import './CreateConference.css'

export default function CreateConference() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [reviewers, setReviewers] = useState([])
  const [selectedReviewers, setSelectedReviewers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getReviewers()
      .then(res => setReviewers(res.data))
      .catch(() => setReviewers([]))
  }, [])

  const toggleReviewer = (id) => {
    setSelectedReviewers(prev =>
      prev.includes(id)
        ? prev.filter(r => r !== id)
        : [...prev, id]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (selectedReviewers.length < 3) {
      setError('Select at least 3 reviewers')
      return
    }

    await createConference({
      title,
      description,
      reviewerIds: selectedReviewers
    })

    alert('Conference created')

    setTitle('')
    setDescription('')
    setSelectedReviewers([])
    setError('')
  }

  return (
    <div className="create-conference-container">
      <h1>Create Conference</h1>

      <form className="conference-form" onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}

        <div className="form-group">
          <label>Conference title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Conference description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label>Select reviewers (minimum 3)</label>

          <div className="reviewer-list">
            {reviewers.map(r => (
              <div key={r.id} className="reviewer-item">
                <input
                  type="checkbox"
                  id={`reviewer-${r.id}`}
                  checked={selectedReviewers.includes(r.id)}
                  onChange={() => toggleReviewer(r.id)}
                />
                <label htmlFor={`reviewer-${r.id}`}>
                  <span>{r.name}</span>
                  <small>{r.email}</small>
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Create Conference
        </button>
      </form>
    </div>
  )
}

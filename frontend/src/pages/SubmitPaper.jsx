import { useEffect, useState } from 'react'
import { getConferences } from '../api/conferenceApi'
import { submitPaper } from '../api/paperApi'
import { getAuthors } from '../api/userApi'

export default function SubmitPaper() {
  const [conferences, setConferences] = useState([])
  const [authors, setAuthors] = useState([])

  const [conferenceId, setConferenceId] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [title, setTitle] = useState('')
  const [abstract, setAbstract] = useState('')
  const [fileUrl, setFileUrl] = useState('')

  const [error, setError] = useState('')

  useEffect(() => {
    getConferences().then(res => setConferences(res.data))
    getAuthors().then(res => setAuthors(res.data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!conferenceId || !authorId) {
      setError('Select author and conference')
      return
    }

    if (!fileUrl) {
      setError('File URL is required')
      return
    }

    await submitPaper({
      title,
      abstract,
      fileUrl,
      conferenceId: Number(conferenceId),
      authorId: Number(authorId)
    })

    alert('Paper submitted')

    setTitle('')
    setAbstract('')
    setFileUrl('')
    setConferenceId('')
    setAuthorId('')
    setError('')
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto' }}>
      <h1>Submit Paper</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Author</label><br />
          <select
            value={authorId}
            onChange={e => setAuthorId(e.target.value)}
            required
          >
            <option value="">Select author</option>
            {authors.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Conference</label><br />
          <select
            value={conferenceId}
            onChange={e => setConferenceId(e.target.value)}
            required
          >
            <option value="">Select conference</option>
            {conferences.map(c => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Paper title</label><br />
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Abstract</label><br />
          <textarea
            value={abstract}
            onChange={e => setAbstract(e.target.value)}
            required
          />
        </div>

        <div>
          <label>File URL (or filename)</label><br />
          <input
            value={fileUrl}
            onChange={e => setFileUrl(e.target.value)}
            placeholder="paper.pdf"
            required
          />
        </div>

        <button type="submit">Submit Paper</button>
      </form>
    </div>
  )
}

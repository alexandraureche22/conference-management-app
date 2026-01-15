import { useEffect, useState } from 'react'
import { getPapers, resubmitPaper } from '../api/paperApi'

export default function AuthorDashboard() {
  const [papers, setPapers] = useState([])
  const [editData, setEditData] = useState({})

  const loadPapers = () => {
    getPapers()
      .then(res => setPapers(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    loadPapers()
  }, [])

  const handleResubmit = async (paperId) => {
    try {
      await resubmitPaper(paperId, {
        abstract: editData[paperId]?.abstract || '',
        fileUrl: editData[paperId]?.fileUrl || ''
      })

      alert('Paper resubmitted')
      loadPapers()
    } catch (err) {
      console.error(err)
      alert('Failed to resubmit paper')
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto' }}>
      <h1>Author Dashboard</h1>

      {papers.length === 0 && <p>No papers submitted.</p>}

      {papers.map(p => (
        <div
          key={p.id}
          style={{
            border: '1px solid #444',
            padding: 12,
            marginBottom: 12,
            borderRadius: 4
          }}
        >
          <h3>{p.title}</h3>

          <p>Status: <strong>{p.status}</strong></p>

          <p>Abstract: {p.abstract}</p>

          {p.status !== 'ACCEPTED' && (
            <>
              <textarea
                placeholder="New abstract"
                value={editData[p.id]?.abstract || ''}
                onChange={e =>
                  setEditData({
                    ...editData,
                    [p.id]: {
                      ...editData[p.id],
                      abstract: e.target.value
                    }
                  })
                }
                style={{ width: '100%', marginBottom: 8 }}
              />

              <input
                placeholder="New file URL"
                value={editData[p.id]?.fileUrl || ''}
                onChange={e =>
                  setEditData({
                    ...editData,
                    [p.id]: {
                      ...editData[p.id],
                      fileUrl: e.target.value
                    }
                  })
                }
                style={{ width: '100%', marginBottom: 8 }}
              />

              <button onClick={() => handleResubmit(p.id)}>
                Resubmit Paper
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

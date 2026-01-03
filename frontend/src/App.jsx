import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Conferences from './pages/Conferences'
import ConferenceDetails from './pages/ConferenceDetails'
import SubmitPaper from './pages/SubmitPaper'
import ReviewerDashboard from './pages/ReviewerDashboard'
import OrganizerDashboard from './pages/OrganizerDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: 10 }}>
        <Link to="/">Conferences</Link>
        <Link to="/submit">Submit Paper</Link>
        <Link to="/reviewer">Reviewer</Link>
        <Link to="/organizer">Organizer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Conferences />} />
        <Route path="/conference/:id" element={<ConferenceDetails />} />
        <Route path="/submit" element={<SubmitPaper />} />
        <Route path="/reviewer" element={<ReviewerDashboard />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

//importam modelele sequelize din folderul models.
const { Conference, Paper, User, Review } = require('../models')


//creeam o conferinta noua
//ENDPOINT: POST /conferences
const createConference = async (req, res) => {
  try {
    const { reviewerIds, ...conferenceData } = req.body

    if (!reviewerIds || reviewerIds.length < 3) {
      return res.status(400).json({
        message: 'A conference must have at least 3 reviewers'
      })
    }

    const reviewers = await User.findAll({
      where: {
        id: reviewerIds,
        role: 'REVIEWER'
      }
    })

    if (reviewers.length !== reviewerIds.length) {
      return res.status(400).json({
        message: 'One or more users are not reviewers'
      })
    }

    const now = new Date()
    const end = new Date()
    end.setDate(now.getDate() + 7)

    const conference = await Conference.create({
      ...conferenceData,
      startDate: now,
      endDate: end
    })

    await conference.addUsers(reviewers)

    res.status(201).json(conference)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}




// Returnează lista tuturor conferințelor
// Endpoint: GET /conferences
const getConferences = async (req, res) => {
  try {
    //Citeste toate inregistrarile din tabela Conferences
    const confs = await Conference.findAll()
    //Returneaza lista conferintelor ca raspuns sub forma de JSON
    res.json(confs)
  } catch (err) {
    //Pentru orice eroare de server
    res.status(500).json({ error: err.message })
  }
}


//Returneaza o conferinta dupa ID
//Endpoint: GET /conferences/:id
const getConferenceById = async (req, res) => {
  try {
    //Cauta conferinta dupa ID folosind findByPk (Primary Key)
    const conf = await Conference.findByPk(req.params.id)
    //Daca conferinta nu exista, returneaza 404
    if (!conf) return res.status(404).json({ message: 'Conference not found' })
    //Daca conferinta exista, returneaza datele acesteia
    res.json(conf)
  } catch (err) {
    //Eroare de server
    res.status(500).json({ error: err.message })
  }
}


// Actualizează o conferință existentă
// Endpoint: PUT /conferences/:id
const updateConference = async (req, res) => {
  try {
    //Cauta conferinta dupa ID
    const conf = await Conference.findByPk(req.params.id)
    //Daca conferinta nu exista, returneaza 404
    if (!conf) return res.status(404).json({ message: 'Conference not found' })
    
    //Actualizeaza conferinta cu datele din req.body
    await conf.update(req.body)
    //Returneaza conferinta actualizata
    res.json(conf)
  } catch (err) {
    //Eroare de server
    res.status(500).json({ error: err.message })
  }
}


// Returnează toate lucrările pentru o conferință specifică, inclusiv autorii și recenziile
// Endpoint: GET /conferences/:id/papers
const getConferencePapers = async (req, res) => {
  try {
    const { id } = req.params

    const conference = await Conference.findByPk(id, {
      include: [
        {
          model: Paper,
          as: 'papers',
          include: [
            {
              model: User,
              attributes: ['id', 'name', 'email']
            },
            {
              model: Review
            }
          ]
        }
      ]
    })

    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' })
    }

    res.json({
      conferenceId: conference.id,
      conferenceTitle: conference.title,
      papers: conference.papers
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}



//Exportă funcțiile pentru a fi folosite în rutele Express
module.exports = {
  createConference,
  getConferences,
  getConferenceById,
  updateConference,
  getConferencePapers
}

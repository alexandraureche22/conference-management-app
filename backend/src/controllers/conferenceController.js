//importam modelele sequelize din folderul models.
const { Conference, Paper, User, Review } = require('../models')


//creeam o conferinta noua
//ENDPOINT: POST /conferences
const createConference = async (req, res) => {
  try {
    // Creează o înregistrare nouă în tabela Conferences
    // req.body conține datele trimise din frontend (title, description, dates etc.)
    const conf = await Conference.create(req.body)
    // Returnează conferința creată + status HTTP 201 (Created)
    res.status(201).json(conf)
  } catch (err) {
    // Dacă apare o eroare (ex: date invalide, DB error)
    // trimitem status 500 + mesajul erorii
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
    // Extrage ID-ul conferinței din parametrii URL
    const { id } = req.params
    // Găsește conferința după ID și include lucrările, autorii și recenziile acestora
    const conference = await Conference.findByPk(id, {
      include: [
        {
          model: Paper,
          include: [
            {
              model: User,
              attributes: ['id', 'name', 'email'],
              foreignKey: 'authorId'
            },
            {
              model: Review,
              attributes: ['id', 'decision', 'feedback', 'reviewerId']
            }
          ]
        }
      ]
    })
    // Dacă conferința nu este găsită, returnează 404
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' })
    }
    // Returnează ID-ul conferinței, titlul și lucrările asociate
    res.json({
      conferenceId: conference.id,
      conferenceTitle: conference.title,
      papers: conference.Papers
    })
  } catch (err) {
    // Eroare de server
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

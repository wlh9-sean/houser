

const getHouse = async (req, res) => {
    const db = await req.app.get('db')
    db.get_houses().then((houses) => {
        res.status(200).send(houses)
    }).catch(err => console.log(err))
}

const newHouse = (req, res) => {
    const {name, address, city, state, zip} = req.body
    const db = req.app.get('db')
    db.new_house([name, address, city, state, zip]).then(() => {
        res.status(200).send('House added!!')
    }).catch(err => console.log(err))
}

const deleteHouse = (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_house([id]).then((houses) => {
        res.status(200).send(houses)
    })
}

const updateHouse = (req, res) => {
    const {name, address, city, state, zip} = req.body
    const {id} = req.params
    const db = req.app.get('db')
    db.update_house({id, name, address, city, state, zip}).then((house) => {
        res.status(200).send(house)
    })
}




module.exports = {
    getHouse,
    newHouse,
    deleteHouse,
    updateHouse
}
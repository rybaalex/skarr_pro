class NavService {
    getNav = (db) => {
        return db.collection("nav").find({published: true}).sort({sort:1}).toArray()
    }
}

module.exports = new NavService()
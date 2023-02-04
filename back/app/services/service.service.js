class ServiceService {
    getService = (db) => {
        return db.collection("service").find({published: true}).toArray();
    }
}

module.exports = new ServiceService()
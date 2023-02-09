class RecommendationsService {
    getRecommendations = (db) => {
        return db.collection("recommendations").find({published: true}).toArray();
    }
}

module.exports = new RecommendationsService()
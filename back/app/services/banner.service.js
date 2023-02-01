class BannerService {
    getBanner = (db) => {
        return db.collection("banners").findOne()
    }
}

module.exports = new BannerService()
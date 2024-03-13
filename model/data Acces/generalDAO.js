const mysqlExecute = require("../../util/mysqlConnexion")

class GeneralDAO{
    static async getKnowledge(cb){
        let sql = "SELECT * FROM technicalknowledge";
        try {
            let results = await mysqlExecute(sql);
            cb(results)
        } catch (error) {
            cb({});
        }
    }
    static async addKnowledge(knowledges, id){
        
    }

    static async fetchTowns(cb){
        let sql= "select * from town ORDER BY name ASC"
    try {
        const results = await mysqlExecute(sql);
        cb(results);

    } catch (error) {
        console.log(error);
    }
    }

    static async insertKnowledge(knowledges, id){
        let sql = "INSERT INTO academicDegrees (idFreelancer, idTechnicalKnowledge) VALUES (?, ?)";

        knowledges.map((e)=>mysqlExecute(sql, [id, e]))
    }
}

module.exports= GeneralDAO;
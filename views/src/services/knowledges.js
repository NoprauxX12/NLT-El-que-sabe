import axios from "axios";
import { BaseUrl } from "../util/apiUrl";

class KnowledgeData{
    static async fetchAll(cb){
        try {
            const res= await axios.post(BaseUrl.serverUsers + "/knowledge");
            res.data.splice(0,0,{
                "idTechnicalKnowledge": "00",
                "title": "Seleccione una opción"
            })
            cb(res.data);
        } catch (error) {
            cb("error");
        }
    }
}

export default KnowledgeData;
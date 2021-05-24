
const controller = require("../controllers/test.controller");

module.exports = function(app){
    app.post("/postMethod",controller.postMethod);
    app.put("/putMethod",controller.putMethod);
    app.delete("/deleteMethod",controller.deleteMethod);
    app.post("/dataBody",controller.dataBody);
    app.post("/dataParams/:name/:age",controller.dataParams);
    app.post("/dataQuery",controller.dataQuery);
}


exports.postMethod = (req,res)=>{
    res.send("Post Method is Working");
}

exports.putMethod = (req,res)=>{
    res.send("Put Method is Working");
}

exports.deleteMethod = (req,res)=>{
    res.send("Delete Method is Working"); 
}

exports.dataBody = (req,res)=>{
    res.send(req.body);
}

exports.dataParams = (req,res)=>{
    res.send(req.params);
}

exports.dataQuery = (req,res)=>{
    res.send(req.query);
}
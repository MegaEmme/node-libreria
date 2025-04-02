function validateBook (req,res,next){
    const newPutBook= req.body;
    const toBeValidParams = ['title','author'];

    if(!isObjValid(newPutBook, toBeValidParams)) {
        return res.status(422).json({
            error: 'controlla se i campi sono validi'
        });
    }
    next();
};

function isObjValid(obj, validParams){
    return validParams.every(param => obj[param] && obj[param].length >= 3);
}

module.exports = validateBook;


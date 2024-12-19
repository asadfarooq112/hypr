
export const validate = (req, res, next) => {
    if (req.query.name === "jawad") {
        console.log('correct name');
        req.asad = 'nbfadsf';
        return  next()
    }
    res.send("invalid input");
}
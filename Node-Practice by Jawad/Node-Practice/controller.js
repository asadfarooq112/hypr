

export const myCOntroller = (req, res, next) => {
    console.log(req.body)

    if (true) {
        res.send("OK");
    }

    console.log("after..")
    // next(new Error("Custom errorr"));

    // res.send("OK")
}


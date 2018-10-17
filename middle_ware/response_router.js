module.exports = (req, res, next) => {
    res.success = ((result) => {
        res.send({
            code: 6,
            msg: "操作成功",
            data: result
        })
    });
    res.fail = ((error) => {
        res.send({
            code: 4,
            msg: "操做失败",
            data: error
        })
    })
    next();
}

'use strict';

exports.get = async(req, res, next) => {
    let list = [];
    for(let i = 1; i <= 1000; i++){

        list.push(i)

    }
    res.status(200).json(list);
};

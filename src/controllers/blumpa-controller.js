
'use strict';

exports.get = async(req, res, next) => {
    let list = [];
    for(let i = 1; i <= 1000; i++){
        let aux = i;

        if(aux % 3 === 0){
            aux = "fizz";

        };

        list.push(aux)

    }
    res.status(200).json(list);
};

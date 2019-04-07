
'use strict';

exports.get = async(req, res, next) => {
    let list = [];
    for(let i = 1; i <= 1000; i++){

        let aux = i;
        const f = "fizz";
        const b = "buzz";

        if(aux % 3 === 0 && aux % 5 === 0){
            aux = f + b;
        }
        else if(aux % 3 === 0){
            aux = f;

        }else if(aux % 5 === 0){
            aux = b;
        };

        list.push(aux);

    };
    res.status(200).json(list);
};

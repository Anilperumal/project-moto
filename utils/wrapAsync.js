// Insteaad of try catch error handi=ling we use this function as error handling 


module.exports = (fn) =>  {
    return (req, res, next) => {
        fn(req,res, next).catch(next);
    };
};


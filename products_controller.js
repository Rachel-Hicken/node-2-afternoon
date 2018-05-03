module.exports = {
    create: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {name, description, price, imageurl} = req.body;
        console.log('create')
        console.log(req.body)
        dbInstance.create_product([name, description, price, imageurl])
        .then( () => res.status(200).send() )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    },
    getOne: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {params} = req;
        console.log(req.body)
        dbInstance.read_product([params.id])
        .then( (product) => res.status(200).send(product) )
            //need product passed in for function to pass arg
        .catch( (e) =>{console.log(e); res.status(500).send() });
    },
    getAll: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        console.log(req.body)
        dbInstance.read_products()
        .then( (products) => res.status(200).send(products) )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    },
    update: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {params, query} = req;
        console.log(req.body)
        dbInstance.update_product([params.id, query.desc])
        .then( () => res.status(200).send() )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    },
    delete: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {params} = req;
        console.log(req.body)
        dbInstance.delete_product([params.id])
        .then( () => res.status(200).send() )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    }
};


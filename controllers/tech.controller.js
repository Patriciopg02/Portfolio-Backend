import Tech from '../models/tech.js';

export const getTechs = async(req,res) => {
    try {
        let Techs = await Tech.find();
        return res.send(Techs);
    }
    catch(err) {
        return res.status(400).send(err);
    }
}

export const postTech = async(req,res) => {
    try {
        const {name,image} = req.body;
        const tech = new Tech({name,image});
        await tech.save();
        return res.status(200).json(tech);
    }
    catch(err) {
        return res.status(400).send(err);
    }
    
}
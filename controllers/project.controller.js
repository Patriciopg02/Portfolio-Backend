import Project from '../models/project.js';

export const getProjects = async(req,res) => {
    try {
        let Projects = await Project.find();
        return res.send(Projects);
    }
    catch(err) {
        return res.status(400).send(err);
    }
}

export const postProject = async(req,res) => {
    try {
        const {title,image,description,database,backend,frontend,github,url} = req.body;
        const project = new Project({title,image,description,database,backend,frontend,github,url});
        await project.save();
        return res.status(200).json(project);
    }
    catch(err) {
        return res.status(400).send(err);
    }
    
}
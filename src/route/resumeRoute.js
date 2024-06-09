import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {

    try {
        const resumes = await req.context.models.Resume.findAll();

        if(resumes.length === 0) {
            return res.status(404).send('No resumes found');
        } 
        
        return res.send(resumes);

       
    } catch (err) {
        return res.status(500).send('Error on search. ' + err.message);
    }
});

router.get('/:resumeId', async (req, res) => {
    try {
        const resume = await req.context.models.Resume.findByPk(req.params.resumeId);

        if(!resume) {
            return res.status(404).send('Resume not found');
        }

        return res.send(resume);
    } catch (err) {
        return res.status(500).send('Error on search. ' + err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const resume = await req.context.models.Resume.create(req.body);

        return res.send(resume);
    } catch (err) {
        return res.status(500).send('Error on create. ' + err.message);
    }
});

router.put('/:resumeId', async (req, res) => {
    try {
        const resume = await req.context.models.Resume.findByPk(req.params.resumeId);

        if(!resume) {
            return res.status(404).send('Resume not found');
        }

        await resume.update(req.body);

        return res.send(resume);
    } catch (err) {
        return res.status(500).send('Error on update. ' + err.message);
    }
});

router.delete('/:resumeId', async (req, res) => {
    try {
        const resume = await req.context.models.Resume.findByPk(req.params.resumeId);

        if(!resume) {
            return res.status(404).send('Resume not found');
        }

        await resume.destroy();

        return res.send('Resume deleted');
    } catch (err) {
        return res.status(500).send('Error on delete. ' + err.message);
    }
});

export default router;
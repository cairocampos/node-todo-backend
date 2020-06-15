const Task = require("../models/task");
module.exports = {
    async index(req,res) {
        const tasks = await Task.findAll();
        res.json(tasks);
    },
    async add(req,res){
        const {title,status,level} = req.body;

        try {
            const task = await Task.create({title, status,level});
            res.json(task);
        } catch (error) {
            res.json({error: error.parent.sqlMessage})
        }
    },
    async update(req,res){
        const {task_id} = req.params;
        const {title,status,level} = req.body;

        const task = await Task.findByPk(task_id);

        if(!task) return res.json({message: "Tarefa inexistente ou removida!"});

        await Task.update(
            {title, status, level},
            {where: {id: task_id}}
        ).then(async result => {
            if(result) {
                const taskUpdated = await Task.findByPk(task_id);
                res.json(taskUpdated);
            }
        })
    },
    async delete(req,res){
        const {task_id} = req.params;

        const task = await Task.findByPk(task_id);

        if(!task) return res.json({message: "Tarefa inexistente!"});

        await Task.destroy({
            where: {id: task_id}
        }).then(result => {
            if(result) {
                res.json({success:true})
            }
        })
    },
    async showOne(req,res) {
        const {task_id} = req.params;
        const task = await Task.findByPk(task_id);

        if(!task) res.json({message: "Tarefa inexistente!"})
        res.json(task);
    }
}
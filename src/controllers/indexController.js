import Task from '../models/Task'

const indexController = {}

indexController.renderIndex = async (req, res) => {
    const tasks = await Task.find().lean()
    // lean return list of objects tipics
    
    console.log(tasks)
    res.render('index', { tasks: tasks })
    
}

indexController.renderAbout = (req, res) => {
    res.render('about')
}

indexController.saveTask = async (req, res) => {
    const task = Task(req.body)
    await task.save()
    res.redirect('/')
}

indexController.renderEdit = (req, res) => {
    res.render('edit')
}

indexController.updateTask = async (req, res) => {

}

export default indexController


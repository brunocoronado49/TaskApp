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

indexController.renderEdit = async (req, res) => {
    const task = await Task.findById(req.params.id).lean()
    res.render('edit', { task: task })
}

indexController.updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
}

indexController.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

indexController.toggleDone = async (req, res) => {
    const task = await Task.findById(req.params.id)
    task.done = !task.done
    await task.save()
    res.redirect('/')
}

export default indexController

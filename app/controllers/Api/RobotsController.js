const baseController = require('./BaseController');
const Robot = require('../../collections/Robot');

class IndexController extends baseController {
    constructor() {
        super();
    }

    indexAction(req, res) {
        Robot.find((err, robots) => {
            if (err)
                this.jsonResponse(res, 400, { 'error': err });

            this.jsonResponse(res, 200, { 'robots': robots });
        });
    }

    createAction(req, res) {
        let robot = new Robot();
        robot.name = req.body.name;

        robot.save((err) => {
            if (err)
                this.jsonResponse(res, 400, { 'error': err });

            this.jsonResponse(res, 201, { 'message': 'Robot created!' });
        });
    }

    getOneAction(req, res) {
        Robot.findOne({name: req.params.id}, (err, robot) => {
            if (err)
                this.jsonResponse(res, 400, { 'error': err });

            this.jsonResponse(res, 200, { 'robot': robot });
        });
    }

    deleteAction(req, res) {
        Robot.remove({ _id: req.params.id }, (err, robot) => {
            if (err)
                this.jsonResponse(res, 400, { 'error': err });

            this.jsonResponse(res, 204, { 'message': 'Deleted successfully!' });
        });
    }
}

module.exports = new IndexController();

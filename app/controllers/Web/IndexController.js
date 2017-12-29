const baseController = require('./BaseController');
const Robot = require('../../collections/Robot');

class IndexController extends baseController {
    /**
     * Renders the Home page
     *
     * @param req
     * @param res
     */
    indexAction(req, res) {
        Robot.find((err, robots) => {
            if (err)
                res.send(err);

            res.render('index', this.mergePageConfig(req, {
                template: 'index/index',
                pageTitle: 'Home',
                robots: robots
            }));
        });
    }

    /**
     * Renders the 404 page
     *
     * @param req
     * @param res
     */
    notFoundAction(req, res) {
        res.render('index', this.mergePageConfig(req, {
            template: 'general/notfound',
            pageTitle: 'Not Found'
        }));
    }
}

module.exports = new IndexController();

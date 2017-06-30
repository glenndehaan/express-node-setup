const Robot = require('../../collections/Robot');

class IndexController {
    indexAction(req, res) {
        Robot.find((err, robots) => {
            if (err)
                res.send(err);

            res.render('index/index.ejs', {
                robots: robots
            });
        });
    }
}

module.exports = new IndexController();

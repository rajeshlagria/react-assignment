const postRoutes = require('./posts');


const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send({Status:200,Message: 'welcome to the development api-server'});
      });
    postRoutes(app, fs);
};

module.exports = appRouter;
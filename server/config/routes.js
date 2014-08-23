module.exports = function(app){

   // app.get('/templates/*', function(req, res) {
   //     res.render('../../public/app/templates' + req.params[0]);
   // });
    app.get('/', function(req, res) {
        res.render('index');
    });
};

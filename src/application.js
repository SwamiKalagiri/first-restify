import restify from 'restify';

function reply(req, res, next) {
    res.send('Hello ' + req.params.name);
    next();
}

var server = restify.createServer({
    name: 'first-restify'
});

server.get('/hello/:name', reply);

server.listen(8585, function () {
    console.log(server.name + ' server started..');
});

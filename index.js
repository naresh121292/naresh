module.exports = {
	configureProcessesToUse : configureProcessesToUse,
	log: log,
	getMemoryUsage: getMemoryUsage
}

var cluster = require('cluster');

function log(data){
	console.log(new Date() + " PID " + process.pid, data)
}
function getMemoryUsage(){
	return process.memoryUsage()
}
function configureProcessesToUse(cpus, port, app){
	if (cluster.isWorker) {
		var server = app.listen(port);
		
	  } else {
		for (var i = 0; i < parseInt(cpus); i++) {
		  cluster.fork();
	  }
	}
	cluster.on('fork', function(worker) {
		console.log('worker: ' + worker.id +" is forked");
	});
	cluster.on('online', function(worker) {
		console.log('worker: ' + worker.id +" is online");
	});
	cluster.on('listening', function(worker) {
		console.log('worker: ' + worker.id + " is listening");
	});
	cluster.on('disconnect', function(worker) {
		console.log('worker: ' + worker.id + " is disconnected");
	});
	cluster.on('exit', function(worker) {
		console.log('worker: ' + worker.id + " is dead");
		cluster.fork()
	});
}

var ConcreteReceiver = function () {};

ConcreteReceiver.prototype = new Receiver();
ConcreteReceiver.prototype.action = function (msg) {
	console.log(msg);
};
var ConcreteCommandA = function (id) {
    this.receiver = null;
    this.name     = 'A';
    this.id       = id;
};
ConcreteCommandA.prototype = new Command();

ConcreteCommandA.prototype.execute = function () {
    this.receiver.action(this.name + ' : ' + this.id);
};

ConcreteCommandA.prototype.setReceiver = function (receiver) {
    this.receiver = receiver;
};
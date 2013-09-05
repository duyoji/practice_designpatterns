var ConcreteCommandB = function (id) {
    this.receiver = null;
    this.name     = 'B';
    this.id       = id;
};
ConcreteCommandB.prototype = new Command();

ConcreteCommandB.prototype.execute = function () {
    this.receiver.action(this.name + ' : ' + this.id);
};

ConcreteCommandB.prototype.setReceiver = function (receiver) {
    this.receiver = receiver;
};
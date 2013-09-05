var Invoker = function () {
    this.commands = [];
};

Invoker.prototype.addCommand = function (command) {
    this.commands.push(command);
};

Invoker.prototype.undoCommand = function () {
    var command = this.commands.pop(command);
    console.log('削除された命令------');
    command.execute();
    console.log('------------------');
};

Invoker.prototype.execute = function () {
    var i, n, command; 
    for (i = 0, n = this.commands.length; i < n; i++) {
        command = this.commands[i];
        command.execute();
    }
};
var Client = function () {
    var COMMAND_COUNT = 5;

    // this.commandsA = [];
    // this.commandsB = [];
    this.receiver  = new ConcreteReceiver();
    this.invoker   = new Invoker();

    var i, id, command;
    for (i = 0; i < COMMAND_COUNT; i++) {
        id = i;
        command = new ConcreteCommandA(id);
        command.setReceiver(this.receiver);
        this.invoker.addCommand(command);
    }

    for (i = 0; i < COMMAND_COUNT; i++) {
        id = i;
        command = new ConcreteCommandB(id);
        command.setReceiver(this.receiver);
        this.invoker.addCommand(command);
    }

    this.invoker.execute();
    this.invoker.undoCommand();
    this.invoker.execute();
};

var client = new Client();
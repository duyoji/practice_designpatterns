var Command = function () {};

Command.prototype.execute = function () {
	throw new Error('サブクラスでexecute実装');
};

Command.prototype.setReceiver = function (receiver) {
	throw new Error('サブクラスでsetReceiver実装');
};
var Receiver = function () {};
Receiver.prototype.action = function (msg) {
	throw new Error('サブクラスでaction実装');
};
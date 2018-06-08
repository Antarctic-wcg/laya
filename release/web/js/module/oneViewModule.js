/**
* name
*/
var module;
(function (module) {
    var oneViewModule = /** @class */ (function () {
        function oneViewModule() {
            //字典数据
            this._data = [
                { id: 0, name: "字典1", exp: 0, current: true, zinum: 0, text: "一杯敬百合魂器", chouka: 0 },
                { id: 1, name: "字典2", exp: 0, current: false, zinum: 0, text: "一杯敬百合魂器", chouka: 0 },
                { id: 2, name: "字典3", exp: 0, current: false, zinum: 0, text: "一杯敬百合魂器", chouka: 0 },
                { id: 3, name: "字典4", exp: 0, current: false, zinum: 0, text: "一杯敬百合魂器", chouka: 0 },
                { id: 4, name: "字典5", exp: 0, current: false, zinum: 0, text: "一杯敬百合魂器", chouka: 0 }
            ];
        }
        //单例
        oneViewModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new oneViewModule;
            }
            return this._instance;
        };
        Object.defineProperty(oneViewModule.prototype, "dataContent", {
            get: function () {
                return this._data;
            },
            set: function (content) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(oneViewModule.prototype, "currentData", {
            //获取当前使用的字典
            get: function () {
                if (this._data) {
                    for (var i = 0; i < this._data.length; i++) {
                        if (this._data[i]["current"]) {
                            this._currentData = this._data[i];
                            return this._currentData;
                        }
                    }
                }
                return this._currentData = null;
            },
            enumerable: true,
            configurable: true
        });
        //更改当前字典经验
        oneViewModule.prototype.updataCurrentData = function (num) {
            if (this._data) {
                for (var i = 0; i < this._data.length; i++) {
                    if (this._data[i]["current"]) {
                        this._data[i]["exp"] += num;
                    }
                }
            }
        };
        //更改字典
        oneViewModule.prototype.updataDictionary = function (ID) {
            if (this._data) {
                for (var i = 0; i < this._data.length; i++) {
                    this._data[i]["current"] = false;
                }
                this._data[ID]["current"] = true;
            }
        };
        return oneViewModule;
    }());
    module.oneViewModule = oneViewModule;
})(module || (module = {}));
//# sourceMappingURL=oneViewModule.js.map
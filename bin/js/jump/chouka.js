var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* name
*/
var jump;
(function (jump) {
    var chouka = /** @class */ (function (_super) {
        __extends(chouka, _super);
        function chouka() {
            var _this = _super.call(this) || this;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.wu.visible = false;
            var obj = module.oneViewModule.getInstance().currentData;
            var arr = [];
            for (var i = 0; i < obj["chouka"]; i++) {
                arr.push({});
            }
            _this.list.array = arr;
            //this.on(Laya.Event.CLICK,this,this.onclick);
            if (obj["chouka"] <= 0) {
                _this.wu.visible = true;
                _this.on(Laya.Event.CLICK, _this, _this.onclick);
            }
            return _this;
        }
        chouka.prototype.renderHandler = function (item, index) {
            item.show(index);
        };
        chouka.prototype.onclick = function () {
            this.close();
        };
        return chouka;
    }(ui.choukaUI));
    jump.chouka = chouka;
})(jump || (jump = {}));
//# sourceMappingURL=chouka.js.map
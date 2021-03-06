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
    var updataHunJiDialog = /** @class */ (function (_super) {
        __extends(updataHunJiDialog, _super);
        function updataHunJiDialog() {
            var _this = _super.call(this) || this;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.returnButton.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.list.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.okBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.list.array = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
            return _this;
        }
        updataHunJiDialog.prototype.renderHandler = function (item, index) {
            item.show(index);
        };
        updataHunJiDialog.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.returnButton:
                    this.close();
                    break;
                case this.list:
                    this.list.array = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
                    break;
                case this.okBtn:
                    jump.oneView.getInstance().hunjiUpdata();
                    this.close();
                    break;
            }
        };
        return updataHunJiDialog;
    }(ui.updataHunJiDialogUI));
    jump.updataHunJiDialog = updataHunJiDialog;
})(jump || (jump = {}));
//# sourceMappingURL=updataHunJiDialog.js.map
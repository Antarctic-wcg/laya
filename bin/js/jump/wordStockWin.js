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
    var wordStockWin = /** @class */ (function (_super) {
        __extends(wordStockWin, _super);
        function wordStockWin() {
            var _this = _super.call(this) || this;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.list.array = module.oneViewModule.getInstance().ziNum;
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        wordStockWin.prototype.renderHandler = function (item, index) {
            item.show(index);
        };
        wordStockWin.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.returnBtn:
                    //关闭页面
                    this.close();
                    break;
            }
        };
        return wordStockWin;
    }(ui.wordStockWinUI));
    jump.wordStockWin = wordStockWin;
})(jump || (jump = {}));
//# sourceMappingURL=wordStockWin.js.map
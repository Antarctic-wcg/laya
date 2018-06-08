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
    var updataItem = /** @class */ (function (_super) {
        __extends(updataItem, _super);
        function updataItem() {
            return _super.call(this) || this;
        }
        //接受数据
        updataItem.prototype.show = function (index) {
            var arrData = this.dataSource;
            this.dictionary_text.text = arrData["name"];
            this.on(Laya.Event.CLICK, this, this.onclick);
        };
        updataItem.prototype.onclick = function () {
            module.oneViewModule.getInstance().updataDictionary(this.dataSource["id"]);
            jump.updataDictionary.closeAll();
            jump.oneView.getInstance().randerinit();
        };
        return updataItem;
    }(ui.updataItemUI));
    jump.updataItem = updataItem;
})(jump || (jump = {}));
//# sourceMappingURL=updataItem.js.map
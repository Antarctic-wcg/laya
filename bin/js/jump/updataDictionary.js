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
* 选择字典界面
*/
var jump;
(function (jump) {
    var updataDictionary = /** @class */ (function (_super) {
        __extends(updataDictionary, _super);
        function updataDictionary() {
            var _this = _super.call(this) || this;
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            //list数据
            _this.list.array = module.oneViewModule.getInstance().dataContent;
            var obj = module.oneViewModule.getInstance().currentData;
            _this.ZdicItem.expText.text = obj["chouka"] + "/" + 7;
            _this.ZdicItem.dictionary_text.text = obj["name"];
            _this.list.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.okBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        updataDictionary.prototype.updateData = function () {
        };
        updataDictionary.prototype.upDataInit = function () {
        };
        updataDictionary.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.returnBtn:
                    //关闭字典界面
                    this.close();
                    break;
                case this.list:
                    //重新加载数据
                    this.list.array = module.oneViewModule.getInstance().dataContent;
                    break;
                case this.okBtn:
                    //确认选择的字典
                    var dicnumder = module.oneViewModule.getInstance().dicnumber;
                    module.oneViewModule.getInstance().updataDictionary(dicnumder);
                    jump.updataDictionary.closeAll();
                    jump.oneView.getInstance().randerinit();
                    break;
            }
        };
        updataDictionary.prototype.onUpdata = function () {
        };
        //向updataItem传数据
        updataDictionary.prototype.renderHandler = function (item, index) {
            item.show(index);
        };
        return updataDictionary;
    }(ui.updataDictionaryUI));
    jump.updataDictionary = updataDictionary;
})(jump || (jump = {}));
//# sourceMappingURL=updataDictionary.js.map
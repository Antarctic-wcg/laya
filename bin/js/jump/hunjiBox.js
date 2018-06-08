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
    var hunjiBox = /** @class */ (function (_super) {
        __extends(hunjiBox, _super);
        function hunjiBox() {
            return _super.call(this) || this;
        }
        hunjiBox.prototype.show = function (index) {
            this.on(Laya.Event.CLICK, this, this.onclick, [index]);
            if (index != module.oneViewModule.getInstance().hunjiNum) {
                this.chooseImg.visible = false;
            }
            else {
                this.chooseImg.visible = true;
            }
        };
        hunjiBox.prototype.onclick = function (index) {
            module.oneViewModule.getInstance().hunjiNum = index;
        };
        return hunjiBox;
    }(ui.hunjiBoxUI));
    jump.hunjiBox = hunjiBox;
})(jump || (jump = {}));
//# sourceMappingURL=hunjiBox.js.map
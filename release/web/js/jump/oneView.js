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
* 主界面
*/
var jump;
(function (jump) {
    var oneView = /** @class */ (function (_super) {
        __extends(oneView, _super);
        function oneView() {
            var _this = _super.call(this) || this;
            _this.textrander = 0;
            var resArray = [
                { url: "res/atlas/comp.json", type: Laya.Loader.ATLAS }
            ];
            _this.dictionaryUpdata.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.miaoBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiBtn1.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiBtn2.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiBtn3.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.rewardBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.chou.on(Laya.Event.CLICK, _this, _this.onclick);
            var obj = module.oneViewModule.getInstance().currentData;
            _this.dicName.text = obj["name"];
            _this.expText.text = obj["exp"] + "/" + 50;
            _this.progressBar.x = -310 + obj["exp"] * 310 / 50;
            _this.rewardBtn.disabled = true;
            return _this;
        }
        oneView.prototype.init = function () {
            var obj = module.oneViewModule.getInstance().currentData;
            if (obj != null) {
                obj["exp"]++;
                if (obj["exp"] >= 50) {
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this.progressBar);
                    this.rewardBtn.disabled = false;
                }
                this.dicName.text = obj["name"];
                this.expText.text = obj["exp"] + "/" + 50;
                //this.progressBar.x = -272 + obj["exp"]*262/500;
            }
        };
        //切换字典刷新页面
        oneView.prototype.randerinit = function () {
            var obj = module.oneViewModule.getInstance().currentData;
            //Laya.timer.loop(100,this,this.randerinit);
            this.maobi.text = this.textrander + "";
            this.dicName.text = obj["name"];
            this.expText.text = obj["exp"] + "/" + 50;
            this.progressBar.x = -310 + obj["exp"] * 310 / 50;
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.progressBar);
            this.miaoBtn.mouseEnabled = true;
            if (obj["exp"] >= 50) {
                this.rewardBtn.disabled = false;
            }
        };
        oneView.getInstance = function () {
            if (this._instance == null) {
                this._instance = new oneView;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        oneView.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.dictionaryUpdata:
                    var panel = new jump.updataDictionary;
                    this.addChild(panel);
                    panel.popup(true, true);
                    break;
                case this.miaoBtn:
                    var obj = module.oneViewModule.getInstance().currentData;
                    var bubbling = new jump.BubblingItem;
                    this.addChild(bubbling);
                    bubbling.show();
                    //this.startLearn();
                    Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * obj["exp"]);
                    Laya.timer.loop(1000, this, this.init);
                    this.miaoBtn.mouseEnabled = false;
                    Laya.timer.once(1000, this, this.openBubbing, [bubbling]);
                    break;
                case this.hunjiBtn1:
                    var hunji = new jump.updataHunJiDialog;
                    this.addChild(hunji);
                    hunji.popup(true, true);
                    break;
                case this.hunjiBtn2:
                    var hunji = new jump.updataHunJiDialog;
                    this.addChild(hunji);
                    hunji.popup(true, true);
                    break;
                case this.hunjiBtn3:
                    var hunji = new jump.updataHunJiDialog;
                    this.addChild(hunji);
                    hunji.popup(true, true);
                    break;
                case this.rewardBtn:
                    var obj = module.oneViewModule.getInstance().currentData;
                    obj["exp"] = 0;
                    obj["chouka"] = obj["chouka"] + 1;
                    this.expText.text = obj["exp"] + "/" + 500;
                    this.progressBar.x = -310 + obj["exp"] * 310 / 50;
                    this.rewardBtn.disabled = true;
                    this.miaoBtn.mouseEnabled = true;
                    this.ani.play();
                    this.ani.on(Laya.Event.COMPLETE, this, this.removeAni);
                    break;
                case this.chou:
                    var chouka = new jump.chouka;
                    this.addChild(chouka);
                    chouka.popup(true, true);
                    break;
            }
        };
        oneView.prototype.removeAni = function () {
            this.ani.stop();
        };
        oneView.prototype.startLearn = function () {
            module.oneViewModule.getInstance().updataCurrentData(1);
        };
        oneView.prototype.openBubbing = function (bubbling) {
            bubbling.close();
        };
        oneView.getPopUp = function (popUp) {
            if (popUp == null) {
                return null;
            }
        };
        return oneView;
    }(ui.oneViewUI));
    jump.oneView = oneView;
})(jump || (jump = {}));
//# sourceMappingURL=oneView.js.map
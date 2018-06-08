// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.modes = "exactfit";
        Laya.init(640, 1132);
        Laya.stage.scaleMode = this.modes;
        Laya.stage.bgColor = "#ffcccc";
        var resArray = [
            { url: "res/atlas/comp.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/gameimg.json", type: Laya.Loader.ATLAS }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoader));
    }
    GameMain.prototype.onLoader = function () {
        //var view:oneView = new oneView;
        //Laya.stage.addChild(view);
        //var view:laya.ui.View = new jump.oneView;
        //Laya.stage.addChild(view);
        jump.oneView.getInstance();
        Laya.stage.renderingEnabled = true;
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map
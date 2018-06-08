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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BubblingItemUI = /** @class */ (function (_super) {
        __extends(BubblingItemUI, _super);
        function BubblingItemUI() {
            return _super.call(this) || this;
        }
        BubblingItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BubblingItemUI.uiView);
        };
        BubblingItemUI.uiView = { "type": "Dialog", "props": { "width": 100, "height": 50 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 23, "text": "学习", "fontSize": 26, "color": "#0378f8", "bold": true } }] };
        return BubblingItemUI;
    }(Dialog));
    ui.BubblingItemUI = BubblingItemUI;
})(ui || (ui = {}));
(function (ui) {
    var choukaUI = /** @class */ (function (_super) {
        __extends(choukaUI, _super);
        function choukaUI() {
            return _super.call(this) || this;
        }
        choukaUI.prototype.createChildren = function () {
            View.regComponent("jump.choukaClass", jump.choukaClass);
            _super.prototype.createChildren.call(this);
            this.createView(ui.choukaUI.uiView);
        };
        choukaUI.uiView = { "type": "Dialog", "props": { "width": 450, "height": 723 }, "child": [{ "type": "List", "props": { "y": 201, "x": 39, "width": 372, "var": "list", "vScrollBarSkin": "  ", "spaceX": 10, "height": 320 }, "child": [{ "type": "choukaClass", "props": { "y": 14, "x": 24, "var": "shuiji", "runtime": "jump.choukaClass", "renderType": "render" } }] }, { "type": "Label", "props": { "y": 333, "x": 149, "width": 152, "var": "wu", "text": "无卡抽", "height": 57, "fontSize": 50, "color": "#f4100d", "bold": true } }] };
        return choukaUI;
    }(Dialog));
    ui.choukaUI = choukaUI;
})(ui || (ui = {}));
(function (ui) {
    var choukaClassUI = /** @class */ (function (_super) {
        __extends(choukaClassUI, _super);
        function choukaClassUI() {
            return _super.call(this) || this;
        }
        choukaClassUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.choukaClassUI.uiView);
        };
        choukaClassUI.uiView = { "type": "View", "props": { "width": 100, "height": 150 }, "child": [{ "type": "Image", "props": { "y": 13, "x": 4, "width": 97, "skin": "comp/textclass.png", "height": 121 } }, { "type": "Label", "props": { "y": 47, "x": 17, "width": 64, "var": "text_cl", "text": "魂", "height": 43, "fontSize": 40, "color": "#af302e", "align": "center" } }, { "type": "Image", "props": { "y": 12, "x": 2, "var": "chuoImg", "skin": "comp/drawcard.png" } }] };
        return choukaClassUI;
    }(View));
    ui.choukaClassUI = choukaClassUI;
})(ui || (ui = {}));
(function (ui) {
    var hunjiBoxUI = /** @class */ (function (_super) {
        __extends(hunjiBoxUI, _super);
        function hunjiBoxUI() {
            return _super.call(this) || this;
        }
        hunjiBoxUI.prototype.createChildren = function () {
            View.regComponent("jump.hunjiBox", jump.hunjiBox);
            _super.prototype.createChildren.call(this);
            this.createView(ui.hunjiBoxUI.uiView);
        };
        hunjiBoxUI.uiView = { "type": "View", "props": { "width": 110, "runtime": "jump.hunjiBox", "height": 120 }, "child": [{ "type": "Image", "props": { "y": 12, "x": 10, "width": 89, "skin": "comp/bak.PNG", "height": 96 } }, { "type": "Image", "props": { "y": 12, "x": 11, "skin": "comp/hunjiitem.png" } }] };
        return hunjiBoxUI;
    }(View));
    ui.hunjiBoxUI = hunjiBoxUI;
})(ui || (ui = {}));
(function (ui) {
    var oneViewUI = /** @class */ (function (_super) {
        __extends(oneViewUI, _super);
        function oneViewUI() {
            return _super.call(this) || this;
        }
        oneViewUI.prototype.createChildren = function () {
            View.regComponent("jump.oneView", jump.oneView);
            _super.prototype.createChildren.call(this);
            this.createView(ui.oneViewUI.uiView);
        };
        oneViewUI.uiView = { "type": "View", "props": { "width": 640, "runtime": "jump.oneView", "height": 1136 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "top": 0, "skin": "gameimg/bg15.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 161, "x": 91, "skin": "gameimg/bg12.png" } }, { "type": "Image", "props": { "y": 4, "x": 341, "skin": "gameimg/icon1.png" } }, { "type": "Image", "props": { "width": 154, "top": 10, "skin": "gameimg/bg11.png", "right": 80, "height": 42 }, "child": [{ "type": "Label", "props": { "y": 2, "x": 2, "width": 151, "var": "maobi", "text": "100", "height": 35, "fontSize": 32, "color": "#010000", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 6, "x": 576, "skin": "gameimg/button1.png" } }, { "type": "Label", "props": { "y": 182, "x": 117, "width": 91, "var": "dicName", "text": "当前字典的名称", "height": 21, "fontSize": 16, "color": "#010000" } }, { "type": "Image", "props": { "width": 132, "var": "dictionaryUpdata", "top": 119, "skin": "comp/bak.PNG", "right": 23, "height": 35 }, "child": [{ "type": "Label", "props": { "y": 9, "x": 13, "width": 107, "text": "更换字典", "height": 21, "fontSize": 16, "color": "#010000", "align": "center" } }] }, { "type": "Image", "props": { "y": 650, "x": 256, "width": 111, "var": "miaoBtn", "skin": "gameimg/bg19.png", "height": 109 } }, { "type": "Image", "props": { "y": 613, "x": 0, "width": 226, "var": "hunjiBtn1", "skin": "gameimg/100.png", "height": 281 } }, { "type": "Image", "props": { "y": 735, "x": 163, "width": 256, "var": "hunjiBtn2", "skin": "gameimg/101.png", "height": 325 } }, { "type": "Image", "props": { "y": 609, "x": 400, "width": 253, "var": "hunjiBtn3", "skin": "gameimg/104.png", "height": 291 } }, { "type": "Image", "props": { "y": 510, "x": 139, "width": 310, "skin": "gameimg/bg14.png", "height": 24 } }, { "type": "Image", "props": { "y": 510, "x": 139, "width": 310, "skin": "gameimg/bg13.png", "height": 24 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 310, "var": "progressBar", "skin": "gameimg/bg13.png", "renderType": "mask", "height": 24 } }] }, { "type": "Image", "props": { "y": 762, "x": 256, "skin": "gameimg/bg20.png" } }, { "type": "Label", "props": { "y": 512, "x": 256, "width": 82, "var": "expText", "text": "50/100", "height": 17, "fontSize": 16, "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 504, "x": 466, "var": "rewardBtn", "skin": "gameimg/button2.png" }, "child": [{ "type": "Label", "props": { "y": 5, "x": -2, "width": 123, "text": "领取", "height": 41, "fontSize": 32, "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 1044, "x": 310, "width": 82, "var": "ziWin", "skin": "gameimg/button8.png", "height": 89 } }, { "type": "Image", "props": { "y": 1048, "x": 421, "width": 84, "var": "chou", "skin": "gameimg/button7.png", "height": 86 } }, { "type": "Image", "props": { "y": 1044, "x": 534, "var": "mallWin", "skin": "gameimg/button10.png" } }, { "type": "Animation", "props": { "y": 568, "x": 320, "var": "ani", "source": "Drawcard.ani", "autoPlay": false } }, { "type": "Label", "props": { "y": 509, "x": 58, "width": 54, "text": "进度", "height": 34, "fontSize": 26, "color": "#080000", "bold": true } }] };
        return oneViewUI;
    }(View));
    ui.oneViewUI = oneViewUI;
})(ui || (ui = {}));
(function (ui) {
    var updataDictionaryUI = /** @class */ (function (_super) {
        __extends(updataDictionaryUI, _super);
        function updataDictionaryUI() {
            return _super.call(this) || this;
        }
        updataDictionaryUI.prototype.createChildren = function () {
            View.regComponent("jump.updataItem", jump.updataItem);
            _super.prototype.createChildren.call(this);
            this.createView(ui.updataDictionaryUI.uiView);
        };
        updataDictionaryUI.uiView = { "type": "Dialog", "props": { "width": 450, "height": 723 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "comp/bg.png", "sizeGrid": "36,0,0,0", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 47, "x": 40, "skin": "comp/bak.PNG" }, "child": [{ "type": "Label", "props": { "y": 4, "x": 0, "width": 68, "text": "正在学习", "height": 19, "fontSize": 16, "color": "#0a0000", "align": "center" } }] }, { "type": "Image", "props": { "y": 202, "x": 39, "var": "aaa", "skin": "comp/bak.PNG" }, "child": [{ "type": "Label", "props": { "y": 4, "x": 0, "width": 68, "text": "其他字典", "height": 19, "fontSize": 16, "color": "#0a0000", "align": "center" } }] }, { "type": "List", "props": { "y": 248, "x": 38, "width": 372, "var": "list", "vScrollBarSkin": "  ", "height": 414 }, "child": [{ "type": "updataItem", "props": { "y": 8, "x": 1, "var": "dicItem", "runtime": "jump.updataItem", "renderType": "render" } }] }, { "type": "updataItem", "props": { "y": 78, "x": 32, "var": "ZdicItem", "runtime": "jump.updataItem" } }] };
        return updataDictionaryUI;
    }(Dialog));
    ui.updataDictionaryUI = updataDictionaryUI;
})(ui || (ui = {}));
(function (ui) {
    var updataHunJiDialogUI = /** @class */ (function (_super) {
        __extends(updataHunJiDialogUI, _super);
        function updataHunJiDialogUI() {
            return _super.call(this) || this;
        }
        updataHunJiDialogUI.prototype.createChildren = function () {
            View.regComponent("jump.hunjiBox", jump.hunjiBox);
            _super.prototype.createChildren.call(this);
            this.createView(ui.updataHunJiDialogUI.uiView);
        };
        updataHunJiDialogUI.uiView = { "type": "Dialog", "props": { "width": 450, "height": 723 }, "child": [{ "type": "Image", "props": { "y": 48, "x": 25, "width": 400, "skin": "comp/bg.png", "sizeGrid": "34,0,11,0", "height": 573 } }, { "type": "List", "props": { "y": 86, "x": 52, "width": 347, "var": "list", "vScrollBarSkin": "  ", "spaceX": 10, "height": 514 }, "child": [{ "type": "hunjiBox", "props": { "var": "hunjiItem", "runtime": "jump.hunjiBox", "renderType": "render" } }] }, { "type": "Button", "props": { "y": 655, "x": 28, "width": 75, "var": "returnButton", "skin": "comp/button.png", "labelStrokeColor": "1", "labelSize": 16, "label": "返回", "height": 30 } }] };
        return updataHunJiDialogUI;
    }(Dialog));
    ui.updataHunJiDialogUI = updataHunJiDialogUI;
})(ui || (ui = {}));
(function (ui) {
    var updataItemUI = /** @class */ (function (_super) {
        __extends(updataItemUI, _super);
        function updataItemUI() {
            return _super.call(this) || this;
        }
        updataItemUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.updataItemUI.uiView);
        };
        updataItemUI.uiView = { "type": "View", "props": { "width": 370, "height": 120 }, "child": [{ "type": "Image", "props": { "y": 13, "x": 7, "width": 73, "skin": "comp/dir.png", "height": 91 } }, { "type": "Image", "props": { "y": 14, "x": 94, "width": 266, "skin": "comp/bak.PNG", "height": 53 }, "child": [{ "type": "Label", "props": { "y": 6, "x": 6, "width": 256, "var": "dictionary_text", "text": "字典说明", "height": 44 } }] }, { "type": "Image", "props": { "y": 79, "x": 94, "width": 263, "skin": "comp/bak.PNG", "height": 28 } }, { "type": "Image", "props": { "y": 79, "x": 94, "width": 263, "skin": "comp/bak.PNG", "height": 28, "gray": true }, "child": [{ "type": "Image", "props": { "y": 0, "x": -142, "width": 273, "skin": "comp/bak.PNG", "renderType": "mask" } }] }, { "type": "Label", "props": { "y": 84, "x": 186, "width": 82, "var": "expText", "text": "50/100", "height": 17, "fontSize": 16, "color": "#000000", "align": "center" } }] };
        return updataItemUI;
    }(View));
    ui.updataItemUI = updataItemUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map
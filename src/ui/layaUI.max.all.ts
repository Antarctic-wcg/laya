
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BubblingItemUI extends Dialog {

        public static  uiView:any ={"type":"Dialog","props":{"width":100,"height":50},"child":[{"type":"Label","props":{"y":12,"x":23,"text":"学习","fontSize":26,"color":"#0378f8","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BubblingItemUI.uiView);

        }

    }
}

module ui {
    export class choukaUI extends Dialog {
		public list:Laya.List;
		public shuiji:jump.choukaClass;
		public wu:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":450,"height":723},"child":[{"type":"List","props":{"y":201,"x":39,"width":372,"var":"list","vScrollBarSkin":"  ","spaceX":10,"height":320},"child":[{"type":"choukaClass","props":{"y":14,"x":24,"var":"shuiji","runtime":"jump.choukaClass","renderType":"render"}}]},{"type":"Label","props":{"y":333,"x":149,"width":152,"var":"wu","text":"无卡抽","height":57,"fontSize":50,"color":"#f4100d","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("jump.choukaClass",jump.choukaClass);

            super.createChildren();
            this.createView(ui.choukaUI.uiView);

        }

    }
}

module ui {
    export class choukaClassUI extends View {
		public text_cl:Laya.Label;
		public chuoImg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":150},"child":[{"type":"Image","props":{"y":13,"x":4,"width":97,"skin":"comp/textclass.png","height":121}},{"type":"Label","props":{"y":47,"x":17,"width":64,"var":"text_cl","text":"魂","height":43,"fontSize":40,"color":"#af302e","align":"center"}},{"type":"Image","props":{"y":12,"x":2,"var":"chuoImg","skin":"comp/drawcard.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.choukaClassUI.uiView);

        }

    }
}

module ui {
    export class hunjiBoxUI extends View {
		public chooseImg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":180,"runtime":"jump.hunjiBox","height":190},"child":[{"type":"Image","props":{"y":14,"x":13,"skin":"gameimg/bg6.png"}},{"type":"Image","props":{"y":14,"x":13,"var":"chooseImg","skin":"gameimg/bg7.png"}},{"type":"Label","props":{"y":137,"x":12,"width":151,"text":"角色的名字","height":24,"fontSize":24,"bold":true,"align":"center"}},{"type":"Image","props":{"y":15,"x":129,"skin":"gameimg/bg8.png"}},{"type":"Label","props":{"y":18,"x":134,"text":"荐","fontSize":24}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("jump.hunjiBox",jump.hunjiBox);

            super.createChildren();
            this.createView(ui.hunjiBoxUI.uiView);

        }

    }
}

module ui {
    export class oneViewUI extends View {
		public maobi:Laya.Label;
		public dicName:Laya.Label;
		public dictionaryUpdata:Laya.Image;
		public miaoBtn:Laya.Image;
		public hunjiImg:Laya.Image;
		public hunjiBtn2:Laya.Image;
		public hunjiBtn3:Laya.Image;
		public hunjiBtn1:Laya.Image;
		public diImg:Laya.Image;
		public progressBar:Laya.Image;
		public expText:Laya.Label;
		public rewardBtn:Laya.Image;
		public ziWin:Laya.Image;
		public chou:Laya.Image;
		public mallWin:Laya.Image;
		public ani:Laya.Animation;

        public static  uiView:any ={"type":"View","props":{"width":640,"runtime":"jump.oneView","height":1136},"child":[{"type":"Image","props":{"y":0,"x":0,"top":0,"skin":"gameimg/bg15.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":161,"x":91,"skin":"gameimg/bg12.png"}},{"type":"Image","props":{"y":4,"x":341,"skin":"gameimg/icon1.png"}},{"type":"Image","props":{"width":154,"top":10,"skin":"gameimg/bg11.png","right":80,"height":42},"child":[{"type":"Label","props":{"y":2,"x":2,"width":151,"var":"maobi","text":"100","height":35,"fontSize":32,"color":"#010000","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":6,"x":576,"skin":"gameimg/button1.png"}},{"type":"Label","props":{"y":182,"x":117,"width":91,"var":"dicName","text":"当前字典的名称","height":21,"fontSize":16,"color":"#010000"}},{"type":"Image","props":{"width":132,"var":"dictionaryUpdata","top":119,"skin":"comp/bak.PNG","right":23,"height":35},"child":[{"type":"Label","props":{"y":9,"x":13,"width":107,"text":"更换字典","height":21,"fontSize":16,"color":"#010000","align":"center"}}]},{"type":"Image","props":{"y":527,"x":208,"width":226,"var":"miaoBtn","skin":"gameimg/100.png","height":281}},{"type":"Image","props":{"y":576,"x":-22,"width":256,"visible":false,"var":"hunjiImg","skin":"gameimg/101.png","height":325}},{"type":"Image","props":{"y":773,"x":111,"width":256,"var":"hunjiBtn2","skin":"gameimg/101.png","height":325}},{"type":"Image","props":{"y":674,"x":406,"width":253,"var":"hunjiBtn3","skin":"gameimg/104.png","height":291}},{"type":"Image","props":{"y":741,"x":48,"width":111,"var":"hunjiBtn1","skin":"gameimg/bg19.png","height":109}},{"type":"Image","props":{"y":853,"x":48,"var":"diImg","skin":"gameimg/bg20.png"}},{"type":"Image","props":{"y":510,"x":139,"width":310,"skin":"gameimg/bg14.png","height":24}},{"type":"Image","props":{"y":510,"x":139,"width":310,"skin":"gameimg/bg13.png","height":24},"child":[{"type":"Image","props":{"y":0,"x":0,"width":310,"var":"progressBar","skin":"gameimg/bg13.png","renderType":"mask","height":24}}]},{"type":"Label","props":{"y":512,"x":256,"width":82,"var":"expText","text":"50/100","height":17,"fontSize":16,"color":"#000000","align":"center"}},{"type":"Image","props":{"y":504,"x":466,"var":"rewardBtn","skin":"gameimg/button2.png"},"child":[{"type":"Label","props":{"y":5,"x":-2,"width":123,"text":"领取","height":41,"fontSize":32,"bold":true,"align":"center"}}]},{"type":"Image","props":{"y":1044,"x":310,"width":82,"var":"ziWin","skin":"gameimg/button8.png","height":89}},{"type":"Image","props":{"y":1048,"x":421,"width":84,"var":"chou","skin":"gameimg/button7.png","height":86}},{"type":"Image","props":{"y":1044,"x":534,"var":"mallWin","skin":"gameimg/button10.png"}},{"type":"Animation","props":{"y":568,"x":320,"var":"ani","source":"Drawcard.ani","autoPlay":false}},{"type":"Label","props":{"y":509,"x":58,"width":54,"text":"进度","height":34,"fontSize":26,"color":"#080000","bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("jump.oneView",jump.oneView);

            super.createChildren();
            this.createView(ui.oneViewUI.uiView);

        }

    }
}

module ui {
    export class updataDictionaryUI extends Dialog {
		public list:Laya.List;
		public dicItem:jump.updataItem;
		public ZdicItem:jump.updataItem;
		public returnBtn:Laya.Image;
		public okBtn:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"y":0,"x":-2,"width":640,"height":1136},"child":[{"type":"Image","props":{"top":0,"skin":"gameimg/bg16.png","sizeGrid":"36,0,0,0","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":106,"x":33,"width":608,"skin":"gameimg/bg1.png","sizeGrid":"142,0,59,0","height":875}},{"type":"Label","props":{"y":228,"x":53,"width":111,"text":"当前学习","height":30,"fontSize":26,"color":"#0a0000","bold":true,"align":"center"}},{"type":"Label","props":{"y":428,"x":53,"width":116,"text":"其他字典","height":29,"fontSize":26,"color":"#0a0000","bold":true,"align":"center"}},{"type":"List","props":{"y":454,"x":39,"width":559,"var":"list","vScrollBarSkin":"  ","spaceY":15,"height":491},"child":[{"type":"updataItem","props":{"y":8,"x":1,"var":"dicItem","runtime":"jump.updataItem","renderType":"render"}}]},{"type":"updataItem","props":{"y":260,"x":42,"var":"ZdicItem","runtime":"jump.updataItem"}},{"type":"Image","props":{"y":221,"x":72,"width":488,"skin":"gameimg/bg5.png","height":2}},{"type":"Image","props":{"y":1058,"x":122,"width":174,"var":"returnBtn","skin":"gameimg/button5.png","pivotY":33,"pivotX":88,"height":62},"child":[{"type":"Label","props":{"y":12,"x":2,"width":169,"text":"返回","height":33,"fontSize":34,"color":"#000000","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":1052,"x":515,"width":174,"var":"okBtn","skin":"gameimg/button4.png","pivotY":29,"pivotX":88,"height":62},"child":[{"type":"Label","props":{"y":12,"x":2,"width":169,"text":"确认","height":33,"fontSize":34,"color":"#000000","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("jump.updataItem",jump.updataItem);

            super.createChildren();
            this.createView(ui.updataDictionaryUI.uiView);

        }

    }
}

module ui {
    export class updataHunJiDialogUI extends Dialog {
		public returnButton:Laya.Image;
		public okBtn:Laya.Image;
		public list:Laya.List;
		public hunjiItem:jump.hunjiBox;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"top":0,"skin":"gameimg/bg16.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":110,"x":29,"width":608,"skin":"gameimg/bg1.png","sizeGrid":"142,0,59,0","height":875}},{"type":"Image","props":{"y":1054,"x":124,"width":174,"var":"returnButton","skin":"gameimg/button5.png","pivotY":33,"pivotX":88,"height":62},"child":[{"type":"Label","props":{"y":12,"x":2,"width":169,"text":"返回","height":33,"fontSize":34,"color":"#000000","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":1050,"x":511,"width":174,"var":"okBtn","skin":"gameimg/button4.png","pivotY":29,"pivotX":88,"height":62},"child":[{"type":"Label","props":{"y":12,"x":2,"width":169,"text":"确认","height":33,"fontSize":34,"color":"#000000","bold":true,"align":"center"}}]},{"type":"List","props":{"y":234,"x":48,"width":569,"var":"list","vScrollBarSkin":"  ","height":714},"child":[{"type":"hunjiBox","props":{"var":"hunjiItem","runtime":"jump.hunjiBox","renderType":"render"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("jump.hunjiBox",jump.hunjiBox);

            super.createChildren();
            this.createView(ui.updataHunJiDialogUI.uiView);

        }

    }
}

module ui {
    export class updataItemUI extends View {
		public dicName:Laya.Label;
		public dictionary_text:Laya.Label;
		public expText:Laya.Label;
		public chooseImg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":530,"height":160},"child":[{"type":"Label","props":{"y":1,"x":151,"var":"dicName","text":"名字","fontSize":26,"color":"#000000","bold":true,"align":"left"}},{"type":"Label","props":{"y":30,"x":154,"width":367,"var":"dictionary_text","text":"字典说明","height":86,"fontSize":22}},{"type":"Label","props":{"y":126,"x":36,"width":78,"var":"expText","text":"50/100","height":22,"fontSize":18,"color":"#000000","align":"center"}},{"type":"Image","props":{"y":2,"x":12,"width":118,"skin":"gameimg/bg3.png","height":116}},{"type":"Image","props":{"y":155,"x":29,"width":496,"skin":"gameimg/bg5.png","height":2}},{"type":"Image","props":{"y":2,"x":12,"visible":false,"var":"chooseImg","skin":"gameimg/bg2.png"}},{"type":"Image","props":{"y":14,"x":31,"skin":"gameimg/icon2.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.updataItemUI.uiView);

        }

    }
}

module ui {
    export class wordStockWinUI extends Dialog {
		public returnBtn:Laya.Image;
		public list:Laya.List;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":10,"x":10,"top":0,"skin":"gameimg/bg16.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":107,"x":33,"width":608,"skin":"gameimg/bg1.png","sizeGrid":"142,0,59,0","height":875}},{"type":"Image","props":{"y":1051,"x":128,"width":174,"var":"returnBtn","skin":"gameimg/button5.png","pivotY":33,"pivotX":88,"height":62},"child":[{"type":"Label","props":{"y":12,"x":2,"width":169,"text":"返回","height":33,"fontSize":34,"color":"#000000","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":1047,"x":515,"width":174,"skin":"gameimg/button4.png","pivotY":29,"pivotX":88,"height":62},"child":[{"type":"Label","props":{"y":12,"x":2,"width":169,"text":"分享","height":33,"fontSize":34,"color":"#000000","bold":true,"align":"center"}}]},{"type":"List","props":{"y":246,"x":55,"width":569,"var":"list","vScrollBarSkin":"  ","spaceY":19,"spaceX":13,"height":682},"child":[{"type":"ziItem","props":{"runtime":"jump.ziItem","renderType":"render"}}]},{"type":"Image","props":{"y":224,"x":69,"width":497,"skin":"gameimg/bg5.png","height":2}},{"type":"Image","props":{"y":931,"x":69,"width":497,"skin":"gameimg/bg5.png","height":2}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("jump.ziItem",jump.ziItem);

            super.createChildren();
            this.createView(ui.wordStockWinUI.uiView);

        }

    }
}

module ui {
    export class ziItemUI extends View {
		public chooseImg:Laya.Image;
		public zi:Laya.Label;
		public ziNum:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"y":1,"x":3,"skin":"gameimg/bg3.png"}},{"type":"Image","props":{"y":1,"x":3,"var":"chooseImg","skin":"gameimg/bg2.png"}},{"type":"Image","props":{"y":7,"x":9,"skin":"gameimg/bg4.png"}},{"type":"Label","props":{"y":20,"x":19,"var":"zi","text":"字","fontSize":80,"color":"#000000","bold":true,"align":"center"}},{"type":"Label","props":{"y":88,"x":7,"width":102,"var":"ziNum","text":"10","height":22,"fontSize":22,"align":"right"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ziItemUI.uiView);

        }

    }
}

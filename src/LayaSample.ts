// 程序入口
class GameMain{
    private modes:string = "exactfit";
    constructor()
    {
        Laya.init(640,1132);
        Laya.stage.scaleMode = this.modes;
        Laya.stage.bgColor = "#ffcccc";
        var resArray:Array<any>=[
            {url:"res/atlas/comp.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/gameimg.json",type:Laya.Loader.ATLAS}
        ];

        Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoader));
    }
    
    

    onLoader():void{
         //var view:oneView = new oneView;
         //Laya.stage.addChild(view);
         //var view:laya.ui.View = new jump.oneView;
         //Laya.stage.addChild(view);
         jump.oneView.getInstance();
         Laya.stage.renderingEnabled = true;

    }
    
}
new GameMain();

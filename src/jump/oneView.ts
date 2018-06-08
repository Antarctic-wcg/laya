/**
* 主界面 
*/
module jump{
	export class oneView extends ui.oneViewUI{
		private _exptimer:Laya.Timer;
		private static _instance:oneView;
		constructor(){
          super();
		  var resArray:Array<any>=[
            {url:"res/atlas/comp.json",type:Laya.Loader.ATLAS}
          ];
		  this.dictionaryUpdata.on(Laya.Event.CLICK,this,this.onclick);
		  this.miaoBtn.on(Laya.Event.CLICK,this,this.onclick);
		  this.hunjiBtn1.on(Laya.Event.CLICK,this,this.onclick);	
		  this.hunjiBtn2.on(Laya.Event.CLICK,this,this.onclick);
		  this.hunjiBtn3.on(Laya.Event.CLICK,this,this.onclick);
		  this.rewardBtn.on(Laya.Event.CLICK,this,this.onclick);
		  this.ziWin.on(Laya.Event.CLICK,this,this.onclick);
		  this.chou.on(Laya.Event.CLICK,this,this.onclick);
		  this.hunjiImg.on(Laya.Event.CLICK,this,this.onclick);
		  
		  var obj:Object = module.oneViewModule.getInstance().currentData;
		  this.dicName.text = obj["name"];
		  this.expText.text = obj["exp"]+"/"+50;
		  this.progressBar.x = -310 + obj["exp"]*310/50;
		  this.rewardBtn.disabled =true;

		}

		public init():void
		{
			var obj:Object = module.oneViewModule.getInstance().currentData;

			if(obj !=null)
			{
				obj["exp"]++;
				if(obj["exp"]>=5)
				{
					Laya.timer.clearAll(this);
					Laya.Tween.clearAll(this.progressBar);
					this.rewardBtn.disabled = false;
				}
				this.dicName.text = obj["name"];
			    this.expText.text = obj["exp"]+"/"+50;
				
				//this.progressBar.x = -272 + obj["exp"]*262/500;
			}
		}

		private textrander:number =0;
		//切换字典刷新页面
		public randerinit():void
		{
			var obj:Object = module.oneViewModule.getInstance().currentData;
			//Laya.timer.loop(100,this,this.randerinit);
			this.maobi.text = this.textrander+"";
			this.dicName.text = obj["name"];
			this.expText.text = obj["exp"]+"/"+50;
			this.progressBar.x = -310 + obj["exp"]*310/50;
			Laya.timer.clearAll(this);
			Laya.Tween.clearAll(this.progressBar);
			this.miaoBtn.mouseEnabled = true;
			if(obj["exp"]>=5)
			{
				this.rewardBtn.disabled = false;
			}
		}

		public static getInstance():oneView
		{
			if(this._instance == null)
			{
				this._instance = new oneView;
				Laya.stage.addChild(this._instance);
			}
			return this._instance;
		}



		private onclick(event:Laya.Event):void
		{
			 switch(event.currentTarget){
			 case this.dictionaryUpdata:
			      var panel:laya.ui.Dialog = new jump.updataDictionary;
				  this.addChild(panel);
				  panel.show();
			      break;
		     case this.miaoBtn:
			      var obj:Object = module.oneViewModule.getInstance().currentData;
			      var bubbling:laya.ui.Dialog = new jump.BubblingItem;
				  this.addChild(bubbling);
				  bubbling.show();
				  //this.startLearn();
				  Laya.Tween.to(this.progressBar,{x:0},50000-1000*obj["exp"]);
				  Laya.timer.loop(1000,this,this.init);
				  this.miaoBtn.mouseEnabled = false;
				  
				  Laya.timer.once(1000,this,this.openBubbing,[bubbling]);
				  break;
			case this.hunjiBtn1:
			     var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 this.addChild(hunji);
				 hunji.show();
				 break;
			case this.hunjiImg:
			     var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				 this.addChild(hunji);
				 hunji.show();
				 break;
			case this.hunjiBtn2:
			    //  var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				//  this.addChild(hunji);
				//  hunji.popup(true,true);
				 break;
			case this.hunjiBtn3:
			    //  var hunji:laya.ui.Dialog = new jump.updataHunJiDialog;
				//  this.addChild(hunji);
				//  hunji.popup(true,true);
				 break;
		    case this.rewardBtn:
			     var obj:Object = module.oneViewModule.getInstance().currentData;
				 obj["exp"] = 0;
				 obj["chouka"] = obj["chouka"]+1;
				 this.expText.text = obj["exp"]+"/"+500;
				 this.progressBar.x = -310 + obj["exp"]*310/50;
				 this.rewardBtn.disabled = true;
				 this.miaoBtn.mouseEnabled = true;
			     this.ani.play();
				 this.ani.on(Laya.Event.COMPLETE,this,this.removeAni);
			     break;
		   case this.chou:
		        var chouka:laya.ui.Dialog = new jump.chouka;
				this.addChild(chouka);
				chouka.popup(true,true);
				break;
		   case this.ziWin:
		        var chouka:laya.ui.Dialog = new jump.wordStockWin;
				this.addChild(chouka);
				chouka.popup(true,true);
				break;
			 }	 
		}
        public hunjiUpdata():void
		{
			this.hunjiBtn1.visible = false;
			this.diImg.visible = false;
            this.hunjiImg.visible = true;
		}


		private removeAni():void
		{
			this.ani.stop();
		}

		private startLearn():void
		{
			module.oneViewModule.getInstance().updataCurrentData(1);
		}

		private openBubbing(bubbling:laya.ui.Dialog):void
		{
			bubbling.close();
		}

		public static getPopUp(popUp:any):laya.ui.View
        {
            if(popUp==null)
            {
                return null;
            }
        }
			
	}
}

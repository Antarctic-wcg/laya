/**
* name 
*/
module jump{
	export class wordStockWin extends ui.wordStockWinUI{
		constructor(){
			super();
			this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
			this.list.array = module.oneViewModule.getInstance().ziNum;
			this.returnBtn.on(Laya.Event.CLICK,this,this.onclick);
		}

		private renderHandler(item:ziItem,index:number):void
		{
			item.show(index);
		}

		private onclick(event:Laya.Event):void
		{
			switch(event.currentTarget){
				case this.returnBtn:
				     //关闭页面
				     this.close();
					 break;
			}
		}
	}
}
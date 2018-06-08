/**
* name 
*/
module jump{
	export class updataHunJiDialog extends ui.updataHunJiDialogUI{
		constructor(){
			super();
			this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
			this.returnButton.on(Laya.Event.CLICK,this,this.onclick);
            this.list.on(Laya.Event.CLICK,this,this.onclick);
			this.okBtn.on(Laya.Event.CLICK,this,this.onclick);
			this.list.array = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
			
		}
		private renderHandler(item:hunjiBox,index:number):void
		{
			item.show(index);
		}

		private onclick(event:Laya.Event):void
		{
			switch(event.currentTarget){
				case this.returnButton:
				     this.close();
					 break;
				case this.list:
				     this.list.array = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
					 break;
			    case this.okBtn:
				     jump.oneView.getInstance().hunjiUpdata();
					 this.close();
					 break;
			}
		}
	}
}
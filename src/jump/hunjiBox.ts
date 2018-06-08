/**
* name 
*/
module jump{
	export class hunjiBox extends ui.hunjiBoxUI{
		constructor(){
			super();

		}
		public show(index:number):void
		{
			this.on(Laya.Event.CLICK,this,this.onclick,[index]);
			if(index != module.oneViewModule.getInstance().hunjiNum)
			{
				this.chooseImg.visible = false;
			}else
			{
				this.chooseImg.visible = true;
			}
		}

		private onclick(index:number):void
		{
			module.oneViewModule.getInstance().hunjiNum = index;
		}
	}
}
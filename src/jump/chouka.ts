/**
* name 
*/
module jump{
	export class chouka extends ui.choukaUI{
		constructor(){
			super();
			this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
			this.wu.visible = false;
			var obj:Object = module.oneViewModule.getInstance().currentData;
			var arr:Array<Object> = [];

			for(var i:number =0;i< obj["chouka"];i++){
				arr.push({});
			}
			this.list.array =  arr;
			//this.on(Laya.Event.CLICK,this,this.onclick);
			if(obj["chouka"] <=0)
			{
				this.wu.visible = true;
				this.on(Laya.Event.CLICK,this,this.onclick);
			}
		}

		
		private renderHandler(item:choukaClass,index:number):void
        {
			item.show(index);
        }

		private onclick():void
		{
			this.close();
		}
	}
}
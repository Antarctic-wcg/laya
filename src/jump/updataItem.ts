/**
* name 
*/
module jump{
	export class updataItem extends ui.updataItemUI{
		constructor(){
			super();

		}

        //接受数据
		public show(index:number):void
		{
			var arrData:Object = this.dataSource;
		    this.dicName.text = arrData["name"];
			this.on(Laya.Event.CLICK,this,this.onclick,[index]);
			if(index != module.oneViewModule.getInstance().dicnumber)
			{
				this.chooseImg.visible = false;
			}else
			{
				this.chooseImg.visible = true;
			}

		}

		private onclick(index:number):void
		{
			module.oneViewModule.getInstance().dicnumber = index;
			
			// module.oneViewModule.getInstance().updataDictionary(this.dataSource["id"]);
			// jump.updataDictionary.closeAll();
			// jump.oneView.getInstance().randerinit();
			
		}
	}
}
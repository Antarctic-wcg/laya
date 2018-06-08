/**
* 选择字典界面 
*/
module jump{
	export class updataDictionary extends ui.updataDictionaryUI{
		constructor(){
        super();
		this.returnBtn.on(Laya.Event.CLICK,this,this.onclick);
		this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
		//list数据
		this.list.array = module.oneViewModule.getInstance().dataContent;
		var obj:Object = module.oneViewModule.getInstance().currentData;
		this.ZdicItem.expText.text = obj["chouka"]+"/"+7;
		this.ZdicItem.dictionary_text.text = obj["name"];
		this.list.on(Laya.Event.CLICK,this,this.onclick);
		this.okBtn.on(Laya.Event.CLICK,this,this.onclick);
	    }


		 public updateData():void
        {
            
        }
		private upDataInit():void
		{
			
		}



		private onclick(event:Laya.Event):void
		{
			switch(event.currentTarget){
				case this.returnBtn:
				     //关闭字典界面
			         this.close();
				     break;
				case this.list:
				     //重新加载数据
				     this.list.array = module.oneViewModule.getInstance().dataContent;
				     break;
				case this.okBtn:
				     //确认选择的字典
				     var dicnumder = module.oneViewModule.getInstance().dicnumber;
				     module.oneViewModule.getInstance().updataDictionary(dicnumder);
					 jump.updataDictionary.closeAll();
					 jump.oneView.getInstance().randerinit(); 
				     break;
			}
		}

		private onUpdata():void
		{

		}

		//向updataItem传数据
		private renderHandler(item:updataItem,index:number):void
        {
			item.show(index);
        }
	}
}
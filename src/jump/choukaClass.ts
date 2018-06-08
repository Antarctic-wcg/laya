/**
* name 
*/
module jump{
	export class choukaClass extends ui.choukaClassUI{
		constructor(){
			super();
		}

		//接受数据
		public show(index:number):void
		{
			var arrData:Object = this.dataSource;
			this.on(Laya.Event.CLICK,this,this.onclick);
		}

		private onclick():void
		{
			var obj:Object = module.oneViewModule.getInstance().currentData;
			var a:number = Math.floor(Math.random()*7)
			var str:string = String(obj["text"]);
			var zi:string= str.slice(a,a+1);
			this.chuoImg.visible = false;
			this.text_cl.text = zi;
			this.mouseEnabled = false;
			obj["chouka"]--;
			module.oneViewModule.getInstance().ziku(zi);
		}
	}
}
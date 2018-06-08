/**
* name 
*/
module jump{
	export class ziItem extends ui.ziItemUI{
		constructor(){
			super();
		}

		public show(index:number):void
		{
			this.chooseImg.visible = false;
			var obj = this.dataSource;
			this.zi.text = obj["ziName"];
			this.ziNum.text = obj["num"];
		}
	}
}
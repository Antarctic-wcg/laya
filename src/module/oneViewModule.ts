/**
* name 
*/
module module{
	export class oneViewModule{
		private static _instance:oneViewModule;
		//字典数据
		private _data:Array<Object> = [
			 {id:0,name:"字典1",exp: 0,current:true,zinum:0,text:"一杯敬百合魂器",chouka:0}
			,{id:1,name:"字典2",exp: 0,current:false,zinum:0,text:"一杯敬百合魂器",chouka:0}
			,{id:2,name:"字典3",exp: 0,current:false,zinum:0,text:"一杯敬百合魂器",chouka:0}
			,{id:3,name:"字典4",exp: 0,current:false,zinum:0,text:"一杯敬百合魂器",chouka:0}
			,{id:4,name:"字典5",exp: 0,current:false,zinum:0,text:"一杯敬百合魂器",chouka:0}
			];
		//当前使用的字典数据
		private _currentData:Object;
		//当前选择字典
		private _dicnumber:number;
		//选择魂姬
		private _hunjiNum:number;
		//字数量
		private _ziNum:Array<Object> =[];
		constructor(){
			
		}
        
		//单例
		public static getInstance():oneViewModule
		{
			if(this._instance == null)
			{
				this._instance = new oneViewModule;
			}
			return this._instance;
		}

        //获取所有字典数据
		public get dataContent():Array<Object>
		{
			return this._data;
		}


	
		public set dataContent(content:Array<Object>)
		{
			
		}

        //获取当前使用的字典
        public get currentData():Object
		{
			if(this._data)
			{
				for(var i:number =0;i<this._data.length;i++){
					if(this._data[i]["current"])
					{
						this._currentData = this._data[i];
						return this._currentData;
					}
				}
			}
			return this._currentData =null;
			
		}

		//更改当前字典经验
		public updataCurrentData(num:number):void
		{
             if(this._data)
			 {
				 for(var i:number =0;i<this._data.length;i++){
					if(this._data[i]["current"])
					{
						this._data[i]["exp"] += num;
					}
				}
			 }
		}

		//更改字典
		public updataDictionary(ID:number):void
		{
			if(this._data && ID !=undefined)
			{
				for(var i:number = 0;i<this._data.length;i++)
				{
					this._data[i]["current"] = false;
				}
				this._data[ID]["current"] = true;
				
			}
		}

        //获取抽到的字体
		public ziku(str:string):void
		{
			if(this._ziNum.length <= 0)
			{
				this._ziNum.push({ziName:str,num:1});
			}else
			{
				for(var i:number =0; i<this._ziNum.length;i++){
					var a = this._ziNum[i]["ziName"];
					if(this._ziNum[i]["ziName"] ==str)
					{
						this._ziNum[i]["num"]++;
						return;
					}
				}
				this._ziNum.push({ziName:str,num:1});
				return;
			}
		}

		public get ziNum():Array<Object>
		{
			return this._ziNum;
		}

		

		public get dicnumber():number
		{
			return this._dicnumber;
		}

		public set dicnumber(index:number)
		{
			this._dicnumber = index;
		}

		public get hunjiNum():number
		{
			return this._hunjiNum;
		}

		public set hunjiNum(index:number)
		{
			this._hunjiNum = index;
		}

	}
}
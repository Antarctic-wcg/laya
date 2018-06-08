
module util {

	export class StringUtil{
		/**
		 * 格式化数字，在前边不足位补零
		 * 类似 7 => 07
		 * @param n 要格式化的数字。
		 * @param count 要显示几位。
		 * @return 
		 */		
		public static formatNumberWithZero(n:number, count:number = 0):string{
			if ( (<string><any> n).length>=count )
				return <string><any> n;
			
			var str:string = "";
			for ( var i:number=count; i>0; i-- ){
				str += "0";
			}
			str += n;
			return str.substr(str.length-count);
		}
		
		/**
		 * 用指定的字符替换#1,#2,#3...<br/>
		 * 用##代替#号
		 * @param str
		 * @param arg
		 * @return 
		 * 
		 */		
		public static replaceWidthPoundSign(input:string,...arg):string{
			if ( !input )
				return "";
			var arr:Array<any> = input.split("#");
			var str:string = <string><any> (arr[0]);
			var matchArr:Array<any>;
			var i:number = 0;
			var len:number = arr.length;
			for ( i=1; i<len; i++ ){
				//如果#号后没有字符了，此#号不转义
				if ( i>=len ){
					str += "#";
					break;
				}
				//如果#号后是#号，转义为#
				if ( arr[i]=="" ){
					str += "#"+arr[i+1];
					i++;
					continue;
				}
				
				matchArr = (<string><any> (arr[i])).match(/^(\this.d*)/);
				//#号后没有数字，此#号不转义
				if ( !matchArr ){
					str += "#"+arr[i];
					continue;
				}
				var numStr:string = <string><any> (matchArr[1]);
				while ( <number><any> numStr>arg.length ){
					numStr = numStr.substr(0,numStr.length-1);
				}
				str += arg[<number><any> numStr-1] + (<string><any> (arr[i])).substr(numStr.length);
			}
			return str;
		}
		 /**
		  * 替换指定位置字符 
		  * @param char
		  * @param value
		  * @param beginIndex
		  * @param endIndex
		  * @return 
		  * 
		  */		
		 public static replaceAt(char:string, value:string, beginIndex:number, endIndex:number = 0):string {   
			 beginIndex = Math.max(beginIndex, 0);              
			 endIndex = Math.min(endIndex, char.length);   
			 var firstPart:string = char.substr(0, beginIndex);   
			 var secondPart:string = char.substr(endIndex, char.length);   
			return (firstPart + value + secondPart);   
		 }  
		
		/**
		 * 将数字格式化为三位一组的格式，如123456789 -> 123,456,789
		 * @param n
		 * @param sign 间隔用的字符，默认为半角的逗号。
		 * @return 
		 */		
		public static replaceWithComma(n:number, sign:string=","):string{
			var nStr:string = <string><any> n;
			var arr:Array<any> = nStr.split(".");
			//小数点前边
			var leftArr:Array<any> = (<string><any> (arr[0])).split("");
			var firstLeft:number = leftArr.length%3==0?3:leftArr.length%3;
			var leftStr:string = (<string><any> (arr[0])).substr(0, firstLeft);
			var i:number = 0;
			var len:number = leftArr.length;
			for ( i=firstLeft; i<len; i+=3 ){
				leftStr += sign+leftArr[i]+leftArr[i+1]+leftArr[i+2];
			}
			//小数点后边
			if ( arr.length>=2 ){
				var rightArr:Array<any> = (<string><any> (arr[1])).split("");
				var rightStr:string = "";
				len = rightArr.length;
				for ( i=0; i<len; i+=3 ){
					if ( i!=0 )
						rightStr += sign;
					rightStr += rightArr[i];
					if ( i+1<len )
						rightStr += rightArr[i+1];
					if ( i+2<len )
						rightStr += rightArr[i+2];
				}
				return leftStr+"."+rightStr;
			}
			return leftStr;
		}
		
		/**
		 * 删除字串里的HTML代码。
		 * @param str
		 * @return 
		 */		
		public static removeHTML(str:string):string{
			return str.replace(/\<[^\>]{1,}\>/gi,"");
		}
		
		/**
		 * 取字串右起若干个字符
		 * @param str
		 * @param length
		 * @return 
		 * 
		 */		
		public static right(str:string, length:number = 0):string{
			if ( str.length<=length )
				return str;
			return str.substr(str.length-length);
		}
		
		/**
		 * 快速检测是否是数字字符串 
		 * @param str
		 * @return 
		 * 
		 */		
		public static fastCheckIsNumber(str:string):boolean{
			if(!str)
				return false;
			
			var index:number = 0;
			if(str.charAt(index) == "-")
				index++;
			str = str.toUpperCase();
			var is16:boolean = (str.charAt(index+1) == "X");
			var code0:number = "0".charCodeAt(0);
			var codeA:number = "A".charCodeAt(0);
			
			if(is16)
				index+=2;
			var n:number = str.length;
			var code:number = 0;
			for(var i:number=index; i<n; i++){
				code = str.charAt(i).charCodeAt(0);
				if((code>=code0 && code<code0+10) || (is16 && code>=codeA && code<codeA+6)){
					continue;
				}
				
				return false;
			}
			
			return true;
		}


		/**
		 * 格式化字串
		 * @param source 原始字符串 eg. "hell$1world"
		 * @param obj  长度最大为9, 指针从1开始
		 * @return 替换后的字符串
		 */		
		public static formatStr(source:string, ...obj):string
		{
			var i:number=0;
			for(i=0;i<obj.length;i++)
			{
				source = source.replace("$"+(i+1),obj[i]);
			}
			return source;
		}

		/**
		 * 去掉全部空格
		 */
		public static repBlank(str:string,rep:string = ""):string
		{
			var pattern:RegExp = /[\s\p{Zs}]/g;
			return str.replace(pattern,rep);
		}

		/**
		 * 去左右空格
		 * @param char 去除左右空格的字符串
		 * @return 返回去除后的字符串
		 */	
		public static trim(char:string):string {
			if (char == null) {
				return null;
			}
			return StringUtil.rtrim(StringUtil.ltrim(char));
		}
		
		/**
		 * 去左空格
		 * @param char 去除左空格的字符串
		 * @return 返回去除后的字符串
		 */	
		public static ltrim(char:string):string {
			if (char == null) {
				return null;
			}
			var pattern:RegExp = /^\this.s*/;
			return char.replace(pattern , "");
		}
		
		/**
		 * 去右空格
		 * @param char 去除右空格的字符串
		 * @return 返回去除后的字符串
		 */	
		public static rtrim(char:string):string {
			if (char == null) {
				return null;
			}
			var pattern:RegExp = /\this.s*this.$/;
			return char.replace(pattern , "");
		}
	}
}
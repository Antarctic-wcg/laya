var util;
(function (util) {
    var StringUtil = /** @class */ (function () {
        function StringUtil() {
        }
        /**
         * 格式化数字，在前边不足位补零
         * 类似 7 => 07
         * @param n 要格式化的数字。
         * @param count 要显示几位。
         * @return
         */
        StringUtil.formatNumberWithZero = function (n, count) {
            if (count === void 0) { count = 0; }
            if (n.length >= count)
                return n;
            var str = "";
            for (var i = count; i > 0; i--) {
                str += "0";
            }
            str += n;
            return str.substr(str.length - count);
        };
        /**
         * 用指定的字符替换#1,#2,#3...<br/>
         * 用##代替#号
         * @param str
         * @param arg
         * @return
         *
         */
        StringUtil.replaceWidthPoundSign = function (input) {
            var arg = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                arg[_i - 1] = arguments[_i];
            }
            if (!input)
                return "";
            var arr = input.split("#");
            var str = (arr[0]);
            var matchArr;
            var i = 0;
            var len = arr.length;
            for (i = 1; i < len; i++) {
                //如果#号后没有字符了，此#号不转义
                if (i >= len) {
                    str += "#";
                    break;
                }
                //如果#号后是#号，转义为#
                if (arr[i] == "") {
                    str += "#" + arr[i + 1];
                    i++;
                    continue;
                }
                matchArr = (arr[i]).match(/^(\this.d*)/);
                //#号后没有数字，此#号不转义
                if (!matchArr) {
                    str += "#" + arr[i];
                    continue;
                }
                var numStr = (matchArr[1]);
                while (numStr > arg.length) {
                    numStr = numStr.substr(0, numStr.length - 1);
                }
                str += arg[numStr - 1] + (arr[i]).substr(numStr.length);
            }
            return str;
        };
        /**
         * 替换指定位置字符
         * @param char
         * @param value
         * @param beginIndex
         * @param endIndex
         * @return
         *
         */
        StringUtil.replaceAt = function (char, value, beginIndex, endIndex) {
            if (endIndex === void 0) { endIndex = 0; }
            beginIndex = Math.max(beginIndex, 0);
            endIndex = Math.min(endIndex, char.length);
            var firstPart = char.substr(0, beginIndex);
            var secondPart = char.substr(endIndex, char.length);
            return (firstPart + value + secondPart);
        };
        /**
         * 将数字格式化为三位一组的格式，如123456789 -> 123,456,789
         * @param n
         * @param sign 间隔用的字符，默认为半角的逗号。
         * @return
         */
        StringUtil.replaceWithComma = function (n, sign) {
            if (sign === void 0) { sign = ","; }
            var nStr = n;
            var arr = nStr.split(".");
            //小数点前边
            var leftArr = (arr[0]).split("");
            var firstLeft = leftArr.length % 3 == 0 ? 3 : leftArr.length % 3;
            var leftStr = (arr[0]).substr(0, firstLeft);
            var i = 0;
            var len = leftArr.length;
            for (i = firstLeft; i < len; i += 3) {
                leftStr += sign + leftArr[i] + leftArr[i + 1] + leftArr[i + 2];
            }
            //小数点后边
            if (arr.length >= 2) {
                var rightArr = (arr[1]).split("");
                var rightStr = "";
                len = rightArr.length;
                for (i = 0; i < len; i += 3) {
                    if (i != 0)
                        rightStr += sign;
                    rightStr += rightArr[i];
                    if (i + 1 < len)
                        rightStr += rightArr[i + 1];
                    if (i + 2 < len)
                        rightStr += rightArr[i + 2];
                }
                return leftStr + "." + rightStr;
            }
            return leftStr;
        };
        /**
         * 删除字串里的HTML代码。
         * @param str
         * @return
         */
        StringUtil.removeHTML = function (str) {
            return str.replace(/\<[^\>]{1,}\>/gi, "");
        };
        /**
         * 取字串右起若干个字符
         * @param str
         * @param length
         * @return
         *
         */
        StringUtil.right = function (str, length) {
            if (length === void 0) { length = 0; }
            if (str.length <= length)
                return str;
            return str.substr(str.length - length);
        };
        /**
         * 快速检测是否是数字字符串
         * @param str
         * @return
         *
         */
        StringUtil.fastCheckIsNumber = function (str) {
            if (!str)
                return false;
            var index = 0;
            if (str.charAt(index) == "-")
                index++;
            str = str.toUpperCase();
            var is16 = (str.charAt(index + 1) == "X");
            var code0 = "0".charCodeAt(0);
            var codeA = "A".charCodeAt(0);
            if (is16)
                index += 2;
            var n = str.length;
            var code = 0;
            for (var i = index; i < n; i++) {
                code = str.charAt(i).charCodeAt(0);
                if ((code >= code0 && code < code0 + 10) || (is16 && code >= codeA && code < codeA + 6)) {
                    continue;
                }
                return false;
            }
            return true;
        };
        /**
         * 格式化字串
         * @param source 原始字符串 eg. "hell$1world"
         * @param obj  长度最大为9, 指针从1开始
         * @return 替换后的字符串
         */
        StringUtil.formatStr = function (source) {
            var obj = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                obj[_i - 1] = arguments[_i];
            }
            var i = 0;
            for (i = 0; i < obj.length; i++) {
                source = source.replace("$" + (i + 1), obj[i]);
            }
            return source;
        };
        /**
         * 去掉全部空格
         */
        StringUtil.repBlank = function (str, rep) {
            if (rep === void 0) { rep = ""; }
            var pattern = /[\s\p{Zs}]/g;
            return str.replace(pattern, rep);
        };
        /**
         * 去左右空格
         * @param char 去除左右空格的字符串
         * @return 返回去除后的字符串
         */
        StringUtil.trim = function (char) {
            if (char == null) {
                return null;
            }
            return StringUtil.rtrim(StringUtil.ltrim(char));
        };
        /**
         * 去左空格
         * @param char 去除左空格的字符串
         * @return 返回去除后的字符串
         */
        StringUtil.ltrim = function (char) {
            if (char == null) {
                return null;
            }
            var pattern = /^\this.s*/;
            return char.replace(pattern, "");
        };
        /**
         * 去右空格
         * @param char 去除右空格的字符串
         * @return 返回去除后的字符串
         */
        StringUtil.rtrim = function (char) {
            if (char == null) {
                return null;
            }
            var pattern = /\this.s*this.$/;
            return char.replace(pattern, "");
        };
        return StringUtil;
    }());
    util.StringUtil = StringUtil;
})(util || (util = {}));
//# sourceMappingURL=StringUtil.js.map
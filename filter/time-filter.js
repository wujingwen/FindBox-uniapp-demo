/**
 * 时间相关的过滤器
 */
export default {
    /**
     * 将秒数转化为时间格式
     * @param {*} value 
     */
    timeFormat (value = 0) {
        let theTime = parseInt(value);// 秒
        let theTime1 = 0;// 分
        let theTime2 = 0;// 小时
        // alert(theTime);
        if(theTime > 60) {
            theTime1 = parseInt(theTime/60);
            theTime = parseInt(theTime%60);
            // alert(theTime1+"-"+theTime);
            if(theTime1 > 60) {
                theTime2 = parseInt(theTime1/60);
                theTime1 = parseInt(theTime1%60);
            }
        }
        let result = ""+parseInt(theTime)+"s";
        if(theTime1 > 0) {
            result = ""+parseInt(theTime1)+"m"+result;
        }
        if(theTime2 > 0) {
            result = ""+parseInt(theTime2)+"h"+result;
        }
        return result;
    },

    /**
     * 转换为日期格式
     * @param {*} date 
     * @param {*} format 
     */
    dateFormat (date = 0, format) {
        if (/\d{13}/.test(date)) { date = date - 0 };
        let dateObj = new Date(date);
        let o = {
            "M+" : dateObj.getMonth()+1, //month
            "d+" : dateObj.getDate(),    //day
            "h+" : dateObj.getHours(),   //hour
            "m+" : dateObj.getMinutes(), //minute
            "s+" : dateObj.getSeconds(), //second
            "q+" : Math.floor((dateObj.getMonth()+3)/3),  //quarter
            "S" : dateObj.getMilliseconds() //millisecond
        };
    
        if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (dateObj.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(let k in o){
            if(new RegExp("("+ k +")").test(format))
                format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
        }
        return format;
    }
}
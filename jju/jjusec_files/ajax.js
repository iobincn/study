//创建XMLHTTP对象
function createXMLHttpRequest()
{
		var xmlhttp = null;
    try{
	   		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	   }
	   catch(e)
	   {
		   try{
		          xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		      }
		      catch(e)
		      {
						   try{
						          xmlhttp = new XMLHttpRequest();
						      }catch(e){
						    }
		      }
	  }
    return xmlhttp;
}  

//请求链接
//url: 请求地址
//fun：回调函数
function startRequest(url, fun,xmlhttp)
{
    xmlhttp.onreadystatechange  =  fun;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}

//获得xml子节点
//father：父节点
//name：子节点名称
//如果获得则返回节点，没有则返回null
function getXmlChild(father, name)
{
    var es = father.getElementsByTagName(name);
    if(es.length == 0)
        return null;
    else
        return es[0];
}

String.prototype.trim　= function()       
{       
    // 用正则表达式将前后空格       
    // 用空字符串替代。       
    var t = this.replace(/(^\s*)|(\s*$)/g, "");     
    return t.replace(/(^　*)|(　*$)/g, "");     
}

//获得xml节点值
//father：父节点
//name：子节点名称
//defaultvalue：默认值
//如果获得则返回节点值，没有则返回defaultvalue
function getXmlData(father, name, defaultvalue)
{
    var es = father.getElementsByTagName(name);
    if(es.length == 0)
        return defaultvalue;
    else if(es[0].firstChild == null)
        return defaultvalue;
    else
   	{
   			for(var i=0;i<es[0].childNodes.length;i++){ 
            var node = es[0].childNodes[i];
            if(node.nodeValue != null && node.nodeValue.trim() !="")
            {
            	return node.nodeValue;	
            }
        }
        return defaultvalue;
    }
}



//把"转换为&quot;
function escapeForValue(str)
{
    return str.replace(/\"/g, "&quot;");
}

//用来实现文章的计数
function getClickTimes(newsid, owner,type,randomid) { 
    var url = '/system/resource/code/news/click/clicktimes.jsp'; 
    if(!type) type="wbnews";
    if(!randomid)
    {
    	 randomid="n";
    }else 
  	{
  		randomid="n"+randomid;
  	}
    //var pars = 'wbnewsid='+newsid+'&owner='+owner+'&type='+type+'&randomid='+randomid; 
    /*var myAjax = new Ajax.Request( 
        url, { method: 'get',
               parameters: pars,
               onComplete: onGetClickTimes
        });*/ 
    $.post(
    	url,
    	{
    		wbnewsid:newsid,
    		owner:owner,
    		type:type,
    		randomid:randomid
    	},
    	function(date)
    	{
    		if(date.wbnewsid != null && date.wbshowtimes != null)
	        {
	            var objs = document.getElementsByTagName("span"); 
	            var objid =date.randomid+date.wbnewsid;
	            for(i=0;i<objs.length;i++)
	            {
	                if(objid==objs[i].id)
	                   objs[i].innerHTML= date.wbshowtimes; 
	            }
	        }
    	},
    	"json"
    );
} 
function _getBatchClickTimes(newsid, owner,type,randomid) { 
    var url = '/system/resource/code/news/click/batchclicktimes.jsp'; 
    if(!type) type="wbnews";
    if(!randomid)
    {
    	 randomid="n";
    }else 
  	{
  		randomid="n"+randomid;
  	}
  	var wbnewsids = newsid.split(",");

  	var isshow = true;
    for(var i = 0; i < wbnewsids.length; i++)
    {
    		var obj = document.getElementById(randomid+wbnewsids[i]);
    		if(obj == null)
    		      return;
    }
    if(isshow)
    {
		  	/**
		  	 * var pars = 'wbnewsid='+newsid+'&owner='+owner+'&type='+type+'&randomid='+randomid; 
		  	var myAjax = new Ajax.Request( 
		        url, { method: 'get', 
		               parameters: pars, 
		               onComplete: _onGetBatchClickTimes
		        });
		        */
		    $.post(
            url,
            {
                wbnewsid:newsid,
                owner:owner,
                type:type,
                randomid:randomid
            },
            function(datas)
            {
            	if(!datas)
            	{
            		return;
            	}
            	for(var i=0;i<datas.length;i++)
            	{
            	   var data = datas[i];
            	   if(data.wbnewsid != null && data.clicktime != null)
                    {
                        var objid =data.randomid+data.wbnewsid;
                        var spanobj = document.getElementById(objid);
                        if(spanobj)
                        {
                            $(spanobj).text(data.clicktime);
                        }
                    }
            	}
            },
            "json"
        );    
    }
} 

//用来实现文章的计数
function _onGetBatchClickTimes(originalRequest) 
{
    var str = new String(originalRequest.responseText); 
    var params = str.toQueryParams();
    if(params != null)
    {
    		var wbnewsids = params["wbnewsid"].split(",");
    		var showtimes = params["wbshowtimes"].split(",");

        if(wbnewsids != null && showtimes != null)
        {
        		for(var i = 0; i < wbnewsids.length; i++)
        		{
		            var objid =params["randomid"]+wbnewsids[i];
								var spanobj = document.getElementsByName(objid);
								if(spanobj.length > 0)
								{
										for(var j=0; j<spanobj.length;j++)
										{
												spanobj[j].innerHTML = showtimes[i];
										}	
								}
          	}
        }	
    }
}
//用来实现文章的计数
function onGetClickTimes(originalRequest) 
{
    var str = new String(originalRequest.responseText); 
    var params = str.toQueryParams();
    if(params != null)
    {
        if(params["wbnewsid"] != null && params["wbshowtimes"] != null)
        {
            var objs = document.getElementsByTagName("span"); 
            var objid =params["randomid"]+params["wbnewsid"];
            for(i=0;i<objs.length;i++)
            {
                if(objid==objs[i].id)
                   objs[i].innerHTML= params["wbshowtimes"]; 
            }
            //$(params["randomid"]+params["wbnewsid"]).innerHTML= params["wbshowtimes"]; 
        }	
    }
}
function addClickTimes(urlid,owner,type){
		var url = '/system/resource/code/news/click/addclicktimes.jsp'; 
    var pars = 'wburlid='+urlid+'&owner='+owner+'&type='+type; 
    var myAjax = new Ajax.Request( 
        url, { method: 'get', 
               parameters: pars, 
               onComplete: function(){}
        }); 
} 
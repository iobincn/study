function  tgetAbsTop(e)   
{   
    var   t=e.offsetTop;     
    while(e=e.offsetParent)   
        t += e.offsetTop;
    return t;   
}

function  tgetAbsLeft(e)   
{   
    var   t=e.offsetLeft;     
    while(e=e.offsetParent)   
        t += e.offsetLeft;
    return t;   
}

function tshowLayers(i,obj, uqid)
{
    var aa = document.getElementById("a"+uqid+i);
    var t = tgetAbsTop(aa);
    var l = tgetAbsLeft(aa);
    setFocusClass(aa, obj, uqid);
    var lay = document.getElementById("layer" + uqid + i);
    if(lay != null)
    {
        if(lay.style.visibility=="hidden")
            lay.style.visibility="visible"
        else if(lay.style.display=="none")
            lay.style.display="";
        var layl = l + Math.max(aa.clientWidth/2 - lay.clientWidth/2, 0);
    	if(eval("isvertical" + uqid) != true && eval("showfix" + uqid) == 0)
    	{
                lay.style.top = t - lay.clientHeight + 1;
                lay.style.left = layl;
        }
        else if(eval("isvertical" + uqid) != true)
        {
            lay.style.top = t + aa.clientHeight;
            lay.style.left = layl;
        }
    }
}

function setFocusClass(aa, obj, uqid)
{
    aa.className=obj;
    if(aa.className == "b1" + uqid)
      changeNavSpansStyle(vsbFixgetNodes(aa.childNodes).getElementsByTagName("SPAN"), "s10" + uqid);
    else if(aa.className == "b2" + uqid)
      changeNavSpansStyle(vsbFixgetNodes(aa.childNodes).getElementsByTagName("SPAN"), "s1" + uqid);        
    else if(aa.className == "b3" + uqid)
      changeNavSpansStyle(vsbFixgetNodes(aa.childNodes).getElementsByTagName("SPAN"), "s20" + uqid);          
    else if(aa.className == "b4" + uqid)
      changeNavSpansStyle(vsbFixgetNodes(aa.childNodes).getElementsByTagName("SPAN"), "s2" + uqid);          
}  

function tshow(i,obj, obj1,uqid)
{
    var aa = document.getElementById("a"+uqid+i);
    setFocusClass(aa, obj, uqid);
    var lay = document.getElementById("layer" + uqid + i);
    if(lay != null)
    {
        lay.style.visibility ="visible";
        if(eval("isvertical" + uqid) != true && eval("showfix" + uqid) == 0)
        {
            if(obj1.clientTop != undefined)
                lay.style.top = obj1.offsetTop + obj1.clientHeight - lay.clientHeight;
        }
    }
}

function tshowLayer(i,obj, uqid)
{
    var aa = document.getElementById("a"+uqid+i);
    var bb = document.getElementById("a"+uqid+"1005");
    var w = document.getElementById("t1"+uqid).clientWidth;
    var cc = document.getElementById("t1"+uqid);
    var t = tgetAbsTop(aa);
    var l = tgetAbsLeft(cc);
    setFocusClass(aa, obj, uqid);
    var lay = document.getElementById("layer" + uqid + i);
    if(lay != null)
    {
        if(lay.style.visibility=="hidden")
            lay.style.visibility="visible"
        else if(lay.style.display=="none")
            lay.style.display="";
        var layl = l + Math.max(aa.clientWidth/2 - lay.clientWidth/2, 0);
    	if(eval("isvertical" + uqid) != true && eval("showfix" + uqid) == 0)
    	{
                lay.style.top = (t - lay.clientHeight + 1) + "px";
                lay.style.left = layl + "px";
        }
        else if(eval("isvertical" + uqid) != true)
        {
            lay.style.top = (t + aa.clientHeight) + "px";
            lay.style.left = layl + "px";
            lay.style.width = w + "px";
        }
    }
}

function tshownull(i,obj, uqid)
{
    var aa = document.getElementById("a"+uqid+i);
    setFocusClass(aa, obj, uqid);
   
    var lay = document.getElementById("layer" + uqid + i);
    if(lay != null)
    {
        if(lay.style.visibility=="hidden")
            lay.style.visibility="visible"
        else if(lay.style.display=="none")
            lay.style.display='';
    }
}

function thideLayers(i,obj, uqid,isshowstyle)
{
    if(isshowstyle=="true")
    {
        var aa = document.getElementById("a"+uqid+i);
        setFocusClass(aa, obj, uqid);
    }
    
    var lay = document.getElementById("layer" + uqid + i);
    if(lay != null)
    {
        if(lay.style.visibility=="visible")
            lay.style.visibility="hidden"
        else if(lay.style.display=="")
            lay.style.display='none';
    }
}
//修改ff获取节点方法
function vsbFixgetNodes(childNode)
{
    
    for(var i=0;i<childNode.length;i++)
    {
        if(childNode[i].nodeType==1)
        {
            return childNode[i];
        }        
    }
    return childNode[0];
}

//文字导航script脚本
function TOVT(src, clrOver, uqid)
{
    changeNavSpansStyle(vsbFixgetNodes(src.childNodes).getElementsByTagName("SPAN"), "s2" + uqid);    
    src.className = clrOver;
}

function changeNavSpansStyle(objArray, className)
{
    for(i = 0; i < objArray.length; i ++)
    {
        objArray[i].className = className;
    }
}


function TOUT(src, clrIn, uqid)
{
    changeNavSpansStyle(vsbFixgetNodes(src.childNodes).getElementsByTagName("SPAN"), "s20" + uqid);          
    src.className = clrIn;
}
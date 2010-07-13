FK = {};
FK.urlprefix = "";
FK.iframe_el = document.getElementById("J_play_bottom");
FK.deal = function(u){
    var ut = u.substr(u.indexOf("#")+1).split("&") , uv = {};
    for(var i = 0, m = ut.length; i<m; i++){
        uv[ut[i].split("=")[0]] = ut[i].split("=")[1];
    }
    if(uv.action == "setheight"){
        FK.iframe_el.height = uv.height;
    }
};


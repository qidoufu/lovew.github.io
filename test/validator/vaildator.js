//匿名函数的调用
(function(root,facotry,plug){
 return facotry(root.jQuery,plug);
})(window,function($,plug){
    var __DEFS__={
        trigger:"change"
    };
    //规则引擎
    var __RULES__={
        required:function(){
            return this.val()!==""
        },
        regex:function(){
            console.log(this.data("dv-regex"));
             return new RegExp(this.data("dv-regex")).test(this.val());
            
        },
        email:function(){
            return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.val());
        },
        greaterthan:function(){
            return Number(this.val())<Number(this.data("dv-greaterthan"))
        },
        lessthan:function(){
           return Number(this.val())>Number(this.data("dv-lessthan"))
     }
    }
    $.fn[plug]=function(options){
       $.extend(this,__DEFS__,options);
       var $fileds=this.find("input").not("[type=button]","[type=submiit]","[type=reset]","[type=radio]");
       $fileds.on(this.trigger,function(){
           var $filed=$(this);
           var result=true;
           $filed.next().remove();
           $.each(__RULES__,function(rule,valider){
              if($filed.data("dv-"+rule)){
                  result=valider.call($filed);
                  if(!result){
                      $filed.after("<p>"+$filed.data("dv-"+rule+"-messege")+"</p>");
                      console.log("<p>"+$filed.data("dv-"+rule+"-messege")+"</p>");
                  }
                  return result;
              }
           })
       });
    }
},
"wwvoildator")
//TODO: Please write code in this file.
function printReceipt(inputs) {
   var  receipt='';
   var  items=getCount(inputs);
   var  newitems=getSubTotals(items);
   var  total=getSum(newitems);
   
    for(var i=0;i<newitems.length;i++)
   {
      receipt+="名称："+newitems[i].item.name+"，"
      +"数量："+newitems[i].count+newitems[i].item.unit+"，" 
      +"单价："+newitems[i].item.price.toFixed(2)+"(元)"+"，"
      +"小计："+newitems[i].total.toFixed(2)+"(元)"+"\n";
   }
   console.log("***<没钱赚商店>收据***"+"\n"+receipt+"----------------------"+"\n"+"总计："+total.toFixed(2)+"(元)"+"\n"+"**********************");
}



   function getCount(inputs){
      var  items=[];

     for(var i=0;i<inputs.length;i++)
      {
         var counter=1;
         if(inputs[i].barcode!=-1)
         {
            for(var j=i+1;j<inputs.length;j++)
             if(inputs[i].barcode===inputs[j].barcode)
             {
                counter++;
                inputs[j].barcode=-1;
             }
             items.push({item:inputs[i],count:counter});
         }

      }
   
   return items;
 }


function getSubTotals(items){
   for(var i=0;i<items.length;i++)
   {
       var subTotal=items[i].item.price*items[i].count;
       items[i].total=subTotal;
   }
   return  items;
 }

function  getSum(items){
   var sum=0;
   for(var i=0;i<items.length;i++)
   {
       sum+=items[i].total;
   }
   return sum;
}



     

      


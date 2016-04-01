//TODO: Please write code in this file.
function printReceipt(inputs)
 {
   var receipt='';
   var newitems = getSubtotals(inputs);
   var sum = getTotalprice(newitems);
   for(var i=0;i<newitems.length;i++)
   {
      receipt+="名称："+newitems[i].item.name+"，"+"数量："+newitems[i].item.count+newitems[i].item.unit+"，"+"单价："+newitems[i].item.price.toFixed(2)+"(元)"+"，"+"小计："+newitems[i].total.toFixed(2)+"(元)"+"\n";
   }
  
  console.log("***<没钱赚商店>收据***"+"\n"+receipt+"----------------------"+"\n"+"总计："+sum.toFixed(2)+"(元)"+"\n"+"**********************");
  
}
   function getSubtotals(inputs)
  {
   var newitems=[];
   for(var i=0;i<inputs.length;i++)
    { 
      var subtotal=inputs[i].count*inputs[i].price;
      //inputs[i].total=subtotal;
      newitems.push({item:inputs[i],total:subtotal});
   }
  return newitems;
}

function getTotalprice(newitems)
{ 
    var sum=0.00;

    for(var i=0;i<newitems.length;i++)
    {
         sum+=newitems[i].total;
    }
  
  return  sum;
  
}
  

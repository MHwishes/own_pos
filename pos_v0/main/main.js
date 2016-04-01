//TODO: Please write code in this file.
function printReceipt(inputs)
 {
   var receipt_string='';
   var newitems=getSubtotals(inputs);
   var sum=getTotalprice(newitems);
   for(var i=0;i<newitems.length;i++)
   {
      receipt_string+="名称："+newitems[i].name+"，"+"数量："+newitems[i].count+newitems[i].unit+"，"+"单价："+newitems[i].price.toFixed(2)+"(元)"+"，"+"小计："+newitems[i].total.toFixed(2)+"(元)"+"\n";
   }
  
  console.log("***<没钱赚商店>收据***"+"\n"+receipt_string+"----------------------"+"\n"+"总计："+sum.toFixed(2)+"(元)"+"\n"+"**********************");
  
}
   function getSubtotals(inputs)
 {
   var newitems=[];
   for(var i=0;i<inputs.length;i++)
    { 
      var subtotal=inputs[i].count*inputs[i].price;
      inputs[i].total=subtotal;
      newitems.push(inputs[i]);
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
  

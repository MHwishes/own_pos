//TODO: Please write code in this file.
function printReceipt(inputs) {
    var  receipt='';
    var items=getOtherItemsInfo(inputs);
    var newItems=getCount(items);
    var finalItems=getSubtotal(newItems);
    var total=getSum(finalItems);
    
    for(var i=0;i<finalItems.length;i++)
   {
      receipt+="名称："+finalItems[i].item.name+"，"
      +"数量："+finalItems[i].count+finalItems[i].item.unit+"，" 
      +"单价："+finalItems[i].item.price.toFixed(2)+"(元)"+"，"
      +"小计："+finalItems[i].subtotal.toFixed(2)+"(元)"+"\n";
   }
   console.log("***<没钱赚商店>收据***"+"\n"+receipt+"----------------------"+"\n"
   +"总计："+total.toFixed(2)+"(元)"+"\n"+"**********************");
}


function getOtherItemsInfo(inputs) {
    var items=[];
    var allItems = loadAllItems();
    for(var i=0;i<inputs.length;i++)
    {
        for(var j=0;j<allItems.length;j++)
        {
           if(inputs[i]===allItems[j].barcode)
           items.push({item:allItems[j]}); 
        }  
    }
    return items;
}


function getCount(items)
{
    var newItems=[];
    for(var i=0;i<items.length;i++)
    {
        var counter=1;
        if(items[i].item.barcode!=-1)
        {
            for(var j=i+1;j<items.length;j++)
            {
                if(items[i].item.barcode===items[j].item.barcode)
                {
                    counter++;
                     items[j].item.barcode=-1; 
                }
            }
           newItems.push({item:items[i].item,count:counter});
        }
        
    }
    return newItems;
}

function getSubtotal(newItems)
{
     var receipt=[];
    for(var i=0;i<newItems.length;i++)
    {
        var total=newItems[i].item.price*newItems[i].count;
        receipt.push({item:newItems[i].item,count:newItems[i].count,subtotal:total});
    }
    return receipt; 
}

function getSum(receipt)
{
    var sum=0;
    for(var i=0;i<receipt.length;i++)
    {
       sum+=receipt[i].subtotal;
    }
    return  sum;
}

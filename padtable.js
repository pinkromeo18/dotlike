export function padtable(str,order,cep,startoffset){
  //var dat2=padtable(dat,"-8,3,5,5",' ',1)  
  //order
  //plus start
  //minus end
  
  cep=cep||'　'
  startoffset=startoffset||0
  var start= ''.padEnd(startoffset,cep)
  var oary=order.split(',').map(d=>parseInt(d))
  
  var dat=str.split('\n').map(d=>{    
    var able=d.split(/\s/).filter(d=>d)
     .map((d,i)=>{
       var n=oary[i]
       var m=d.padStart(n,cep)
       if(n<0) m=d.padEnd(n*-1,cep)
       if(i===0)return start+m
       return m
     }).join('')
    return able    
  }).join('\n')
  
  return dat;
}

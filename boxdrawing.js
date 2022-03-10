
export function boxdrawing(str,w,h,markflg){

  w=w-2,h=h-2;
  var fn={}
  fn.range=(l=0)=>Array.from({length:l})
  var corner_lt="┌",
      corner_rt="┐",
      corner_lb="└",
      corner_rb="┘",
      bar_t="┬",
      bar_l="├",
      bar_r="┤",
      bar_b="┴",
      space="　",
      mark="▽"
  ;
  var box_t= corner_lt+"".padEnd(w,bar_t)+corner_rt;
  var box_b= corner_lb+"".padEnd(w,bar_b)+corner_rb;
  if(markflg) box_b= corner_lb+"".padEnd(w-1,bar_b)+mark+corner_rb;
  var ary=str.split('\n');  
  var body= fn.range(h)
  .map((d,i)=>bar_l + (ary[i]||'').padEnd(w,space)+bar_r).join('\n')
  
  return box_t+'\n'+body+'\n'+box_b
}

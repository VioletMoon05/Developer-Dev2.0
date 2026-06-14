// 换行符
const lineBreak = '\n';
const twoLineBreak = lineBreak.repeat(2);

// 插入的代码串配置表
const insertCodeConfig = {
  'variable-global': `a = 1${lineBreak}`,
  'variable-local': `local a = 1${lineBreak}`,
  'func-global': `function a()${twoLineBreak}end${lineBreak}`,
  'func-local': `local function a()${twoLineBreak}end${lineBreak}`,
  'assert-if': `if true then${twoLineBreak}else${twoLineBreak}end${lineBreak}`,
  'assert-ifelse': `if true then${twoLineBreak}end${lineBreak}`,
  'assert-ifelseif': `if true then${twoLineBreak}elseif true then${twoLineBreak}else${twoLineBreak}end${lineBreak}`,
  'loop-for': `for i=0, 10 do${twoLineBreak}end${lineBreak}`,
  'loop-while': `val=0${twoLineBreak}while val<5 do${twoLineBreak}val=val+1${twoLineBreak}end${lineBreak}`,
  'loop-repeatUntil': `val=0${twoLineBreak}repeat${twoLineBreak}val=val+1${twoLineBreak}until(val>5)${lineBreak}`,
  'table-global': `a = {}${lineBreak}`,
  'table-local': `local a = {}${lineBreak}`,
};

window.insertCodeConfig = insertCodeConfig;

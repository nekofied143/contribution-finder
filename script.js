const M=s;(function(h,p){const Q=s,Y=h();while(!![]){try{const j=parseInt(Q(0x1ce))/0x1*(-parseInt(Q(0x1b1))/0x2)+parseInt(Q(0x1a6))/0x3+-parseInt(Q(0x1ba))/0x4+-parseInt(Q(0x1cc))/0x5+parseInt(Q(0x1b9))/0x6*(parseInt(Q(0x1d5))/0x7)+-parseInt(Q(0x1a3))/0x8*(parseInt(Q(0x1bc))/0x9)+-parseInt(Q(0x1b0))/0xa*(-parseInt(Q(0x1d1))/0xb);if(j===p)break;else Y['push'](Y['shift']());}catch(T){Y['push'](Y['shift']());}}}(G,0xc9811),(searchInput=document['getElementById']('searchInput'),legendsContainer=document[M(0x1b6)](M(0x1be)),calculatorContainer=document[M(0x1b6)]('.calculator-container'),loandebtContainer=document[M(0x1b6)](M(0x1b8)),headsData=document[M(0x1c2)](M(0x1cf)),contributionData=document[M(0x1c2)]('contributionData'),loanBalanceData=document[M(0x1c2)](M(0x1c0)),remarksData=document['getElementById'](M(0x1ae)),dataTable=document[M(0x1c2)]('dataTable'),currentDateElement=document[M(0x1c2)](M(0x1a8)),contributionCalculationElement=document[M(0x1c2)](M(0x1a5)),loanDebtCalculationElement=document[M(0x1c2)](M(0x1c7)),estimatedDateElement=document[M(0x1c2)]('estimatedDate'),estimatedDate1Element=document['getElementById'](M(0x1aa))));function toggleLegends(){const u=M,h=document[u(0x1b6)](u(0x1b7)),p=document[u(0x1b6)](u(0x1d0));p[u(0x1c6)][u(0x1c3)]=u(0x1bb)===p[u(0x1c6)][u(0x1c3)]?u(0x1b4):'block',h[u(0x1a9)]=u(0x1bb)===p['style']['display']?u(0x1c5):u(0x1ad);}function toggleCalculator(){const b=M,h=document[b(0x1b6)]('.calculator-text'),p=document[b(0x1b6)]('.calculator-content');p[b(0x1c6)]['display']=b(0x1bb)===p['style'][b(0x1c3)]?b(0x1b4):b(0x1bb),h[b(0x1a9)]='block'===p['style'][b(0x1c3)]?b(0x1d6):b(0x1b5);}function toggleLoanDebt(){const C=M,h=document[C(0x1b6)]('.loan-debt-text'),p=document[C(0x1b6)]('.loan-debt-content');p[C(0x1c6)][C(0x1c3)]=C(0x1bb)===p[C(0x1c6)]['display']?C(0x1b4):'block',h[C(0x1a9)]=C(0x1bb)===p[C(0x1c6)]['display']?C(0x1bf):C(0x1cd);}function search(){const f=M,h=searchInput[f(0x1cb)][f(0x1ca)]()[f(0x1d3)]();if(!h)return void clearData();const p=data['find'](Y=>Y[f(0x1c1)][f(0x1d3)]()===h);p?displayData(p):displayError(f(0x1c9));}function displayData(h){const e=M;headsData[e(0x1a9)]=h['heads'],contributionData['textContent']=h[e(0x1b3)],loanBalanceData['textContent']=h[e(0x1af)];const p=h[e(0x1b3)],Y=h['heads'],j=h[e(0x1af)],T=new Date();z=h['total_loan_balance']!==0x0?e(0x1d4):e(0x1a2),remarksData[e(0x1a9)]=z,currentDateElement[e(0x1a9)]=T['toLocaleDateString']();const F=p/(0xa*Y);contributionCalculationElement[e(0x1a9)]='₱'+p+'\x20/\x20₱10\x20/\x20'+Y+e(0x1b2)+F+e(0x1d2);const Z=new Date(T['getFullYear'](),0x0,0x1+F-0x1);estimatedDateElement[e(0x1a9)]=Z['toLocaleDateString']();const v=new Date(T[e(0x1c4)](),0x0,0x1+F-0x1);estimatedDate1Element[e(0x1a9)]=v[e(0x1bd)]();const I=p-j;loanDebtCalculationElement['textContent']='₱'+p+e(0x1c8)+j+'\x20=\x20₱'+I;}function clearData(){const t=M;headsData['textContent']='',contributionData[t(0x1a9)]='',loanBalanceData[t(0x1a9)]='',remarksData[t(0x1a9)]='';}function displayError(h){const k=M;headsData[k(0x1a9)]=h,contributionData[k(0x1a9)]=h,loanBalanceData['textContent']=h,remarksData[k(0x1a9)]=h;}legendsContainer['addEventListener']('click',()=>{toggleLegends();}),calculatorContainer['addEventListener'](M(0x1ac),()=>{toggleCalculator();}),loandebtContainer['addEventListener'](M(0x1ac),()=>{toggleLoanDebt();}),searchInput[M(0x1ab)](M(0x1d7),search),document[M(0x1ab)](M(0x1a4),function(){const z=M;console[z(0x1a7)](data);});function s(h,p){const Y=G();return s=function(j,T){j=j-0x1a2;let F=Y[j];return F;},s(h,p);}function G(){const y=['Data\x20Updated\x20as\x20of\x20October\x208,\x202023','1034632qwfYXi','DOMContentLoaded','contributionCalculation','1540689JuGykp','log','currentDate','textContent','estimatedDate1','addEventListener','click','Click\x20me\x20≻','remarksData','total_loan_balance','893240UGTIop','50rtyTuF','\x20=\x20','contribution','none','CONTRIBUTION\x20DATE\x20CALCULATOR\x20≻','querySelector','.legends-text','.loan-debt-container','42aTbxRs','1523076uRqrWD','block','90TNcdCa','toLocaleDateString','.legends-container','LOAN/DEBT\x20CALCULATOR\x20⋎','loanBalanceData','name','getElementById','display','getFullYear','Click\x20me\x20⋎','style','loanDebtCalculation','\x20-\x20₱','No\x20data\x20exist!','trim','value','1313100TLqkju','LOAN/DEBT\x20CALCULATOR\x20≻','52904vXgiQq','headsData','.legends-content','363QinsNt','\x20days','toLowerCase','Open\x20Loan/Debt\x20Calculator\x20for\x20more\x20info','623385QigikV','CONTRIBUTION\x20DATE\x20CALCULATOR\x20⋎','keyup'];G=function(){return y;};return G();}

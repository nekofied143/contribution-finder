function T(L,l){const S=C();return T=function(G,g){G=G-0x18a;let Z=S[G];return Z;},T(L,l);}const d=T;(function(L,l){const v=T,S=L();while(!![]){try{const G=-parseInt(v(0x1bf))/0x1*(-parseInt(v(0x18d))/0x2)+-parseInt(v(0x1c0))/0x3+parseInt(v(0x1ab))/0x4+-parseInt(v(0x1a4))/0x5+-parseInt(v(0x1a7))/0x6+parseInt(v(0x1ae))/0x7*(-parseInt(v(0x1bc))/0x8)+parseInt(v(0x1ad))/0x9;if(G===l)break;else S['push'](S['shift']());}catch(g){S['push'](S['shift']());}}}(C,0x29cba),(searchInput=document[d(0x18a)](d(0x1a0)),legendsContainer=document[d(0x196)]('.legends-container'),calculatorContainer=document[d(0x196)](d(0x192)),loandebtContainer=document[d(0x196)](d(0x1af)),headsData=document['getElementById'](d(0x1c2)),contributionData=document['getElementById'](d(0x1b5)),loanBalanceData=document['getElementById']('loanBalanceData'),remarksData=document[d(0x18a)](d(0x1b8)),dataTable=document[d(0x18a)](d(0x1b4)),currentDateElement=document[d(0x18a)](d(0x1ba)),contributionCalculationElement=document[d(0x18a)](d(0x1b9)),loanDebtCalculationElement=document['getElementById'](d(0x1aa)),estimatedDateElement=document[d(0x18a)](d(0x18c)),estimatedDate1Element=document['getElementById'](d(0x191))));function toggleLegends(){const U=d,L=document['querySelector']('.legends-text'),l=document['querySelector'](U(0x1a1));l[U(0x1a3)][U(0x19c)]=U(0x1bd)===l[U(0x1a3)][U(0x19c)]?U(0x1bb):U(0x1bd),L[U(0x1a8)]=U(0x1bd)===l[U(0x1a3)][U(0x19c)]?'Click\x20me\x20⋎':'Click\x20me\x20≻';}function toggleCalculator(){const x=d,L=document['querySelector'](x(0x197)),l=document[x(0x196)](x(0x19f));l[x(0x1a3)][x(0x19c)]=x(0x1bd)===l[x(0x1a3)][x(0x19c)]?x(0x1bb):'block',L[x(0x1a8)]=x(0x1bd)===l[x(0x1a3)][x(0x19c)]?x(0x18f):x(0x1b2);}function toggleLoanDebt(){const t=d,L=document[t(0x196)](t(0x19d)),l=document[t(0x196)](t(0x19a));l[t(0x1a3)]['display']='block'===l[t(0x1a3)][t(0x19c)]?t(0x1bb):t(0x1bd),L[t(0x1a8)]=t(0x1bd)===l['style'][t(0x19c)]?t(0x1a9):t(0x18b);}function search(){const N=d,L=searchInput[N(0x198)][N(0x1b1)]()[N(0x1c1)]();if(!L)return void clearData();const l=data['find'](S=>S[N(0x195)]['toLowerCase']()===L);l?displayData(l):displayError(N(0x1a6));}function displayData(L){const q=d;headsData['textContent']=L['heads'],contributionData[q(0x1a8)]=L['contribution'],loanBalanceData['textContent']=L[q(0x1b6)];const S=L[q(0x193)],G=L[q(0x19b)],g=L[q(0x1b6)],Z=new Date();z=L[q(0x1b6)]!==0x0?q(0x18e):q(0x1be),remarksData[q(0x1a8)]=z,currentDateElement['textContent']=Z['toLocaleDateString']();const f=S/(0xa*G);contributionCalculationElement[q(0x1a8)]='₱'+S+q(0x194)+G+'\x20=\x20'+f+q(0x190);const R=new Date(Z[q(0x1a5)](),0x0,0x1+f-0x1);estimatedDateElement['textContent']=R[q(0x1b7)]();const J=new Date(Z[q(0x1a5)](),0x0,0x1+f-0x1);estimatedDate1Element[q(0x1a8)]=J[q(0x1b7)]();const M=S-g;loanDebtCalculationElement[q(0x1a8)]='₱'+S+q(0x1b3)+g+q(0x1ac)+M;}function C(){const H=['value','addEventListener','.loan-debt-content','heads','display','.loan-debt-text','click','.calculator-content','searchInput','.legends-content','log','style','1383165BaEjaf','getFullYear','No\x20data\x20exist!','1356744nxJzKd','textContent','LOAN/DEBT\x20CALCULATOR\x20⋎','loanDebtCalculation','1146736fHvFhs','\x20=\x20₱','5851206ijWkeX','7SQTYAM','.loan-debt-container','keyup','trim','CONTRIBUTION\x20DATE\x20CALCULATOR\x20≻','\x20-\x20₱','dataTable','contributionData','total_loan_balance','toLocaleDateString','remarksData','contributionCalculation','currentDate','none','1836872mOVaRf','block','Data\x20Updated\x20as\x20of\x20October\x208,\x202023','9761ueOJHa','773283cUCewB','toLowerCase','headsData','getElementById','LOAN/DEBT\x20CALCULATOR\x20≻','estimatedDate','46WOpYfO','Open\x20Loan/Debt\x20Calculator\x20for\x20more\x20info\x20|\x20October\x208,\x202023','CONTRIBUTION\x20DATE\x20CALCULATOR\x20⋎','\x20days','estimatedDate1','.calculator-container','contribution','\x20/\x20₱10\x20/\x20','name','querySelector','.calculator-text'];C=function(){return H;};return C();}function clearData(){const u=d;headsData[u(0x1a8)]='',contributionData[u(0x1a8)]='',loanBalanceData['textContent']='',remarksData[u(0x1a8)]='';}function displayError(L){const i=d;headsData[i(0x1a8)]=L,contributionData[i(0x1a8)]=L,loanBalanceData['textContent']=L,remarksData[i(0x1a8)]=L;}legendsContainer[d(0x199)](d(0x19e),()=>{toggleLegends();}),calculatorContainer[d(0x199)](d(0x19e),()=>{toggleCalculator();}),loandebtContainer[d(0x199)]('click',()=>{toggleLoanDebt();}),searchInput[d(0x199)](d(0x1b0),search),document[d(0x199)]('DOMContentLoaded',function(){const A=d;console[A(0x1a2)](data);});

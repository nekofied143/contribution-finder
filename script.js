const Y=N;(function(y,z){const f=N,Z=y();while(!![]){try{const m=parseInt(f(0x141))/0x1+parseInt(f(0x142))/0x2+-parseInt(f(0x150))/0x3+-parseInt(f(0x133))/0x4*(-parseInt(f(0x155))/0x5)+-parseInt(f(0x152))/0x6+parseInt(f(0x14b))/0x7*(-parseInt(f(0x13c))/0x8)+parseInt(f(0x135))/0x9*(parseInt(f(0x15e))/0xa);if(m===z)break;else Z['push'](Z['shift']());}catch(a){Z['push'](Z['shift']());}}}(c,0xaf9d8),(searchInput=document['getElementById'](Y(0x161)),legendsContainer=document[Y(0x139)](Y(0x158)),calculatorContainer=document['querySelector']('.calculator-container'),loandebtContainer=document['querySelector']('.loan-debt-container'),headsData=document['getElementById']('headsData'),contributionData=document[Y(0x140)](Y(0x134)),loanBalanceData=document[Y(0x140)](Y(0x14d)),remarksData=document['getElementById'](Y(0x15d)),dataTable=document[Y(0x140)](Y(0x13b)),currentDateElement=document['getElementById'](Y(0x146)),contributionCalculationElement=document['getElementById'](Y(0x13a)),loanDebtCalculationElement=document['getElementById'](Y(0x159)),estimatedDateElement=document[Y(0x140)](Y(0x131)),estimatedDate1Element=document[Y(0x140)](Y(0x13d))));function toggleLegends(){const g=Y,y=document[g(0x139)](g(0x14c)),z=document[g(0x139)](g(0x13e));z['style'][g(0x15a)]=g(0x145)===z['style'][g(0x15a)]?g(0x15c):g(0x145),y[g(0x15f)]=g(0x145)===z[g(0x149)]['display']?'Click\x20me\x20⋎':g(0x132);}function toggleCalculator(){const K=Y,y=document[K(0x139)](K(0x154)),z=document[K(0x139)]('.calculator-content');z[K(0x149)][K(0x15a)]=K(0x145)===z[K(0x149)][K(0x15a)]?K(0x15c):K(0x145),y[K(0x15f)]='block'===z['style'][K(0x15a)]?'CONTRIBUTION\x20DATE\x20CALCULATOR\x20⋎':'CONTRIBUTION\x20DATE\x20CALCULATOR\x20≻';}function toggleLoanDebt(){const C=Y,y=document[C(0x139)]('.loan-debt-text'),z=document[C(0x139)]('.loan-debt-content');z['style'][C(0x15a)]=C(0x145)===z['style']['display']?C(0x15c):'block',y['textContent']='block'===z[C(0x149)][C(0x15a)]?'LOAN/DEBT\x20CALCULATOR\x20⋎':'LOAN/DEBT\x20CALCULATOR\x20≻';}function search(){const F=Y,y=searchInput[F(0x147)]['trim']()[F(0x156)]();if(!y)return void clearData();const z=data[F(0x162)](Z=>Z['name'][F(0x156)]()===y);z?displayData(z):displayError(F(0x136));}function displayData(y){const q=Y;headsData[q(0x15f)]=y[q(0x14a)],contributionData[q(0x15f)]=y['contribution'],loanBalanceData[q(0x15f)]=y[q(0x14f)];const z=y[q(0x14e)],Z=y[q(0x14a)],u=y[q(0x14f)],x=new Date();z=y['total_loan_balance']!==0x0?q(0x151):q(0x138),remarksData[q(0x15f)]=z,currentDateElement['textContent']=x[q(0x15b)]();const D=z/(0xa*Z);contributionCalculationElement[q(0x15f)]='₱'+z+q(0x137)+Z+'\x20=\x20'+D+q(0x160);const i=new Date(x['getFullYear'](),0x0,0x1+D-0x1);estimatedDateElement[q(0x15f)]=i[q(0x15b)]();const w=new Date(x['getFullYear'](),0x0,0x1+D-0x1);estimatedDate1Element['textContent']=w[q(0x15b)]();const T=z-u;loanDebtCalculationElement[q(0x15f)]='₱'+z+q(0x143)+u+q(0x157)+T;}function c(){const J=['currentDate','value','click','style','heads','8139796zPNOWe','.legends-text','loanBalanceData','contribution','total_loan_balance','2066601SRBWnp','Data\x20Updated\x20as\x20of\x20October\x208,\x202023.\x20Open\x20Loan/Debt\x20Calculator\x20for\x20more\x20info','8468778ePWILd','keyup','.calculator-text','25yDyADv','toLowerCase','\x20=\x20₱','.legends-container','loanDebtCalculation','display','toLocaleDateString','none','remarksData','4190JhEYio','textContent','\x20days','searchInput','find','estimatedDate','Click\x20me\x20≻','1003704yjFqMe','contributionData','25110cRyUSo','No\x20data\x20exist!','\x20/\x20₱10\x20/\x20','Data\x20Updated\x20as\x20of\x20October\x208,\x202023','querySelector','contributionCalculation','dataTable','8AICcAs','estimatedDate1','.legends-content','addEventListener','getElementById','655297nAsaZE','1807082ZhNueh','\x20-\x20₱','DOMContentLoaded','block'];c=function(){return J;};return c();}function clearData(){const e=Y;headsData['textContent']='',contributionData[e(0x15f)]='',loanBalanceData[e(0x15f)]='',remarksData[e(0x15f)]='';}function displayError(y){const L=Y;headsData[L(0x15f)]=y,contributionData[L(0x15f)]=y,loanBalanceData[L(0x15f)]=y,remarksData[L(0x15f)]=y;}function N(y,z){const Z=c();return N=function(m,a){m=m-0x131;let u=Z[m];return u;},N(y,z);}legendsContainer[Y(0x13f)](Y(0x148),()=>{toggleLegends();}),calculatorContainer[Y(0x13f)](Y(0x148),()=>{toggleCalculator();}),loandebtContainer['addEventListener'](Y(0x148),()=>{toggleLoanDebt();}),searchInput[Y(0x13f)](Y(0x153),search),document[Y(0x13f)](Y(0x144),function(){console['log'](data);});

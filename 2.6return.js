//입력값 ms초단위로 바꾸기
function second(a,b){
  let result = (a*60 + b) * 1000; 
  return result;
}

console.log(second(1,30));


//할인 판매가
function sale(standard, first){
  let salePrice;
  if(first == true){
    salePrice = (0.9*standard) - 1.5;
    first = false;
    return parseFloat(salePrice.toFixed(2)); //소수점 자리수를 2자리까지 절삭하기
  }else{
    salePrice = 0.9*standard;
  }return parseFloat(salePrice.toFixed(2));
}

console.log(sale(10.3,false));



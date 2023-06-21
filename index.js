const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

// Ex 1
  companies.forEach((c)=>{
    console.log(c.name)
  })

 //Ex 2
  companies.forEach((c)=>{
    if(c.start>1987)
    console.log(c.name)
  })

  //Ex 3
 let companiesArr=companies.filter((c)=>{ return (c.category=="Retail")})
 companiesArr.forEach((c)=>{c.start++})
 const div=document.createElement("div");
 companiesArr.forEach((c)=>{
  const p = document.createElement("p")
  p.innerHTML=`name: ${c.name} category: ${c.category} start: ${c.start} end: ${c.end}`
  div.appendChild(p)
 })
document.body.appendChild(div)

//Ex 4
companies.sort((a,b)=>{
  return a.end - b.end
})

//Ex 5
ages.sort((a,b)=>b-a)


//Ex 6
ages.reduce((total, num)=>total+num, 0)

//Ex 7
let {name,category}=companies[0]


//Ex 8
function sum (...numbers){
  return numbers.reduce((total, num)=>total+num, 0)
}

//Ex 9
function makeAgumentsArr(...args){
  let arr=[];
  args.forEach((element)=>{
    if(element instanceof Array)
    {
      arr.push(...element)
    }
    else arr.push(element)
  })
  
  return arr
}
makeAgumentsArr(["riki",45,[3,true,"nine"],{name:"riki",id:"123"}])

//Ex 10
let {address:{street}} =person


//Ex 11
var increment = (function(n) {
  return function() {
    n += 1;
    return n;
  }
}(-1));



//Ex 12
function distructureUrl(url){
url=url.substr(url.indexOf('?')+1);

let params={};

 while(url!=""){

  let key =url.substring(0,url.indexOf('='))
  url=url.substring(url.indexOf('=')+1)

  let value=""
  if(url.indexOf('&')!=-1){
     value=url.substring(0,url.indexOf('&'))
    url=url.substring(url.indexOf('&')+1)
  }
  else{
     value=url;
     url="";
  }

  params[key]=value

}

return params;

}
 distructureUrl("udfa/dsg/dfgbkjfdsj?id=1234&name=riki&age=19")


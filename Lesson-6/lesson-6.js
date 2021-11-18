////////////////////////////My - version//////////////////////////////
const neolabs = {
    'js-10/21': ['abdullah', 'gulzada', 'begimai', 'bektur'],
    'js-8/21': ['islam', 'aruuke', 'aibek', 'samat']
};
 
function addStudent(group, name) {
    if (group == "js-8/21") {
        neolabs["js-8/21"].push(name)
    } else if (group == "js-10/21") {
        neolabs["js-10/21"].push(name)
    } else {
        'sorry, group is undefined!'
    }
     
}
  
addStudent('js-8/21', 'TEST');
 
console.log(neolabs);

////////////////////////////Better - Solution//////////////////////////////
/* const neolabs = {
    'js-10/21': ['abdullah', 'gulzada', 'begimai', 'bektur'],
    'js-8/21': ['islam', 'aruuke', 'aibek', 'samat'],
    'py-10/21': []
};
 
function addStudent(group, name) {
    const groups = Object.keys(neolabs)
   
  if (groups.includes(group)) {
    neolabs[group].push(name)
 } else {
    console.log('sorry, group is undefined!')
 }
}
 
addStudent('py-10/21', 'TEST');
 
console.log(neolabs); */
 
 
 
function test1() { //function Declaration
    console.log('test1')
}
 
const test2 = function() { //function expression - 'ANONIMNAYA FUNKTZIA'
    console.log('test2')
}
 
test1()
test2();
 
/// Nyuans mejdy etimi functziyami 'function expression and declaration - если вызывать функцию прежде,
//до самой функции в случае с expression - выдаст ошибку'
 
console.log(
    function() {
        return 'test3'
    } ()
);
 
 //also
 (function(){
     console.log('test4')
 })();
 
 const cat = {
     name: 'Barsik',
     breed: 'angorka',
     meow: function() {
         console.log('"meow"')
     }
 }
 cat.meow()
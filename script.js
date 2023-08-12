 
 //Test 1
 
 let tree = ""
 tree = {
    height : 10, 
    color: 'Green', 
    grouw(){
        this.height += 2;
    }
};

console.log(tree.height);//10
tree.grouw();
console.log(tree.height);// 12= 10 + 2(grouw)
tree.grouw();
console.log(tree.height);// 14= 12(First grouw+height) + 2(grouw)


//Test 2




// //...Oprator
// let arrTest1 = [1,2,3,4,5,6];
// let arrTest2 = [7,8,9];
// let arrTest3 = [arrTest1,arrTest2];

// document.write(arrTest3);

// let max = Math.max(...arrTest1);
// document.write(max);
// console.log(...arrTest1)
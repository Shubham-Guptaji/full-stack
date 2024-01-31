function arrfn(addfirst, addlast, allergy, modifyto, modifywith) {
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

    console.log('Actual ShoppingCart : ', shoppingCart);

    if (addfirst && !shoppingCart.includes(addfirst)) {
        shoppingCart.unshift(addfirst)
        console.log(`After adding ${addfirst} : `, shoppingCart)
    }

    if (addlast && !shoppingCart.includes(addlast)) {
        shoppingCart.push(addlast)
        console.log(`After adding ${addlast} : `, shoppingCart)
    }

    if (allergy && shoppingCart.includes(allergy)){
        shoppingCart.splice(shoppingCart.indexOf(allergy), 1);
        console.log(`After removing allergy item : `, shoppingCart)
    }
    if(modifyto && modifywith && shoppingCart.includes(modifywith)){
        shoppingCart[shoppingCart.indexOf(modifywith)] = modifyto;
        console.log(`After replacing ${modifywith} to ${modifyto} : `, shoppingCart)
    }

    return shoppingCart;
}

let result = arrfn('Meat', 'Sugar','Honey','Green Tea','Tea');

console.log('Result after crud in ShoppingCart is : ',result);

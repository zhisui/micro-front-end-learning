
import facker from 'faker'
let productString = ''
for (let i = 0; i < 5; i++) {
  productString += `<div>${facker.commerce.productName()}`
}

document.querySelector('#products-list').innerHTML = productString

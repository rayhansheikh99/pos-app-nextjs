export const calculateTotalQuantity = (cart) => {
    let totalQuantity = 0;
  
    cart.forEach(item => {
      totalQuantity += item?.qty;
    });
  
    return totalQuantity;
  };
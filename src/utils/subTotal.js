export const calculateSubtotal = (cart) => {
  let subtotal = 0;

  cart?.forEach(item => {
    subtotal += parseFloat(item?.price) * parseInt(item?.qty);
  });

  return subtotal;
};

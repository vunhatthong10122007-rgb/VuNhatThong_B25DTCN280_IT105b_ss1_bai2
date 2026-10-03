const customerName = "Nguyen Van An";
const rawMainDishPrice = "120000"; // Giá món chính (VND)
const rawDrinkPrice = "35000"; // Giá đồ uống (VND)
const rawQuantity = "3"; // Số lượng suất
const rawDistanceKm = "3.5"; // Cự ly giao hàng (km)
const openingDiscount = 20000; // Giảm giá khai trương cố định (VND)
const vatRate = 0.08; // Thuế suất VAT (8%)

const mainDishPrice = Number(rawMainDishPrice);
const drinkPrice = Number(rawDrinkPrice);
const quantity = Number(rawQuantity);
const distanceKm = Number(rawDistanceKm);

const foodSubtotal = (mainDishPrice + drinkPrice) * quantity;
const discountedTotal = foodSubtotal - openingDiscount;
const vatAmount = discountedTotal * vatRate;
const shippingFee = 15000 + distanceKm * 4000;
const finalPayment = discountedTotal + vatAmount + shippingFee;

console.log(`================ HÓA ĐƠN ĐẶT MÓN ================\n`+
`Khách hàng: ${customerName}\n`+
`Tiền món ăn: ${foodSubtotal} VND\n`+
`Chiết khấu : ${openingDiscount} VND\n`+
`Tiền sau chiết khấu: ${discountedTotal} VND\n`+
`Thuế VAT: ${vatAmount} VND\n`+
`Cước vận chuyển (${distanceKm} km): ${shippingFee} VND\n`+
`-------------------------------------------------\n`+
`TỔNG THANH TOÁN THỰC TẾ: ${finalPayment} VND\n`+
`=================================================`);

// TH1: cự ly rawDistanceKm = "5.0" -> Thanh Toán: 348200
// TH2: rawQuantity = "3" -> Thanh toán: 509600
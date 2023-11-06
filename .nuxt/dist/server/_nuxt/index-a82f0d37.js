const returnedOrderStatus = {
  confirmed: "تم قبول الطلب",
  pending: "قيد المراجعة",
  rejected: "تم رفض الطلب"
};
const walletStatus = {
  pending: "معلق",
  accepted: "تم الارسال",
  canceled: "مرفوض",
  denied: "ملغى"
};
const orderStatus = {
  pending: "معلق",
  confirmed: "تم التأكيد",
  processing: "انتظار الشحن",
  cancelled: "تم الالغاء",
  shipping: "خارج للتوصيل",
  rejected: "تم الرفض",
  delivered: "تم التوصيل"
};
const banks = {
  banktransfer: "banktransfer",
  instapay: "instapay",
  vodafone: "vodafone_cash",
  paypal: "paypal"
};
const productsStatuses = [
  {
    title: "وصل حديثا",
    value: ""
  },
  {
    title: "الاقل سعر للبيع",
    value: "price:asc"
  },
  {
    title: "الاعلى سعر للبيع",
    value: "price:desc"
  },
  {
    title: "الاقل سعر للربح",
    value: "minCommission:asc"
  },
  {
    title: "الاعلى سعر للربح",
    value: "minCommission:desc"
  }
];
const productStatus = [
  {
    from: 0,
    to: 25,
    color: "#F85A40"
  },
  {
    from: 26,
    to: 50,
    color: "#EEDC53"
  },
  {
    from: 51,
    to: void 0,
    color: "#05BD6E"
  }
];
const productsActives = [
  {
    title: "الكل",
    value: ""
  },
  {
    title: "اعلي",
    value: "high",
    color: "#05BD6E"
  },
  {
    title: "وسط",
    value: "medium",
    color: "#EEDC53"
  },
  {
    title: "اقل",
    value: "low",
    color: "#F85A40"
  }
];
export {
  productsStatuses as a,
  banks as b,
  productStatus as c,
  orderStatus as o,
  productsActives as p,
  returnedOrderStatus as r,
  walletStatus as w
};
//# sourceMappingURL=index-a82f0d37.js.map

export const returnedOrderStatus = {
  confirmed: "تم قبول الطلب",
  pending: "قيد المراجعة",
  rejected: "تم رفض الطلب",
};

export const walletStatus = {
  pending: "معلق",
  accepted: "تم الارسال",
  canceled: "مرفوض",
  denied: "ملغى",
};

export const orderStatus = {
  pending: "معلق",
  confirmed: "تم التأكيد",
  processing: "انتظار الشحن",
  cancelled: "تم الالغاء",
  shipping: "خارج للتوصيل",
  rejected: "تم الرفض",
  delivered: "تم التوصيل",
};

export const banks = {
  banktransfer: "banktransfer",
  instapay: "instapay",
  vodafone: "vodafone_cash",
  paypal: "paypal",
};

export const productsStatuses = [
  {
    title: "وصل حديثا",
    value: "",
  },
  {
    title: "الاقل سعر للبيع",
    value: "price:asc",
  },
  {
    title: "الاعلى سعر للبيع",
    value: "price:desc",
  },
  {
    title: "الاقل سعر للربح",
    value: "minCommission:asc",
  },
  {
    title: "الاعلى سعر للربح",
    value: "minCommission:desc",
  },
];

export const productStatus = [
  {
    from: 0,
    to: 25,
    color: "#F85A40",
  },
  {
    from: 26,
    to: 50,
    color: "#EEDC53",
  },
  {
    from: 51,
    to: undefined,
    color: "#05BD6E",
  },
];

export const productsActives = [
  {
    title: "الكل",
    value: "",
  },
  {
    title: "اعلي",
    value: "high",
    color: "#05BD6E",
  },
  {
    title: "وسط",
    value: "medium",
    color: "#EEDC53",
  },
  {
    title: "اقل",
    value: "low",
    color: "#F85A40",
  },
];

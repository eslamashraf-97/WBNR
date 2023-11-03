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
    value: "arrived",
  },
  {
    title: "الاقل سعر للبيع",
    value: "lowest_price_for_sale",
  },
  {
    title: "الاعلى سعر للبيع",
    value: "most_price_for_sale",
  },
  {
    title: "الاقل سعر للربح",
    value: "lowest_commission",
  },
  {
    title: "الاعلى سعر للربح",
    value: "most_commission",
  },
];

export const productsActives = [
  {
    title: "الكل",
    value: "",
  },
  {
    title: "اعلي",
    value: "top",
    color: "#05BD6E",
  },
  {
    title: "وسط",
    value: "medium",
    color: "#EEDC53",
  },
  {
    title: "اقل",
    value: "bottom",
    color: "#F85A40",
  },
];

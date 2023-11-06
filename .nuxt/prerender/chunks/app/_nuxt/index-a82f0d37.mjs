const returnedOrderStatus = {
  confirmed: "\u062A\u0645 \u0642\u0628\u0648\u0644 \u0627\u0644\u0637\u0644\u0628",
  pending: "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
  rejected: "\u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0637\u0644\u0628"
};
const walletStatus = {
  pending: "\u0645\u0639\u0644\u0642",
  accepted: "\u062A\u0645 \u0627\u0644\u0627\u0631\u0633\u0627\u0644",
  canceled: "\u0645\u0631\u0641\u0648\u0636",
  denied: "\u0645\u0644\u063A\u0649"
};
const orderStatus = {
  pending: "\u0645\u0639\u0644\u0642",
  confirmed: "\u062A\u0645 \u0627\u0644\u062A\u0623\u0643\u064A\u062F",
  processing: "\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0634\u062D\u0646",
  cancelled: "\u062A\u0645 \u0627\u0644\u0627\u0644\u063A\u0627\u0621",
  shipping: "\u062E\u0627\u0631\u062C \u0644\u0644\u062A\u0648\u0635\u064A\u0644",
  rejected: "\u062A\u0645 \u0627\u0644\u0631\u0641\u0636",
  delivered: "\u062A\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644"
};
const banks = {
  banktransfer: "banktransfer",
  instapay: "instapay",
  vodafone: "vodafone_cash",
  paypal: "paypal"
};
const productsStatuses = [
  {
    title: "\u0648\u0635\u0644 \u062D\u062F\u064A\u062B\u0627",
    value: ""
  },
  {
    title: "\u0627\u0644\u0627\u0642\u0644 \u0633\u0639\u0631 \u0644\u0644\u0628\u064A\u0639",
    value: "price:asc"
  },
  {
    title: "\u0627\u0644\u0627\u0639\u0644\u0649 \u0633\u0639\u0631 \u0644\u0644\u0628\u064A\u0639",
    value: "price:desc"
  },
  {
    title: "\u0627\u0644\u0627\u0642\u0644 \u0633\u0639\u0631 \u0644\u0644\u0631\u0628\u062D",
    value: "minCommission:asc"
  },
  {
    title: "\u0627\u0644\u0627\u0639\u0644\u0649 \u0633\u0639\u0631 \u0644\u0644\u0631\u0628\u062D",
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
    title: "\u0627\u0644\u0643\u0644",
    value: ""
  },
  {
    title: "\u0627\u0639\u0644\u064A",
    value: "high",
    color: "#05BD6E"
  },
  {
    title: "\u0648\u0633\u0637",
    value: "medium",
    color: "#EEDC53"
  },
  {
    title: "\u0627\u0642\u0644",
    value: "low",
    color: "#F85A40"
  }
];

export { productsStatuses as a, banks as b, productStatus as c, orderStatus as o, productsActives as p, returnedOrderStatus as r, walletStatus as w };
//# sourceMappingURL=index-a82f0d37.mjs.map

function createInvoice(services) {
  services = services || {};

  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    paymentTotal: 0,

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.paymentTotal += payment.total();
    },

    addPayments(payments) {
      payments.forEach(function (payment) {
        this.paymentTotal += payment.total();
      }, this);
    },

    amountDue() {
      return this.total() - this.paymentTotal;
    },
  };
}

function createPayment(services) {
  services = services || {};

  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,

    total() {
      return this.amount || this.phone + this.internet;
    }
  };
}

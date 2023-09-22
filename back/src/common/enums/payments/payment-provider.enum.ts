export enum PaymentProviderStatuses {
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS',
  CANCELED = 'CANCELED',
  PROCESSING = 'PROCESSING',
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  REQUIRE_AUTHENTICATION = 'REQUIRE_AUTHENTICATION',
}

export enum RefundProviderStatuses {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  PROCESSING = 'PROCESSING',
}

export interface LineItem {
  description: string;
  unitPrice: number;
  quantity: number;
}

export class InvoiceFactory {
  public static computeStatement(lineItems: LineItem[], percentageTax: number, structuralDiscount = 0): { subtotal: number; applicableTax: number; finalDueAmount: number } {
    const subtotal = lineItems.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const amountAfterDiscount = Math.max(subtotal - structuralDiscount, 0);
    const applicableTax = parseFloat((amountAfterDiscount * (percentageTax / 100)).toFixed(2));
    const finalDueAmount = parseFloat((amountAfterDiscount + applicableTax).toFixed(2));

    return {
      subtotal,
      applicableTax,
      finalDueAmount
    };
  }
}


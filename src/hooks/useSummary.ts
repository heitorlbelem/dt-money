import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += Number(transaction.price);
        acc.total += Number(transaction.price);
      } else {
        acc.outcome += Number(transaction.price);
        acc.total -= Number(transaction.price);
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return { summary };
};

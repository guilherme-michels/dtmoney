import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionsModalOpen}
          onRequestClose={handleCloseNewTransactionsModal}
        />
        <GlobalStyle />
      </TransactionsProvider>
    </>
  );
}

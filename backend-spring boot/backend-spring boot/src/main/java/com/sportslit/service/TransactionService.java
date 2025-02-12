package com.sportslit.service;

import java.util.List;

import com.sportslit.model.Order;
import com.sportslit.model.Seller;
import com.sportslit.model.Transaction;
import com.sportslit.model.User;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySeller(Seller seller);
    List<Transaction>getAllTransactions();
}

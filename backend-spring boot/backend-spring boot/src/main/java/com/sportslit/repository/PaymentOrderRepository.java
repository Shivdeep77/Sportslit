package com.sportslit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportslit.model.PaymentOrder;

public interface PaymentOrderRepository extends JpaRepository<PaymentOrder,Long> {

    PaymentOrder findByPaymentLinkId(String paymentId);
}

package com.sportslit.response;

import com.sportslit.dto.OrderHistory;
import com.sportslit.model.Cart;
import com.sportslit.model.Order;
import com.sportslit.model.Product;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FunctionResponse {
    private String functionName;
    private Cart userCart;
    private OrderHistory orderHistory;
    private Product product;
}

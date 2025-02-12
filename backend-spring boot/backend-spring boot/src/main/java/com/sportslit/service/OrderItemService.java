package com.sportslit.service;


import com.sportslit.exception.OrderException;
import com.sportslit.model.OrderItem;
import com.sportslit.model.Product;

public interface OrderItemService {

	OrderItem getOrderItemById(Long id) throws Exception;
	


}

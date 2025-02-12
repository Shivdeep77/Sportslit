package com.sportslit.service;

import com.sportslit.exception.ProductException;
import com.sportslit.model.Cart;
import com.sportslit.model.CartItem;
import com.sportslit.model.Product;
import com.sportslit.model.User;
import com.sportslit.request.AddItemRequest;

public interface CartService {
	
	public CartItem addCartItem(User user,
								Product product,
								String size,
								int quantity) throws ProductException;
	
	public Cart findUserCart(User user);

}

package com.sportslit.service;

import com.sportslit.exception.CartItemException;
import com.sportslit.exception.UserException;
import com.sportslit.model.Cart;
import com.sportslit.model.CartItem;
import com.sportslit.model.Product;


public interface CartItemService {
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}

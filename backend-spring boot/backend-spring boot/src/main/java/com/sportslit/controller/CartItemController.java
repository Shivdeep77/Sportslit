package com.sportslit.controller;

import com.sportslit.exception.CartItemException;
import com.sportslit.exception.UserException;
import com.sportslit.model.CartItem;
import com.sportslit.model.User;
import com.sportslit.response.ApiResponse;
import com.sportslit.service.CartItemService;
import com.sportslit.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart_items")
public class CartItemController {

	private CartItemService cartItemService;
	private UserService userService;
	
	public CartItemController(CartItemService cartItemService, UserService userService) {
		this.cartItemService=cartItemService;
		this.userService=userService;
	}
	

}

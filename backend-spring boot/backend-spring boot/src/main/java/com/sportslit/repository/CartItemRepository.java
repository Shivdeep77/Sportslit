package com.sportslit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportslit.model.Cart;
import com.sportslit.model.CartItem;
import com.sportslit.model.Product;
import com.sportslit.model.User;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);


}

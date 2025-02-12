package com.sportslit.service;


import com.sportslit.exception.WishlistNotFoundException;
import com.sportslit.model.Product;
import com.sportslit.model.User;
import com.sportslit.model.Wishlist;

import java.util.Optional;

public interface WishlistService {

    Wishlist createWishlist(User user);

    Wishlist getWishlistByUserId(User user);

    Wishlist addProductToWishlist(User user, Product product) throws WishlistNotFoundException;

}


package com.sportslit.service;

import com.sportslit.exception.SellerException;
import com.sportslit.exception.UserException;
import com.sportslit.request.LoginRequest;
import com.sportslit.request.ResetPasswordRequest;
import com.sportslit.request.SignupRequest;
import com.sportslit.response.ApiResponse;
import com.sportslit.response.AuthResponse;

import jakarta.mail.MessagingException;

public interface AuthService {

    void sentLoginOtp(String email) throws UserException, MessagingException;
    String createUser(SignupRequest req) throws SellerException;
    AuthResponse signin(LoginRequest req) throws SellerException;

}

package com.sportslit.service;

import java.util.List;

import com.sportslit.exception.UserException;
import com.sportslit.model.User;

public interface UserService {

	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public User findUserByEmail(String email) throws UserException;


}

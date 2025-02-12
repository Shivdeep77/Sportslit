package com.sportslit.mapper;

import com.sportslit.dto.OrderDto;
import com.sportslit.dto.OrderItemDto;
import com.sportslit.dto.UserDto;
import com.sportslit.model.Order;
import com.sportslit.model.OrderItem;
import com.sportslit.model.User;

public class UserMapper {

    public static UserDto toUserDto(User user){
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setFullName(user.getFullName());
        userDto.setEmail(user.getEmail());
        return userDto;
    }

}

package com.sportslit.service;

import java.util.List;

import com.sportslit.model.Home;
import com.sportslit.model.HomeCategory;

public interface HomeService {

    Home creatHomePageData(List<HomeCategory> categories);

}

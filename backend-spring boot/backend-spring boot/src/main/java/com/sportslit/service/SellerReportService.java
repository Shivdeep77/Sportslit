package com.sportslit.service;

import java.util.List;
import java.util.Optional;

import com.sportslit.model.Seller;
import com.sportslit.model.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport( SellerReport sellerReport);

}

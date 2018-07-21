package bitcamp.java106.pms.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java106.pms.domain.Tour;

public interface TourDao {
    int delete(int no) ;
    List<Tour> selectList(Map<String,Object> params);
    int insert(Tour tour);
    int update(Tour tour);
    Tour selectOne(int no);
}







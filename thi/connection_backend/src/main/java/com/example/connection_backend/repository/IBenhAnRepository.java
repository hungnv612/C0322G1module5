package com.example.connection_backend.repository;

import com.example.connection_backend.model.BenhAn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IBenhAnRepository extends JpaRepository<BenhAn,Integer> {
    //    hiển thị danh sách
    @Query(value = "select * from benh_an", nativeQuery = true)
    List<BenhAn> findAllPatient();


    //    Chỉnh sửa
    @Modifying
    @Query(value = "update benh_an set id=:id," +
            " bac_si=:bac_si," +
            " ly_do=:ly_do," +
            " ngay_nhap_vien=:ngay_nhap_vien, " +
            " ngay_ra_vien=:ngay_ra_vien," +
            " phuong_phap=:phuong_phap where id=:id", nativeQuery = true)
    void updatePatient(@Param("codePatient") String codePatient,
                       @Param("doctor") String doctor,
                       @Param("endDay") String endDay,
                       @Param("method") String method,
                       @Param("reason") String reason,
                       @Param("startDay") String startDay,
                       @Param("id") int id);


    //    Thêm mới
    @Modifying
    @Query(value = "insert into benh_an(id, bac_si, ly_do, ngay_nhap_vien, ngay_ra_vien, phuong_phap,benh_nhan_id)," +
            " values(:codePatient, :doctor, : endDay, :method, :reason, :startDay) ", nativeQuery = true)
    void addPatient(@Param("codePatient") String codePatient,
                    @Param("doctor") String doctor,
                    @Param("endDay") String endDay,
                    @Param("method") String method,
                    @Param("reason") String reason,
                    @Param("startDay") String startDay);


    //    tìm kiếm theo tên
    @Query(value = "select * from Patient where code_patient like: search", nativeQuery = true)
    List<BenhAn> searchByCodePatient(@Param("search") String search);


    //    Xóa
    @Query(value = "delete from Patient where id=: id", nativeQuery = true)
    void deletePatient(@Param("id") int id);


    //    Tìm kiếm ID
    @Query(value = "select *from Patient where id=: id", nativeQuery = true)
    BenhAn findById(@Param("id") int id);
}

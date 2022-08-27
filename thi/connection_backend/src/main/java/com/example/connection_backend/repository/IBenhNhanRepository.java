package com.example.connection_backend.repository;

import com.example.connection_backend.model.BenhNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;


@Transactional
public interface IBenhNhanRepository extends JpaRepository<BenhNhan,Integer> {

    @Query(value = "select * from Patienter", nativeQuery = true)
    List<BenhNhan> listPatienter();
}

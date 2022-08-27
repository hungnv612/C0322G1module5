package com.example.connection_backend.model;

import javax.persistence.*;

@Entity
public class benhAn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private benhNhan benhNhan;

    private String ngayNhapVien;
    private String ngayRaVien;
    private String lyDo;
    private String phuongPhap;
    private String bacSi;
}

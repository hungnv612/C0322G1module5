package com.example.connection_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class BenhNhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @OneToMany(mappedBy = "benhNhan")
    @JsonBackReference
    private Set<BenhAn> benhAns;

    public BenhNhan() {
    }

    public BenhNhan(int id, String name, Set<BenhAn> benhAns) {
        this.id = id;
        this.name = name;
        this.benhAns = benhAns;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<BenhAn> getBenhAns() {
        return benhAns;
    }

    public void setBenhAns(Set<BenhAn> benhAns) {
        this.benhAns = benhAns;
    }
}

package com.ozden.testmanapi.testmanager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Data
@AllArgsConstructor
@Entity
@Table(name = "tests")
public class Test {

    @GeneratedValue
    @Id
    private Long id;

    @Column
    private String name;

    @Column
    private String status;

    @Column
    private String description;
}

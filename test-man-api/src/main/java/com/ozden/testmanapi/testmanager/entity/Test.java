package com.ozden.testmanapi.testmanager.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tests")
public class Test {

    // TODO: consider using UUID
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

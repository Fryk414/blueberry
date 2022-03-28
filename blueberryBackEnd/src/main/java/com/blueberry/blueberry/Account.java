package com.blueberry.blueberry;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "individual")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(unique=true)
    private String username;
    private String password;
    private Role role;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
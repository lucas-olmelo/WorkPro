package com.bigodebombado.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bigodebombado.backend.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}

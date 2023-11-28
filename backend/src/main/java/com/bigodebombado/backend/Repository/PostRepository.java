package com.bigodebombado.backend.Repository;

import com.bigodebombado.backend.Model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}

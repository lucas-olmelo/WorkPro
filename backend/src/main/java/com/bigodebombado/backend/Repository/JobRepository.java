package com.bigodebombado.backend.Repository;

import com.bigodebombado.backend.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
